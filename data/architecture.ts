export interface ArchitecturePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  iconName: string;
  codeSnippet?: string;
}

export interface FlowNode {
  id: string;
  label: string;
  sublabel: string;
  type: "entry" | "gateway" | "service" | "storage" | "cache" | "ai" | "tool";
  status: "healthy" | "active" | "ready";
  latency?: string;
  description: string;
}

export const engineeringPillars: ArchitecturePillar[] = [
  {
    id: "scalability",
    title: "Scalability & Concurrency",
    tagline: "Horizontal scalability with stateless application services",
    description:
      "Stateless service nodes behind load balancers with connection pooling, decoupled background job queues, and asynchronous processing to handle traffic spikes smoothly.",
    details: [
      "Decouple synchronous HTTP request-response cycles from long-running operations via queues",
      "Stateless API pods enabling instant horizontal autoscaling on container runtimes",
      "Database connection pooling (e.g. pgBouncer) to prevent database thread starvation"
    ],
    iconName: "TrendingUp"
  },
  {
    id: "caching",
    title: "Multi-Tier Caching",
    tagline: "Edge, in-memory, and query-level cache orchestration",
    description:
      "Strategic caching with Redis for hot session state and rate limits, coupled with Cloudflare edge caching for static assets and stale-while-revalidate policies.",
    details: [
      "Redis memory stores for sub-millisecond session validation and hot query results",
      "HTTP cache-control headers with Stale-While-Revalidate (SWR) semantics",
      "Deterministic cache key hashing with precise cache invalidation on mutations"
    ],
    iconName: "Zap"
  },
  {
    id: "api-design",
    title: "Strict API Design",
    tagline: "Contract-first, typed, and predictable endpoints",
    description:
      "RESTful standards with typed payloads, OpenAPI specifications, idempotency keys for mutative transactions, and Server-Sent Events (SSE) for streaming data.",
    details: [
      "End-to-end type validation using TypeScript and schema parsers (Zod)",
      "Idempotency tokens on billing, payments, and workflow execution endpoints",
      "SSE streaming for real-time progress and incremental LLM token rendering"
    ],
    iconName: "Network"
  },
  {
    id: "auth-security",
    title: "Authentication & Security",
    tagline: "Defense-in-depth, zero-trust security postures",
    description:
      "HttpOnly encrypted cookies, JWT rotation, HMAC signature checks on webhooks, strict CORS policies, parameterized SQL queries, and robust rate limiting.",
    details: [
      "Mitigate SSRF, CSRF, and XSS through strict CSP headers and sanitization",
      "Cryptographic HMAC SHA-256 verification on incoming webhook payloads",
      "Token bucket distributed rate limiting per IP and API key using Redis"
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "database-design",
    title: "Relational & Vector Data Modeling",
    tagline: "ACID consistency, composite indexing, and semantic vectors",
    description:
      "Normalised relational schemas with PostgreSQL, composite indexes on high-frequency query paths, strict foreign key constraints, and pgvector embeddings.",
    details: [
      "ACID transactional boundaries ensuring data integrity across financial and user records",
      "Optimized B-tree and HNSW vector indexing for millisecond similarity retrieval",
      "Structured migration scripts versioned in source control"
    ],
    iconName: "Database"
  },
  {
    id: "observability",
    title: "Observability & Reliability",
    tagline: "Structured logging, distributed tracing, and early alerting",
    description:
      "Correlation IDs across distributed calls, structured JSON logs, latency percentiles (p50, p95, p99), and proactive health check probes.",
    details: [
      "Unique request correlation IDs propagated through every microservice hop",
      "Structured JSON logs indexed for rapid root-cause analysis",
      "Graceful degradation with circuit breakers and fallback UI states"
    ],
    iconName: "Activity"
  }
];

export const webSystemNodes: FlowNode[] = [
  {
    id: "client",
    label: "Client Layer",
    sublabel: "Next.js / Browser",
    type: "entry",
    status: "active",
    latency: "<15ms",
    description: "Responsive React UI with streaming hydration and Server Components."
  },
  {
    id: "edge",
    label: "Cloudflare Edge",
    sublabel: "CDN & WAF & DNS",
    type: "gateway",
    status: "ready",
    latency: "5-20ms",
    description: "DDoS mitigation, TLS termination, and static asset distribution."
  },
  {
    id: "api",
    label: "API Gateway",
    sublabel: "Node.js / Express Routes",
    type: "service",
    status: "healthy",
    latency: "30-50ms",
    description: "Rate limiting, authentication verification, and payload validation."
  },
  {
    id: "services",
    label: "Application Services",
    sublabel: "Core Business Logic",
    type: "service",
    status: "healthy",
    latency: "20-40ms",
    description: "Domain logic, authorization rules, and event dispatchers."
  },
  {
    id: "cache",
    label: "Redis Cache",
    sublabel: "In-Memory Store & Queues",
    type: "cache",
    status: "healthy",
    latency: "<2ms",
    description: "Hot session data, pub/sub channels, and rate-limit counters."
  },
  {
    id: "db",
    label: "PostgreSQL DB",
    sublabel: "Relational & pgvector",
    type: "storage",
    status: "healthy",
    latency: "5-15ms",
    description: "ACID transactional records, indexing, and vector embeddings."
  }
];

export const aiWorkflowNodes: FlowNode[] = [
  {
    id: "user-intent",
    label: "User Request",
    sublabel: "Prompt / Natural Language",
    type: "entry",
    status: "active",
    description: "Raw conversational input, intent trigger, or automated webhook event."
  },
  {
    id: "agent-core",
    label: "Agent Orchestrator",
    sublabel: "Goal Decomposition",
    type: "ai",
    status: "healthy",
    latency: "45ms",
    description: "Decomposes objectives into executable subtasks with state memory."
  },
  {
    id: "reasoning",
    label: "Reasoning & Plan",
    sublabel: "ReAct Loop / Chain-of-Thought",
    type: "ai",
    status: "healthy",
    latency: "120ms",
    description: "Evaluates current context, chooses required tools, and structures arguments."
  },
  {
    id: "tool-db",
    label: "Database & Vectors",
    sublabel: "RAG / pgvector / PostgreSQL",
    type: "tool",
    status: "ready",
    latency: "18ms",
    description: "Retrieves relevant organizational knowledge and structured records."
  },
  {
    id: "tool-api",
    label: "External APIs",
    sublabel: "REST / Third-Party Services",
    type: "tool",
    status: "ready",
    latency: "95ms",
    description: "Fetches live data, triggers payments, or syncs operational state."
  },
  {
    id: "tool-automation",
    label: "Workflow Automation",
    sublabel: "n8n / Webhooks",
    type: "tool",
    status: "ready",
    latency: "60ms",
    description: "Fires automated workflows, background tasks, and messaging alerts."
  },
  {
    id: "response-stream",
    label: "Streaming Output",
    sublabel: "Validated JSON / SSE Stream",
    type: "entry",
    status: "active",
    latency: "15ms TTFT",
    description: "Grounded, sanitized response streamed incrementally back to the user."
  }
];
