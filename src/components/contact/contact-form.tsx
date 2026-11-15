"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { type ContactState, submitContact } from "@/app/contact/actions";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-500 focus:border-orange-600 focus:outline-2 focus:outline-offset-0 focus:outline-orange-600";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-orange-600 px-7 font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 disabled:cursor-not-allowed disabled:bg-orange-600/60 active:scale-[0.99] sm:w-auto"
    >
      {pending ? "Sending..." : "Send enquiry"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <output className="block rounded-2xl border border-orange-200 bg-orange-50 p-8">
        <h2 className="text-xl font-bold text-slate-900">Message sent</h2>
        <p className="mt-3 leading-relaxed text-slate-700">{state.message}</p>
        <p className="mt-6 text-sm text-slate-600">
          In a hurry? Call{" "}
          <a
            href="tel:+917291000560"
            className="font-medium text-orange-700 underline underline-offset-4"
          >
            (+91) 729-1000-560
          </a>
          .
        </p>
      </output>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-800"
          >
            Your name <span className="text-orange-700">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            aria-describedby={
              state.fieldErrors?.name ? "name-error" : undefined
            }
            aria-invalid={state.fieldErrors?.name ? true : undefined}
            className={fieldClass}
          />
          {state.fieldErrors?.name ? (
            <p id="name-error" className="text-sm text-red-700">
              {state.fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-800"
          >
            Your email <span className="text-orange-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            aria-describedby={
              state.fieldErrors?.email ? "email-error" : undefined
            }
            aria-invalid={state.fieldErrors?.email ? true : undefined}
            className={fieldClass}
          />
          {state.fieldErrors?.email ? (
            <p id="email-error" className="text-sm text-red-700">
              {state.fieldErrors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="company"
            className="block text-sm font-medium text-slate-800"
          >
            Your company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="enquiry"
            className="block text-sm font-medium text-slate-800"
          >
            What do you need?
          </label>
          <select
            id="enquiry"
            name="enquiry"
            defaultValue=""
            className={fieldClass}
          >
            <option value="">Select an option</option>
            <option value="EV batteries">EV batteries</option>
            <option value="Storage batteries">Storage batteries</option>
            <option value="Battery rental">Battery rental</option>
            <option value="Custom battery pack">Custom battery pack</option>
            <option value="Swap station partnership">
              Swap station partnership
            </option>
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-slate-800"
        >
          Quantity
        </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="For example, 20 packs"
          className={fieldClass}
        />
        <p className="text-sm text-slate-600">
          Rough numbers are fine. It helps us quote accurately.
        </p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-800"
        >
          Message <span className="text-orange-700">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-describedby={
            state.fieldErrors?.message ? "message-error" : undefined
          }
          aria-invalid={state.fieldErrors?.message ? true : undefined}
          className={fieldClass}
        />
        {state.fieldErrors?.message ? (
          <p id="message-error" className="text-sm text-red-700">
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      <SubmitButton />
    </form>
  );
}
