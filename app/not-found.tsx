import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-sage-dark mb-4">
        404
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
        This page ran out of budget.
      </h1>
      <p className="font-body text-taupe leading-relaxed mb-8">
        The page you're looking for doesn't exist, or may have moved.
        Let's get you back to something useful.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/"
          className="bg-sage-dark text-cream font-body text-sm px-6 py-3 rounded-full hover:bg-ink transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/blog"
          className="font-body text-sm px-6 py-3 rounded-full border border-ink/20 hover:border-sage-dark transition-colors"
        >
          Browse the Blog
        </Link>
      </div>
    </div>
  );
}
