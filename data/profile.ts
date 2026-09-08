export interface PhilosophyItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  roles: string[];
  headline: string;
  subheadline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  status: {
    state: "available" | "busy";
    message: string;
    details: string;
  };
  interests: string[];
  philosophies: PhilosophyItem[];
}

export const profileData: ProfileData = {
  name: "Mahi",
  tagline: "Full-Stack Developer | AI Engineer | Software Engineer",
  roles: [
    "Full-Stack Developer",
    "AI Engineer",
    "Software Engineer",
    "Systems & Automation Builder"
  ],
  headline: "Building intelligent software for the modern web.",
  subheadline:
    "Full-Stack Developer focused on AI-powered products, scalable web applications, automation, and modern software architecture.",
  bio: "I’m a software developer focused on building modern, reliable products across the full stack. I enjoy working at the intersection of frontend engineering, backend architecture, AI, and automation — turning ideas into production-ready systems.",
  email: "mahi@example.com", // [Editable] Replace with your actual email
  github: "https://github.com/Mahesh-2701",
  linkedin: "https://linkedin.com/in/mahi-engineer", // [Editable] Replace with your LinkedIn URL
  resumeUrl: "/resume.pdf",
  status: {
    state: "available",
    message: "Available for high-impact roles & engineering projects",
    details: "Focusing on Full-Stack Next.js/Node.js, AI Agent systems, & Scalable Web Apps"
  },
  interests: [
    "AI engineering",
    "System design",
    "Scalable architecture",
    "Developer tooling",
    "Automation & agentic pipelines",
    "Modern web technologies"
  ],
  philosophies: [
    {
      title: "Build for real users",
      description:
        "Software only succeeds when it solves genuine friction for actual humans. Every architectural choice should preserve usability, responsiveness, and trust.",
      iconName: "Users"
    },
    {
      title: "Keep architecture simple until complexity is justified",
      description:
        "Resist premature abstraction. Start with clear, direct primitives and introduce distributed patterns only when verified bottlenecks demand them.",
      iconName: "Boxes"
    },
    {
      title: "Automate repetitive work",
      description:
        "If a manual step exists in testing, building, data syncing, or deployment, automate it. Workflows, webhooks, and agents free up cognitive focus for core engineering.",
      iconName: "Cpu"
    },
    {
      title: "Design systems that can evolve",
      description:
        "Establish modular boundaries, strong data contracts, and clean interfaces so that replacing an AI model, database layer, or UI library does not require a full rewrite.",
      iconName: "Layers"
    },
    {
      title: "Treat observability, security, and reliability as part of the product",
      description:
        "Audit logs, structured telemetry, rate-limiting, and error boundaries are not afterthoughts; they are the bedrock of production confidence.",
      iconName: "ShieldCheck"
    },
    {
      title: "Continuously learn new technologies",
      description:
        "The software and AI landscape evolves rapidly. Mastering fundamentals while aggressively testing emerging tools delivers competitive advantages.",
      iconName: "Sparkles"
    }
  ]
};
