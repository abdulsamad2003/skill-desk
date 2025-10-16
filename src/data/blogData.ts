export interface BlogPost {
  id: number;
  slug: string;
  image: string;
  date: string;
  month: string;
  category: string;
  title: string;
  author: string;
  description: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "transforming-learning-with-ai",
    image: "/images/blog/blog7.png",
    date: "25",
    month: "Sep",
    category: "AI in Education",
    title: "Transforming Learning with AI: Why SkillDesk.AI Is The Future",
    author: "SkillDesk.ai",
    description: "SkillDesk.AI redefines how organizations, educators, and teams approach learning. Powered by advanced artificial intelligence, SkillDesk.AI delivers instant course creation, adaptive learning paths, and automated skill gap analysis—all within a unified, mobile-friendly platform.",
    content: `SkillDesk.AI redefines how organizations, educators, and teams approach learning. Powered by advanced artificial intelligence, SkillDesk.AI delivers instant course creation, adaptive learning paths, and automated skill gap analysis—all within a unified, mobile-friendly platform. 

What sets it apart is how effortlessly users can upskill, measure progress, and receive career recommendations based on real-time data. If you want fast onboarding, automated training, and actionable analytics that drive growth, SkillDesk.AI is your competitive edge for the future of work.

The platform leverages cutting-edge AI to understand individual learning patterns, adapting content delivery in real-time to maximize retention and engagement. Whether you're onboarding new employees, upskilling existing teams, or preparing for industry shifts, SkillDesk.AI provides the tools and insights needed to stay ahead.

With features like instant course generation, personalized learning paths, and comprehensive analytics, organizations can transform their L&D strategy from reactive to proactive. The mobile-first design ensures learning happens anywhere, anytime, making continuous professional development a seamless part of your team's workflow.`
  },
  {
    id: 2,
    slug: "personalized-learning-smart-approach",
    image: "/images/blog/blog8.png",
    date: "28",
    month: "Sep",
    category: "Learning & Development",
    title: "Personalized Learning for Every Team Member: SkillDesk.AI's Smart Approach",
    author: "SkillDesk.ai",
    description: "One-size-fits-all learning is outdated. SkillDesk.AI uses AI to tailor courses and recommendations for each learner, ensuring targeted upskilling that matches individual goals and roles.",
    content: `One-size-fits-all learning is outdated. SkillDesk.AI uses AI to tailor courses and recommendations for each learner, ensuring targeted upskilling that matches individual goals and roles. 

Corporates love the instant onboarding and risk simulation tools, trainers benefit from easy integration and deep skill analytics, and small businesses scale quickly with minimal IT effort. With mobile access, 24/7 AI-powered support, rapid configuration, and no hidden fees, SkillDesk.AI makes smart, personalized learning accessible—and measurable—for everyone.

Our intelligent recommendation engine analyzes each learner's background, current skills, and career aspirations to create truly personalized learning journeys. This ensures that every team member receives content that's not only relevant but also engaging and aligned with their professional development goals.

The platform's adaptive algorithms continuously refine learning paths based on performance, engagement, and changing organizational needs. This dynamic approach means your team is always learning what matters most, when it matters most, without the overhead of manual course curation.`
  },
  {
    id: 3,
    slug: "seamless-integration-effortless-growth",
    image: "/images/blog/blog9.png",
    date: "30",
    month: "Sep",
    category: "Workplace Productivity",
    title: "Seamless Integration, Effortless Growth: Why Businesses Choose SkillDesk.AI",
    author: "SkillDesk.ai",
    description: "SkillDesk.AI is designed for interoperability—connect your HR, talent management, and productivity tools to unify training without tech headaches.",
    content: `SkillDesk.AI is designed for interoperability—connect your HR, talent management, and productivity tools to unify training without tech headaches. From industry-leading AI course builders to real-time team readiness insights, this platform empowers educators, trainers, SMEs, and startups to accelerate learning and adaptation.

Whether you serve healthcare, tech, finance, manufacturing, or beyond, SkillDesk.AI offers transparent plans, instant setup, and reliable support for teams that demand results and flexibility. Try SkillDesk.AI today and experience the difference automation makes.

Our platform seamlessly integrates with your existing tech stack, eliminating data silos and creating a unified learning ecosystem. From HRIS systems to project management tools, SkillDesk.AI connects the dots between learning and performance, providing actionable insights that drive business outcomes.

The rapid deployment model means you can go from signup to first course in minutes, not months. With no complex IT requirements and intuitive admin controls, even small teams can implement enterprise-grade learning solutions. Plus, our transparent pricing ensures you always know what you're paying for, with no surprises or hidden costs.`
  }
];

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedBlogs = (currentId: number, limit: number = 2): BlogPost[] => {
  return blogPosts.filter(post => post.id !== currentId).slice(0, limit);
};

