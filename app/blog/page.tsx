import type { Metadata } from "next";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Browse all articles on budgeting, savings, making money online, and side hustles from MoneyWise Daily.",
};

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4">
          The Blog
        </h1>
        <p className="font-body text-taupe max-w-xl mx-auto">
          Practical, tested advice — filter by what you're working on right
          now.
        </p>
      </div>

      <BlogListClient />
    </div>
  );
}
