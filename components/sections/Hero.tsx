"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Download
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"build" | "runtime" | "agent">("build");

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-tech-grid"
    >
      {/* Subtle radial ambient gradients */}
      <div 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/10 via-violet-600/8 to-cyan-500/10 blur-[130px] rounded-full" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -top-10 right-10 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Positioning */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Status Pill */}
            <FadeIn direction="up" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/[0.06] text-blue-400 text-xs font-mono tracking-tight">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>Full-Stack Developer &bull; AI Systems &bull; Software Engineer</span>
              </div>
            </FadeIn>

            {/* Main Headline */}
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Building intelligent software for the{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  modern web.
                </span>
              </h1>
            </FadeIn>

            {/* Supporting Copy */}
            <FadeIn direction="up" delay={0.15}>
              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
                Full-Stack Developer focused on AI-powered products, scalable web applications, automation, and modern software architecture.
              </p>
            </FadeIn>

            {/* Quick Developer Identity Points */}
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
                <Badge variant="default">React &bull; Next.js 16</Badge>
                <Badge variant="default">TypeScript</Badge>
                <Badge variant="default">Node.js &bull; PostgreSQL</Badge>
                <Badge variant="cyan">AI Agents &bull; RAG</Badge>
                <Badge variant="emerald">Redis &bull; Docker</Badge>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn direction="up" delay={0.25}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild variant="primary" size="md">
                  <Link href="#projects" className="inline-flex items-center gap-2">
                    <span>Explore Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button asChild variant="secondary" size="md">
                  <Link href="#contact" className="inline-flex items-center gap-2">
                    <span>Get in Touch</span>
                  </Link>
                </Button>

                <a
                  href={profileData.resumeUrl}
                  download="Mahi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono font-medium text-blue-400 rounded-xl border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                >
                  <Download className="w-4 h-4 text-blue-400" />
                  <span>Resume PDF</span>
                </a>

                <div className="flex items-center gap-2 pl-2 border-l border-white/[0.1]">
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/[0.1] bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/[0.25] transition-all"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-white/[0.1] bg-white/[0.04] text-zinc-300 hover:text-white hover:border-white/[0.25] transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Floating Interactive Living Engineering Workspace */}
          <div className="lg:col-span-5">
            <FadeIn direction="up" delay={0.2}>
              <div className="relative rounded-2xl border border-white/[0.12] bg-[#0a0c12]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
                
                {/* Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/60 border border-red-500/30" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60 border border-yellow-500/30" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/60 border border-emerald-500/30" />
                    <span className="ml-2 text-xs font-mono text-zinc-400">~/mahi</span>
                  </div>

                  {/* Interactive view switchers */}
                  <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-lg border border-white/[0.06] text-[11px] font-mono">
                    <button
                      onClick={() => setActiveTab("build")}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        activeTab === "build"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      build
                    </button>
                    <button
                      onClick={() => setActiveTab("runtime")}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        activeTab === "runtime"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      telemetry
                    </button>
                    <button
                      onClick={() => setActiveTab("agent")}
                      className={`px-2 py-0.5 rounded-md transition-colors ${
                        activeTab === "agent"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      agent.status
                    </button>
                  </div>
                </div>

                {/* Workspace Body */}
                <div className="p-5 font-mono text-xs leading-relaxed min-h-[340px] flex flex-col justify-between">
                  {activeTab === "build" && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="text-zinc-400">
                        <span className="text-blue-400 font-semibold">mahi@production-box</span>:
                        <span className="text-cyan-400">~/mahi</span>$ tree -L 1
                      </div>

                      {/* Project Structure */}
                      <div className="text-zinc-400 pl-2 space-y-0.5 text-[11px]">
                        <div>├── next.config.ts</div>
                        <div>├── app/</div>
                        <div>├── components/</div>
                        <div>├── lib/</div>
                        <div>├── ai/</div>
                        <div>└── api/</div>
                      </div>

                      <div className="pt-2 text-zinc-300">
                        <span className="text-emerald-400 font-bold">$</span> npm run build
                      </div>

                      {/* Compilation Output */}
                      <div className="space-y-1 text-[11px] pt-1 border-t border-white/[0.06]">
                        <div className="flex items-center gap-2 text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Compiled successfully in 280ms (Turbopack)</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Type checked (0 errors across 48 modules)</span>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 font-medium">
                          <Zap className="w-3.5 h-3.5" />
                          <span>Production ready &bull; Static + Streaming SSR</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "runtime" && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-2">
                        <span>Cluster Runtime Diagnostics</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          HEALTHY
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <div className="text-zinc-500 text-[10px]">P99 LATENCY</div>
                          <div className="text-sm font-bold text-white mt-0.5">14.2 ms</div>
                          <div className="text-[10px] text-emerald-400">Cloudflare Edge</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <div className="text-zinc-500 text-[10px]">CACHE HIT RATE</div>
                          <div className="text-sm font-bold text-white mt-0.5">99.4 %</div>
                          <div className="text-[10px] text-blue-400">Redis In-Memory</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <div className="text-zinc-500 text-[10px]">WORKER STATUS</div>
                          <div className="text-sm font-bold text-white mt-0.5">Active</div>
                          <div className="text-[10px] text-zinc-400">Node v26.8.1</div>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                          <div className="text-zinc-500 text-[10px]">TRANSACTION STATE</div>
                          <div className="text-sm font-bold text-white mt-0.5">ACID</div>
                          <div className="text-[10px] text-purple-400">PostgreSQL 16</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "agent" && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between text-zinc-400 border-b border-white/[0.06] pb-2">
                        <span>Autonomous Agent Dispatcher</span>
                        <span className="text-cyan-400 font-mono text-[10px]">READY</span>
                      </div>
                      <div className="space-y-2 text-[11px] text-zinc-300">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">Agent:</span>
                          <span className="text-purple-300">Supervisor_Orchestrator_v2</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">Tools:</span>
                          <span className="text-blue-300">[pgvector, api_caller, n8n_webhook]</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-500">Context Window:</span>
                          <span className="text-emerald-300">Dynamically Pruned &bull; 8k/128k</span>
                        </div>
                        <div className="p-2 rounded bg-black/50 border border-white/[0.06] text-zinc-400 text-[10px]">
                          &gt; Awaiting goal ingestion or webhook trigger...
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Workspace Footer */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Ready for production load</span>
                    </div>
                    <Link
                      href="#terminal"
                      className="text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Open interactive CLI</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
