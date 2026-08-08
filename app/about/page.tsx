import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "The story behind MoneyWise Daily — practical money advice from someone who's actually lived the budgeting, saving, and side-hustling grind.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-sage-dark mb-3">
        About
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-8">
        Hi, I'm glad you're here.
      </h1>

      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-sage-light/30">
        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80"
          alt="Portrait placeholder"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="font-body text-base leading-relaxed space-y-6 text-ink/90">
        <p>
          MoneyWise Daily started because I was tired of finance content that
          either talked down to readers or assumed everyone had a six-figure
          income to "optimize." I built this site for people figuring out
          budgeting, saving, and extra income the way most of us actually
          do — one small, sometimes messy decision at a time.
        </p>
        <p>
          I've paid off debt on an average income, built an emergency fund
          from nothing, and tested more side hustles than I'd like to admit
          (some worked, most didn't). Everything I write here comes from
          that — not theory, not a textbook, just what actually moved the
          needle.
        </p>
        <p>
          My goal with every post is simple: give you something you can
          apply this week, not just something to bookmark and forget. No
          guilt, no jargon — just clear next steps.
        </p>
        <p>
          Thanks for reading. If something here helps you save your first
          $500 or land your first freelance client, that's the whole point.
        </p>
      </div>
    </div>
  );
}
