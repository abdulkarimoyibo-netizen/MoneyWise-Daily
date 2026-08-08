export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Budgeting" | "Savings" | "Make Money Online" | "Side Hustles";
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

const GUIDE_LINK = "https://selar.com/710787d32m";
const GUIDE_TEXT = "The Personal Finance Handbook";

export const posts: Post[] = [
  {
    slug: "zero-based-budget-beginners",
    title: "The Zero-Based Budget: A Beginner's Guide That Actually Works",
    excerpt:
      "Give every dollar a job before the month begins — here's how to build a zero-based budget without spreadsheets giving you a headache.",
    category: "Budgeting",
    date: "2026-06-02",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    content: [
      "Zero-based budgeting means every dollar you earn is assigned a purpose before the month starts — spending, saving, or debt payoff — until your income minus your allocations equals zero.",
      "Start by listing your true monthly income, then your fixed expenses, followed by variable costs like groceries and gas. Whatever's left gets assigned to savings goals or debt.",
      `I go through this exact setup, worksheet included, in [${GUIDE_TEXT}](${GUIDE_LINK}) if you'd rather follow along step by step instead of building it from scratch.`,
      "The habit that makes this stick isn't the math — it's checking in weekly. A five-minute Sunday review keeps small overspends from becoming a blown budget by month's end.",
    ],
  },
  {
    slug: "high-yield-savings-explained",
    title: "High-Yield Savings Accounts: Where Your Emergency Fund Should Live",
    excerpt:
      "Your emergency fund is losing value sitting in a 0.01% account. Here's what a high-yield savings account actually does for you.",
    category: "Savings",
    date: "2026-05-20",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    content: [
      "A high-yield savings account (HYSA) pays significantly more interest than a traditional bank savings account, often 10–20x more, with no extra risk to your principal.",
      "Look for accounts with no monthly fees, no minimum balance requirements, and FDIC insurance. Online banks typically offer the best rates since they skip physical branch overhead.",
      "Keep 3–6 months of essential expenses here — accessible, but separate enough from your checking account that it isn't tempting to dip into for everyday spending.",
      `If you're not sure how big your emergency fund should actually be, I walk through the math for different income levels in [${GUIDE_TEXT}](${GUIDE_LINK}).`,
    ],
  },
  {
    slug: "freelance-writing-side-income",
    title: "How I Turned Freelance Writing Into a $500/Month Side Income",
    excerpt:
      "No fancy portfolio, no journalism degree — just a repeatable process for landing your first paying freelance writing clients.",
    category: "Make Money Online",
    date: "2026-05-08",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    content: [
      "Freelance writing doesn't require a portfolio full of published clips to start. Cold-pitching small businesses directly, rather than competing on job boards, is often the faster path to your first client.",
      "Niching down matters more than most beginners think. 'I write blog posts' gets ignored; 'I write SEO blog posts for personal finance apps' gets replies.",
      "Consistency compounds here: three well-researched pitches a day, five days a week, will land you paying work faster than sporadic bursts of ten pitches once a month.",
      `Once that income starts coming in, where it goes matters just as much as earning it — I cover that part in [${GUIDE_TEXT}](${GUIDE_LINK}).`,
    ],
  },
  {
    slug: "side-hustles-under-5-hours",
    title: "7 Side Hustles You Can Start in Under 5 Hours a Week",
    excerpt:
      "You don't need to quit your job or work nights to build extra income. These side hustles fit into the margins of a busy week.",
    category: "Side Hustles",
    date: "2026-04-27",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80",
    content: [
      "The best side hustle isn't the one with the highest ceiling — it's the one you'll actually keep doing. Match the hustle to hours you genuinely have free.",
      "Selling unused items, pet sitting, tutoring one subject you know well, and proofreading are all low-setup options that can be running within a week.",
      `I put together a quick-start checklist for weighing these options against your own schedule in [${GUIDE_TEXT}](${GUIDE_LINK}), which might save you some trial and error.`,
      "Track your hourly rate honestly for the first month. If a hustle pays less than $10/hour after two months, it's usually a sign to pivot rather than push through.",
    ],
  },
  {
    slug: "50-30-20-rule-still-works",
    title: "Does the 50/30/20 Budget Rule Still Work in 2026?",
    excerpt:
      "A simple gut-check for whether the classic 50/30/20 split fits your income today — and what to adjust if it doesn't.",
    category: "Budgeting",
    date: "2026-04-11",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    content: [
      "The 50/30/20 rule splits after-tax income into 50% needs, 30% wants, and 20% savings and debt payoff. It's a starting point, not a law.",
      "In higher cost-of-living areas, needs can easily eat 65–70% of income. Adjusting the split rather than abandoning the framework keeps the habit intact.",
      `For anyone whose needs run higher than 50%, [${GUIDE_TEXT}](${GUIDE_LINK}) has a few adjusted splits that tend to work better than forcing the original ratio.`,
      "Revisit your split every time your income or rent changes materially — the ratio should flex with your life, not stay fixed forever.",
    ],
  },
  {
    slug: "sinking-funds-guide",
    title: "Sinking Funds: The Savings Trick That Kills Surprise Expenses",
    excerpt:
      "Car repairs and holiday gifts only feel like emergencies because you didn't plan for them. Sinking funds fix that.",
    category: "Savings",
    date: "2026-03-30",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b2ed33?w=800&q=80",
    content: [
      "A sinking fund is money set aside gradually for a specific, known future expense — think car maintenance, holiday gifts, or annual insurance premiums.",
      "Break the total cost by months until you need it. A $600 annual expense becomes $50/month tucked into a labeled savings bucket.",
      "This single habit is what separates people who handle 'surprise' expenses calmly from those who reach for a credit card every time.",
      `There's a printable sinking funds tracker in [${GUIDE_TEXT}](${GUIDE_LINK}) if you'd like something ready-made instead of setting one up yourself.`,
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAllCategories() {
  return Array.from(new Set(posts.map((p) => p.category)));
}
