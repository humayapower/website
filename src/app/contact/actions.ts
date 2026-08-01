"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const enquiry = String(formData.get("enquiry") ?? "").trim();
  const quantity = String(formData.get("quantity") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Please tell us your name.";
  if (!email) fieldErrors.email = "Please add an email so we can reply.";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "That email does not look right.";
  if (!message) fieldErrors.message = "Please tell us what you need.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  // TODO: wire a real delivery channel here. The shape below is what any
  // provider needs (Resend, Formspree, Web3Forms, SMTP, a CRM webhook).
  // Until this is connected, submissions are logged server-side only.
  //
  //   await resend.emails.send({
  //     from: "site@humayapower.in",
  //     to: "info@humayapower.in",
  //     replyTo: email,
  //     subject: `Enquiry from ${name}${company ? ` (${company})` : ""}`,
  //     text: [enquiry, quantity, message].filter(Boolean).join("\n\n"),
  //   });
  console.info("[contact] submission", {
    name,
    email,
    company,
    enquiry,
    quantity,
    message,
  });

  return {
    status: "success",
    message: "Thanks, we have your message. We usually reply within two working days.",
  };
}
