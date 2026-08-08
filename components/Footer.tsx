import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-2xl mb-3">MoneyWise Daily</h3>
          <p className="text-ivory/70 text-sm leading-relaxed">
            Practical money advice for real life — budgeting, saving, and
            building income streams that fit around yours.
          </p>
        </div>

        <div>
          <h4 className="font-body font-medium mb-3 text-sm uppercase tracking-wide text-gold-light">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-ivory/70">
            <li><Link href="/blog" className="hover:text-gold-light">Blog</Link></li>
            <li><Link href="/about" className="hover:text-gold-light">About Me</Link></li>
            <li><Link href="/contact" className="hover:text-gold-light">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-body font-medium mb-3 text-sm uppercase tracking-wide text-gold-light">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-ivory/70">
            <li><Link href="/privacy-policy" className="hover:text-gold-light">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-5 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} MoneyWise Daily. All rights reserved.
      </div>
    </footer>
  );
}
