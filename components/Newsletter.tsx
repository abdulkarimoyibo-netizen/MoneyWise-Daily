"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-sage-dark text-cream rounded-2xl px-8 py-10 text-center">
        <p className="font-heading text-2xl font-semibold mb-1">
          You're on the list.
        </p>
        <p className="font-body text-sm text-cream/80">
          Look out for your next money tip soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-sage-dark rounded-2xl px-8 py-10 text-center">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-gold-light mb-3">
        Newsletter
      </p>
      <h3 className="font-heading text-2xl md:text-3xl font-semibold text-cream mb-2">
        One useful money tip, every week.
      </h3>
      <p className="font-body text-sm text-cream/80 max-w-md mx-auto mb-6 leading-relaxed">
        No spam, no fluff — just practical budgeting, saving, and side
        hustle ideas straight to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="flex-1 font-body px-4 py-3 rounded-full border-none bg-cream text-ink placeholder:text-taupe outline-none focus-visible:ring-2 focus-visible:ring-gold"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-gold text-ink font-body text-sm font-medium px-6 py-3 rounded-full hover:bg-gold-light transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {status === "submitting" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {status === "error" && (
        <p className="font-body text-sm text-red-200 mt-4">
          Something went wrong — please try again.
        </p>
      )}
    </div>
  );
}
