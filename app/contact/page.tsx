import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MoneyWise Daily — questions, collaboration ideas, or just to say hi.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-sage-dark mb-3">
        Contact
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
        Let's talk money.
      </h1>
      <p className="font-body text-taupe mb-10 leading-relaxed">
        Questions about a post, a topic you'd like covered, or a
        collaboration idea? Send it over — I read every message myself.
      </p>

      <ContactForm />
    </div>
  );
}
