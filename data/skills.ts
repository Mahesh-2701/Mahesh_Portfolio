export type SkillCategory = "all" | "frontend" | "backend" | "ai" | "infrastructure" | "automation";

export interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "ai" | "infrastructure" | "automation";
  description: string;
  highlight?: boolean;
  tags?: string[];
}

export interface SkillGroup {
  id: SkillCategory;
  label: string;
  description: string;
  count: number;
}

export const skillCategories: { id: SkillCategory; label: string; count: number }[] = [
  { id: "all", label: "All Technologies", count: 28 },
  { id: "frontend", label: "Frontend", count: 7 },
  { id: "backend", label: "Backend & Data", count: 6 },
  { id: "ai", label: "AI Engineering", count: 8 },
  { id: "infrastructure", label: "Infra & DevOps", count: 7 },
  { id: "automation", label: "Automation", count: 4 }
];

export const skillsData: SkillItem[] = [
  // Frontend
  {
    name: "React",
    category: "frontend",
    description: "Component composition, reactive state primitives, hooks, and modern rendering patterns.",
    highlight: true,
    tags: ["UI", "Components", "Hooks"]
  },
  {
    name: "Next.js",
    category: "frontend",
    description: "App Router, Server Components, Streaming SSR, API Routes, Turbopack, and hybrid caching.",
    highlight: true,
    tags: ["Full-Stack", "SSR", "App Router"]
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "Strict end-to-end type safety, generic utility types, Discriminated Unions, and API contract sharing.",
    highlight: true,
    tags: ["Static Typing", "Safety", "DX"]
  },
  {
    name: "JavaScript",
    category: "frontend",
    description: "Modern ECMAScript (ES2024+), asynchronous patterns, event loops, Web APIs, and functional paradigms.",
    highlight: false,
    tags: ["Core", "ESNext", "Async"]
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description: "Utility-first design systems, dynamic theming, responsive layouts, and modern CSS variable orchestration.",
    highlight: true,
    tags: ["Design System", "CSS", "Styling"]
  },
  {
    name: "HTML5",
    category: "frontend",
    description: "Accessible, semantic document markup, microdata, SEO structure, and modern standard elements.",
    highlight: false,
    tags: ["Semantic HTML", "a11y", "SEO"]
  },
  {
    name: "Modern CSS",
    category: "frontend",
    description: "CSS Grid, Flexbox, custom properties, subgrid, container queries, light-dark() and animations.",
    highlight: false,
    tags: ["Animations", "Layout", "Tokens"]
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    description: "High-throughput asynchronous runtimes, non-blocking I/O event loops, worker threads, and CLI tools.",
    highlight: true,
    tags: ["Runtime", "Event Loop", "Streams"]
  },
  {
    name: "Express.js",
    category: "backend",
    description: "Robust middleware pipelines, RESTful controllers, rate limiting, and structured error handlers.",
    highlight: false,
    tags: ["REST", "Middleware", "Microservices"]
  },
  {
    name: "REST APIs",
    category: "backend",
    description: "Idempotent endpoints, HTTP semantics, versioning, OpenAPI/Swagger specifications, and payload validation.",
    highlight: true,
    tags: ["API Architecture", "HTTP", "Contracts"]
  },
  {
    name: "PostgreSQL",
    category: "backend",
    description: "Relational modeling, composite indexing, transactions (ACID), pgvector extensions, and query optimization.",
    highlight: true,
    tags: ["SQL", "Relational", "pgvector"]
  },
  {
    name: "MongoDB",
    category: "backend",
    description: "Document storage, aggregation pipelines, schema validation, and flexible schemaless ingestion.",
    highlight: false,
    tags: ["NoSQL", "Document Store", "Aggregation"]
  },
  {
    name: "Redis",
    category: "backend",
    description: "In-memory caching tiers, pub/sub messaging, session persistence, distributed rate limiting, and queues.",
    highlight: true,
    tags: ["In-Memory", "Caching", "Pub/Sub"]
  },

  // AI / Modern AI
  {
    name: "LLM Applications",
    category: "ai",
    description: "Production LLM integration, context window management, token budgeting, and multi-model fallback routing.",
    highlight: true,
    tags: ["LLM", "Context", "Streaming"]
  },
  {
    name: "AI Agents",
    category: "ai",
    description: "Autonomous agentic architectures, goal decomposition, iterative plan execution, and state persistence.",
    highlight: true,
    tags: ["Autonomous", "ReAct", "Memory"]
  },
  {
    name: "RAG (Retrieval-Augmented Generation)",
    category: "ai",
    description: "Vector similarity search, hybrid keyword-semantic retrieval, semantic chunking, and grounded context re-ranking.",
    highlight: true,
    tags: ["Vectors", "Embeddings", "Retrieval"]
  },
  {
    name: "Agentic Workflows",
    category: "ai",
    description: "Multi-agent coordination, human-in-the-loop validation, supervisor patterns, and deterministic state transitions.",
    highlight: true,
    tags: ["Orchestration", "State Machine", "HITL"]
  },
  {
    name: "AI-Powered Features",
    category: "ai",
    description: "Streaming completions, inline copilot experiences, intelligent search, automated summarization, and content synthesis.",
    highlight: false,
    tags: ["UX", "Streaming", "Synthesis"]
  },
  {
    name: "AI Automation",
    category: "ai",
    description: "End-to-end autonomous business logic, document parsing, classification loops, and self-correcting pipelines.",
    highlight: false,
    tags: ["Pipelines", "Classification", "Automation"]
  },
  {
    name: "Prompt Engineering",
    category: "ai",
    description: "Structured system prompt design, few-shot examples, dynamic context assembly, and chain-of-thought steering.",
    highlight: false,
    tags: ["Prompt Design", "Few-Shot", "Guardrails"]
  },
  {
    name: "Model / API Integrations",
    category: "ai",
    description: "Anthropic Claude, OpenAI, Gemini, Groq, Ollama local models, structured JSON function calling, and tools.",
    highlight: true,
    tags: ["Tool Calling", "JSON Schema", "Multi-Provider"]
  },

  // Infrastructure & DevOps
  {
    name: "Git",
    category: "infrastructure",
    description: "Version control workflows, atomic commits, interactive rebasing, bisect debugging, and branch strategies.",
    highlight: false,
    tags: ["VCS", "Branching", "Collaboration"]
  },
  {
    name: "GitHub",
    category: "infrastructure",
    description: "Code reviews, PR templates, issue tracking, package registries, and webhook integrations.",
    highlight: false,
    tags: ["Platform", "Code Review", "PRs"]
  },
  {
    name: "Docker",
    category: "infrastructure",
    description: "Multi-stage production container builds, docker-compose environments, minimal base images, and isolation.",
    highlight: true,
    tags: ["Containers", "Multi-Stage", "DevOps"]
  },
  {
    name: "Linux",
    category: "infrastructure",
    description: "POSIX shell scripting, systemd service management, process monitoring, file permissions, and diagnostics.",
    highlight: false,
    tags: ["OS", "Shell", "Sysadmin"]
  },
  {
    name: "Nginx",
    category: "infrastructure",
    description: "Reverse proxying, SSL/TLS termination, gzip/brotli compression, load balancing, and custom header routing.",
    highlight: true,
    tags: ["Reverse Proxy", "SSL", "Load Balancing"]
  },
  {
    name: "Cloudflare",
    category: "infrastructure",
    description: "Edge caching, DNS management, DDoS protection, Web Application Firewall (WAF), and edge workers.",
    highlight: true,
    tags: ["Edge CDN", "DNS", "Security"]
  },
  {
    name: "CI/CD",
    category: "infrastructure",
    description: "GitHub Actions pipelines, automated test suites, lint checks, preview deployments, and container publishing.",
    highlight: false,
    tags: ["GitHub Actions", "Automation", "Pipelines"]
  },

  // Automation
  {
    name: "n8n",
    category: "automation",
    description: "Self-hosted visual workflow automation, webhook triggers, conditional branching, and API orchestration.",
    highlight: true,
    tags: ["Workflow Engine", "Self-Hosted", "Low-Code/Code"]
  },
  {
    name: "Webhooks",
    category: "automation",
    description: "Event-driven asynchronous integrations, HMAC signature validation, replay mitigation, and retry queues.",
    highlight: true,
    tags: ["Event-Driven", "Signatures", "Real-Time"]
  },
  {
    name: "APIs & Integrations",
    category: "automation",
    description: "Third-party SaaS connectivity, OAuth flows, exponential backoff retries, and rate limit management.",
    highlight: false,
    tags: ["SaaS", "OAuth", "Resilience"]
  },
  {
    name: "Workflow Automation",
    category: "automation",
    description: "Background processing jobs, scheduled tasks, data synchronizations, and notifications pipelines.",
    highlight: true,
    tags: ["Cron", "Sync", "Queues"]
  }
];
