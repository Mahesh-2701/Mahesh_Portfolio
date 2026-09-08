export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars?: number;
  forks?: number;
  topics: string[];
  url: string;
  isPlaceholder?: boolean;
}

export interface GitHubProfileInfo {
  username: string;
  profileUrl: string;
  bio: string;
  totalContributionsNote: string;
  featuredRepos: GitHubRepo[];
}

export const githubData: GitHubProfileInfo = {
  username: "Mahesh-2701",
  profileUrl: "https://github.com/Mahesh-2701",
  bio: "Full-Stack Software Developer & AI Systems Engineer building scalable web applications and intelligent workflows.",
  totalContributionsNote: "Active open-source and private engineering contributions",
  featuredRepos: [
    {
      name: "vizuna-core",
      description: "Organizational intelligence backend engine with vector embeddings, streaming inference, and API endpoints.",
      language: "TypeScript",
      languageColor: "#3178c6",
      topics: ["nextjs", "typescript", "ai", "postgresql", "redis"],
      url: "https://github.com/Mahesh-2701",
      isPlaceholder: true
    },
    {
      name: "agentic-workflow-engine",
      description: "Autonomous agent execution runtime with tool calling, JSON schema validation, and n8n webhook triggers.",
      language: "Node.js",
      languageColor: "#5fa04e",
      topics: ["agents", "llm", "automation", "n8n", "docker"],
      url: "https://github.com/Mahesh-2701",
      isPlaceholder: true
    },
    {
      name: "dev-telemetry-harness",
      description: "Microservice testing harness for simulated webhook delivery, latency benchmarking, and endpoint health auditing.",
      language: "TypeScript",
      languageColor: "#3178c6",
      topics: ["developer-tools", "telemetry", "webhooks", "express"],
      url: "https://github.com/Mahesh-2701",
      isPlaceholder: true
    }
  ]
};
