import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for MoneyWise Daily.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-sage-dark mb-3">
        Legal
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
        Privacy Policy
      </h1>
      <p className="font-body text-sm text-taupe mb-10">
        Last updated: June 1, 2026
      </p>

      <div className="font-body text-base leading-relaxed space-y-8 text-ink/90">
        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Overview
          </h2>
          <p>
            MoneyWise Daily ("we," "us," or "our") respects your privacy.
            This policy explains what information we collect, how we use
            it, and the choices you have. This is a template — replace it
            with policy language reviewed by a legal professional before
            publishing.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Information We Collect
          </h2>
          <p>
            When you use our contact form, we collect the name, email
            address, and message you provide. We may also collect
            standard analytics data such as pages visited, browser type,
            and general location, typically via cookies or similar
            technologies.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            How We Use Your Information
          </h2>
          <p>
            We use the information you submit solely to respond to your
            inquiries. Analytics data helps us understand how visitors use
            the site so we can improve content and site performance. We do
            not sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Cookies
          </h2>
          <p>
            This site may use cookies for analytics and functionality
            purposes. You can disable cookies through your browser
            settings; some site features may not function properly as a
            result.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Third-Party Services
          </h2>
          <p>
            We may use third-party services (such as hosting, analytics,
            or email delivery providers) that process data on our behalf
            in accordance with their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Your Rights
          </h2>
          <p>
            Depending on your location, you may have the right to access,
            correct, or delete your personal information. Contact us using
            the form on our Contact page to make a request.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold mb-3">
            Contact Us
          </h2>
          <p>
            Questions about this policy? Reach out via our Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
