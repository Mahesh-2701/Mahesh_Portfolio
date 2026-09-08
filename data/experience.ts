export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  badge?: string;
  isCurrent?: boolean;
  responsibilities: string[];
  keyProjects: {
    name: string;
    description: string;
  }[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Software & AI Engineering", // [Editable] Replace with your Company Name (e.g. Current Company or Stealth AI Startup)
    role: "Full-Stack Developer & AI Engineer", // [Editable]
    duration: "2024 — Present", // [Editable]
    location: "Remote / On-site", // [Editable]
    badge: "Current Role",
    isCurrent: true,
    responsibilities: [
      "Architect and engineer modern full-stack web applications utilizing Next.js App Router, TypeScript, and Node.js.",
      "Integrate state-of-the-art LLM APIs, vector retrieval (RAG), and autonomous agent workflows into production software.",
      "Design reliable database schemas, indexing strategies, and caching tiers using PostgreSQL and Redis.",
      "Build automated CI/CD deployment pipelines, containerized environments (Docker), and monitoring workflows."
    ],
    keyProjects: [
      {
        name: "Enterprise Intelligence & AI Workflow Systems",
        description:
          "Designed streaming AI interfaces with sub-second time-to-first-token, role-based access control, and webhook integrations."
      },
      {
        name: "Performance & Architecture Optimization",
        description:
          "Refactored data querying layers with Redis caching and connection pooling, boosting system throughput and reliability."
      }
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "LLM APIs",
      "n8n"
    ]
  },
  {
    id: "exp-2",
    company: "Web Products & Application Development", // [Editable] Replace with previous company name
    role: "Full-Stack Software Engineer", // [Editable]
    duration: "2023 — 2024", // [Editable]
    location: "Remote", // [Editable]
    isCurrent: false,
    responsibilities: [
      "Developed high-traffic responsive web applications and customer-facing interfaces with React and Tailwind CSS.",
      "Implemented secure RESTful API endpoints, authentication flows, and data validation layers in Node.js / Express.",
      "Automated internal workflows, data syncing tasks, and third-party SaaS integrations using webhooks and custom microservices.",
      "Collaborated on code reviews, API contract designs, and automated testing to maintain high software quality standards."
    ],
    keyProjects: [
      {
        name: "Real-Time Telemetry & Dashboard Interfaces",
        description:
          "Built modular component libraries and interactive visualization dashboards handling dynamic operational data."
      },
      {
        name: "Webhook Ingestion & API Gateway",
        description:
          "Engineered resilient webhook consumers with exponential backoff and replay-attack protection."
      }
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
      "Git",
      "Linux"
    ]
  }
];
