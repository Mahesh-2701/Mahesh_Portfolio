export interface ProjectArchitectureFlow {
  label: string;
  detail: string;
}

export interface ProjectDetail {
  problem: string;
  solution: string;
  architecture: {
    overview: string;
    flow: ProjectArchitectureFlow[];
  };
  keyDecisions: string[];
  challenges: string[];
  results: string; // e.g., status or measurable outcome without fabrication
}

export interface Project {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  category: "AI & Intelligence" | "Agents & Automation" | "Developer Tooling";
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  previewType: "code" | "dashboard" | "workflow";
  details: ProjectDetail;
}

export const projectsData: Project[] = [
  {
    id: "vizuna",
    name: "Vizuna",
    badge: "Organizational Intelligence",
    tagline: "AI-powered organizational intelligence & analytics platform",
    description:
      "A modern web application built to analyze organizational knowledge, extract conversational insights, and deliver streaming AI responses with multilingual support and subscription-tier controls.",
    category: "AI & Intelligence",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "LLM APIs",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS"
    ],
    featured: true,
    githubUrl: "https://github.com/Mahesh-2701", // [Editable] Replace with actual repo URL if public
    liveUrl: "https://vizuna.example.com", // [Editable] Replace with live URL or staging link
    previewType: "dashboard",
    details: {
      problem:
        "Modern distributed teams generate massive amounts of unstructured communication, documentation, and internal reports, making organizational knowledge discovery fragmented, slow, and unscalable.",
      solution:
        "Built a unified intelligence platform that ingests organizational text and documents, indexes semantic embeddings, and powers natural-language conversational queries with low-latency streaming responses and multilingual understanding.",
      architecture: {
        overview:
          "Designed with Next.js App Router for frontend presentation and streaming hydration, backed by Node.js service layers, Redis for real-time token caching and session control, and PostgreSQL with pgvector for relational and semantic persistence.",
        flow: [
          { label: "Client Layer", detail: "Next.js App Router with Server-Sent Events (SSE) for streaming AI tokens" },
          { label: "API Gateway", detail: "Strict TypeScript request validation, rate limiting, and auth session verification" },
          { label: "Intelligence Engine", detail: "Context window compilation, model routing, and multilingual prompt translation" },
          { label: "Data Store", detail: "PostgreSQL for tenant and user state; Redis for hot session caching and ephemeral memory" }
        ]
      },
      keyDecisions: [
        "Implemented Server-Sent Events (SSE) rather than WebSockets for AI streaming to simplify connection management, edge caching, and proxy traversal.",
        "Employed strict tenant isolation at the database layer to guarantee multi-tenant security across team workspaces.",
        "Implemented dynamic prompt translation and token budgeting to manage LLM API costs across multilingual query sets."
      ],
      challenges: [
        "Handling network interruptions gracefully during long-form streaming AI responses without corrupting the chat context.",
        "Balancing vector retrieval latency with relational query joins under concurrent active organizational sessions."
      ],
      results:
        "Production deployment serving active team intelligence queries with instant streaming feedback and secure subscription tier management."
    }
  },
  {
    id: "ai-agent-platform",
    name: "Autonomous AI Agent Platform",
    badge: "Multi-Agent System",
    tagline: "Autonomous multi-agent execution & workflow automation pipeline",
    description:
      "An extensible agent orchestration platform that plans tasks, executes external tools (APIs, databases, web scraping), verifies intermediate states, and automates multi-step business workflows.",
    category: "Agents & Automation",
    technologies: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "LLM Function Calling",
      "n8n",
      "Redis Queues",
      "Docker"
    ],
    featured: true,
    githubUrl: "https://github.com/Mahesh-2701", // [Editable]
    liveUrl: "https://agents.example.com", // [Editable]
    previewType: "workflow",
    details: {
      problem:
        "Standard LLM chats are passive and single-turn; enterprise processes require agents that can autonomously formulate plans, query multiple external APIs, handle errors, and execute complex workflows without constant human steering.",
      solution:
        "Constructed a modular agentic framework that decomposes user goals into structured DAGs (Directed Acyclic Graphs), calls validated tools via JSON schemas, and coordinates with n8n webhooks for distributed external execution.",
      architecture: {
        overview:
          "A supervisor-worker multi-agent pattern running on Node.js runtimes. State persistence is managed through Redis, allowing agent steps to be halted, inspected, or resumed deterministically.",
        flow: [
          { label: "Goal Ingestion", detail: "Parses user objective into structured steps with validation constraints" },
          { label: "Reasoning Loop", detail: "ReAct (Reason + Act) loop with dynamic context window injection" },
          { label: "Tool Execution", detail: "Sandboxed tool adapters invoking internal DBs, external REST APIs, and n8n webhooks" },
          { label: "State Verification", detail: "Self-evaluating evaluator agent checking output against completion criteria" }
        ]
      },
      keyDecisions: [
        "Separated the planning agent from the execution workers to prevent context degradation and reduce hallucinations.",
        "Integrated n8n as a self-hosted visual automation bridge for third-party integrations, saving custom API connector maintenance.",
        "Applied deterministic JSON schema validation using Zod for all tool inputs and outputs."
      ],
      challenges: [
        "Preventing infinite reasoning loops when external API endpoints return unexpected error schemas.",
        "Optimizing context size across deep multi-step agent runs by pruning irrelevant intermediate tool execution logs."
      ],
      results:
        "Functional multi-agent runtime capable of handling autonomous multi-step research, data extraction, and webhook-triggered automations."
    }
  },
  {
    id: "dev-productivity-platform",
    name: "Developer Productivity Platform",
    badge: "Developer Tooling",
    tagline: "Developer telemetry, API test harness & deployment workflow manager",
    description:
      "A developer-centric SaaS application that consolidates API endpoint health monitoring, automated webhook payload simulation, environment variable auditing, and CI/CD status tracking.",
    category: "Developer Tooling",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Webhooks",
      "Tailwind CSS"
    ],
    featured: true,
    githubUrl: "https://github.com/Mahesh-2701", // [Editable]
    liveUrl: "https://devtools.example.com", // [Editable]
    previewType: "code",
    details: {
      problem:
        "Engineers waste valuable time manually crafting curl commands, debugging failing webhooks across distributed microservices, and tracking down synchronization issues across deployment environments.",
      solution:
        "Created an integrated developer workstation featuring an interactive HTTP/WebSocket mock playground, automated webhook verification test runner, and team environment configuration synchronizer.",
      architecture: {
        overview:
          "Full-stack TypeScript architecture with Next.js interface, Node/Express backend test workers, PostgreSQL schema migrations, and Dockerized runner containers for secure endpoint probing.",
        flow: [
          { label: "Web Workspace", detail: "Keyboard-first UI with command palette, instant syntax highlighting, and request builder" },
          { label: "Worker Gateway", detail: "Dispatches simulated webhook payloads with cryptographic signature verification (HMAC)" },
          { label: "Telemetry Engine", detail: "Captures latency percentiles (p50, p95, p99), response codes, and payload diffs" },
          { label: "Audit Logger", detail: "Immutable PostgreSQL log of test runs, environment changes, and deployment triggers" }
        ]
      },
      keyDecisions: [
        "Implemented keyboard shortcuts (Cmd/Ctrl+K, Cmd+Enter) throughout the UI to optimize developer throughput and workflow velocity.",
        "Designed clean OpenAPI 3.0 schema import/export for seamless interoperability with existing engineering tools.",
        "Packaged complete local dev stack into docker-compose for zero-friction one-command setup."
      ],
      challenges: [
        "Accurately measuring sub-millisecond round-trip times across varied network topologies.",
        "Ensuring safe webhook simulation that cannot be abused for SSRF (Server-Side Request Forgery) attacks."
      ],
      results:
        "Production-ready developer tool utilized for continuous endpoint monitoring, webhook simulation, and automated environment auditing."
    }
  }
];
