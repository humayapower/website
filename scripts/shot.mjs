/**
 * Visual check harness.
 *
 *   node scripts/shot.mjs [baseUrl] [outDir]
 *
 * Captures every route at desktop and mobile, and asserts the things that are
 * easy to ship broken and hard to notice: horizontal overflow, clipped
 * descenders on display type, and CTA labels wrapping to more than one line.
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = process.argv[2] ?? "http://localhost:3111";
const OUT = process.argv[3] ?? "/tmp/shots";

const ROUTES = ["/", "/about", "/solutions", "/contact", "/Terms", "/policies"];
const VIEWPORTS = [
  ["desktop", 1440, 900],
  ["mobile", 390, 844],
];

/** Descenders are clipped when the glyph box overflows the line box. */
const CLIP_PROBE = () => {
  const out = [];
  for (const el of document.querySelectorAll("h1, h2, h3")) {
    const text = el.textContent?.trim() ?? "";
    if (!/[gjpqy]/.test(text)) continue;
    const cs = getComputedStyle(el);
    const fontSize = parseFloat(cs.fontSize);
    // `line-height: normal` does not resolve to a length, so parseFloat gives
    // NaN and every comparison below evaluates false, silently passing the
    // headings most likely to clip (no leading utility, no bottom padding).
    // Approximate the UA default instead.
    const rawLineHeight = parseFloat(cs.lineHeight);
    const lineHeight = Number.isNaN(rawLineHeight)
      ? fontSize * 1.2
      : rawLineHeight;
    const padBottom = parseFloat(cs.paddingBottom) || 0;
    // Syne descenders reach ~0.26em below the baseline. Half-leading plus any
    // bottom padding has to cover that, otherwise g/j/p/q/y and the comma get
    // cut flat. An earlier version of this probe compared against the line
    // box instead of glyph depth and reported clipped headings as passing.
    const headroom = padBottom + (lineHeight - fontSize) / 2;
    if (headroom < fontSize * 0.24) {
      out.push({
        text: text.slice(0, 48),
        fontSize: Math.round(fontSize),
        lineHeight: Math.round(lineHeight),
        headroom: Math.round(headroom * 10) / 10,
        needed: Math.round(fontSize * 0.24 * 10) / 10,
      });
    }
  }
  return out;
};

const WRAP_PROBE = () => {
  const out = [];
  for (const el of document.querySelectorAll("a, button")) {
    const text = el.textContent?.trim() ?? "";
    if (!text || text.length > 40) continue;
    const cs = getComputedStyle(el);
    if (cs.display === "inline") continue;
    // Measure the text itself rather than the box: a fixed-height button
    // (h-12) is taller than its line box by design and is not wrapping.
    // getClientRects returns one rect per inline box, so a link containing
    // text plus an icon yields several rects on a single visual line, and
    // baseline alignment can offset them by a pixel. Cluster rects whose
    // tops fall within half a line height of each other.
    const range = document.createRange();
    range.selectNodeContents(el);
    const fontSize = parseFloat(cs.fontSize);
    const tolerance = fontSize * 0.5;
    const tops = [...range.getClientRects()]
      .map((r) => r.top)
      .sort((a, b) => a - b);
    let lines = tops.length ? 1 : 0;
    for (let i = 1; i < tops.length; i += 1) {
      if (tops[i] - tops[i - 1] > tolerance) lines += 1;
    }
    if (lines > 1) out.push(text.slice(0, 40));
  }
  return out;
};

const browser = await chromium.launch();
let failures = 0;

for (const [label, width, height] of VIEWPORTS) {
  const dir = `${OUT}/${label}`;
  await mkdir(dir, { recursive: true });
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();

  for (const route of ROUTES) {
    await page.goto(BASE + route, { waitUntil: "networkidle" });

    // Scroll the whole page in steps so every scroll-reveal fires, then wait
    // for all of them to finish. Jumping straight to the bottom and back
    // captures reveals mid-transition and reports sections as blank when they
    // are fine for a real reader.
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.6;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForFunction(
      () =>
        [...document.querySelectorAll("*")].every((el) => {
          const o = parseFloat(getComputedStyle(el).opacity);
          return Number.isNaN(o) || o > 0.99 || el.dataset.allowFade === "true";
        }),
      { timeout: 5000 },
    ).catch(() => {});
    await page.waitForTimeout(400);

    const name = route === "/" ? "home" : route.slice(1).toLowerCase();
    await page.screenshot({ path: `${dir}/${name}.png`, fullPage: true });

    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1,
    );
    const clipped = await page.evaluate(CLIP_PROBE);
    const wrapped = label === "desktop" ? await page.evaluate(WRAP_PROBE) : [];

    const problems = [];
    if (overflow) problems.push("horizontal overflow");
    for (const c of clipped)
      problems.push(
        `clipped "${c.text}" (${c.fontSize}px / lh ${c.lineHeight}, headroom ${c.headroom})`,
      );
    for (const w of wrapped) problems.push(`CTA wraps: "${w}"`);

    if (problems.length) {
      failures += problems.length;
      console.log(`FAIL ${label} ${route}`);
      for (const p of problems) console.log(`       ${p}`);
    } else {
      console.log(`ok   ${label} ${route}`);
    }
  }
  await context.close();
}

await browser.close();
console.log(
  failures ? `\n${failures} problem(s) found` : "\nno problems found",
);
console.log(`screenshots in ${OUT}`);
process.exit(failures ? 1 : 0);
