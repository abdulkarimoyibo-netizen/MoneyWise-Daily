import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/posts";

const categoryColors: Record<Post["category"], string> = {
  Budgeting: "bg-sage-light/40 text-sage-dark",
  Savings: "bg-gold-light/40 text-ink",
  "Make Money Online": "bg-sage/30 text-sage-dark",
  "Side Hustles": "bg-gold/20 text-ink",
};

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="masonry-item block bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-sage-light/30 group"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <span
          className={`inline-block text-xs font-body font-medium px-3 py-1 rounded-full mb-3 ${categoryColors[post.category]}`}
        >
          {post.category}
        </span>

        <h3 className="font-heading text-xl font-semibold leading-snug mb-2 group-hover:text-sage-dark transition-colors">
          {post.title}
        </h3>

        <p className="font-body text-sm text-taupe leading-relaxed mb-3 line-clamp-3">
          {post.excerpt}
        </p>

        <span className="font-body text-xs text-taupe/80">{post.readTime}</span>
      </div>
    </Link>
  );
}
