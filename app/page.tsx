import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { posts } from "@/lib/posts";

export default function HomePage() {
  const featured = posts.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20 text-center">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-sage-dark mb-4">
          Budgeting · Savings · Side Hustles
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-tight max-w-3xl mx-auto">
          Money advice that fits{" "}
          <span className="growth-underline text-sage-dark">real life</span>
        </h1>
        <p className="font-body text-base md:text-lg text-taupe max-w-xl mx-auto mt-6 leading-relaxed">
          No jargon, no guilt trips — just clear, practical ways to budget
          better, save more, and build income on your own terms.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/blog"
            className="bg-sage-dark text-cream font-body text-sm px-6 py-3 rounded-full hover:bg-ink transition-colors"
          >
            Start Reading
          </Link>
          <Link
            href="/about"
            className="font-body text-sm px-6 py-3 rounded-full border border-ink/20 hover:border-sage-dark transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading text-3xl font-semibold">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="font-body text-sm text-sage-dark hover:text-ink transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="masonry">
          {featured.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
