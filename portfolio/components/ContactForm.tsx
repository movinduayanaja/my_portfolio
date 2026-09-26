"use client";

import { useState, FormEvent } from "react";

// 1. Go to https://formspree.io and create a free account.
// 2. Create a new form and copy its endpoint (looks like https://formspree.io/f/xxxxabcd).
// 3. Paste that endpoint below, replacing the placeholder.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgavkpoy";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-hairline rounded-sm p-6 text-paper">
        <p className="font-display text-xl mb-1">Message sent.</p>
        <p className="text-muted text-sm">
          Thanks for reaching out — I'll reply by email soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-prose">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="bg-surface border border-hairline rounded-sm px-4 py-2.5 text-paper focus:border-teal outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="bg-surface border border-hairline rounded-sm px-4 py-2.5 text-paper focus:border-teal outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="bg-surface border border-hairline rounded-sm px-4 py-2.5 text-paper focus:border-teal outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start inline-flex items-center px-5 py-2.5 bg-amber text-ink font-medium rounded-sm hover:bg-teal transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-amber">
          Something went wrong sending your message. Please try again, or
          email me directly at movindugethmin@gmail.com.
        </p>
      )}
    </form>
  );
}
