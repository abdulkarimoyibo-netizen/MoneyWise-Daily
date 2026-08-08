import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="font-body text-sm text-sage-dark hover:text-ink transition-colors"
      >
        ← Back to Blog
      </Link>

      <p className="font-body text-xs uppercase tracking-[0.2em] text-sage-dark mt-6 mb-3">
        {post.category} · {post.readTime}
      </p>

      <h1 className="font-heading text-3xl md:text-5xl font-semibold leading-tight mb-6">
        {post.title}
      </h1>

      <p className="font-body text-sm text-taupe mb-8">
        Published{" "}
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="font-body text-base leading-relaxed space-y-6 text-ink/90">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-heading text-2xl font-semibold mb-6">
            More on {post.category}
          </h2>
          <div className="masonry">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
