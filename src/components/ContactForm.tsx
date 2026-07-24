"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, object, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setStatus("success");
      setEmail("");
      setObject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  const inputClasses =
    "w-full rounded-2xl border border-white/20 bg-white/[0.03] px-5 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[var(--color-primary)]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label htmlFor="email" className="mb-2 block font-display text-sm text-white/70">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="object" className="mb-2 block font-display text-sm text-white/70">
          Object
        </label>
        <input
          id="object"
          type="text"
          required
          value={object}
          onChange={(e) => setObject(e.target.value)}
          placeholder="Project inquiry"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-display text-sm text-white/70">
          How can we help you ?
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-8 py-3.5 font-display text-sm text-white shadow-lg shadow-[var(--color-primary)]/25 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-400">
          Message sent successfully — we&apos;ll get back to you soon!
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}
    </form>
  );
}
