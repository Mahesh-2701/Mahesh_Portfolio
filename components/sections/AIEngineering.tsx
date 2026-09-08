"use client";

import React from "react";
import { SystemFlowAI } from "@/components/architecture/SystemFlowAI";
import { FadeIn } from "@/components/animations/FadeIn";
import { 
  Bot, 
  Workflow, 
  Database, 
  Code2 
} from "lucide-react";

export function AIEngineering() {
  const aiFocusAreas = [
    {
      title: "Autonomous Agents",
      desc: "Multi-agent coordinator architectures with goal decomposition, memory persistence, and tool dispatch.",
      icon: Bot,
      color: "text-blue-400"
    },
    {
      title: "RAG & Vector Retrieval",
      desc: "Context-aware hybrid search (keyword + semantic) using PostgreSQL pgvector and re-ranking models.",
      icon: Database,
      color: "text-cyan-400"
    },
    {
      title: "Tool Calling & Structured Output",
      desc: "Strict schema validation using Zod and function calling protocols to ensure deterministic API invocations.",
      icon: Code2,
      color: "text-purple-400"
    },
    {
      title: "Agentic Workflows & Automation",
      desc: "End-to-end self-correcting pipelines linking language models with n8n, webhooks, and background queues.",
      icon: Workflow,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="ai" className="py-24 border-t border-white/[0.06] bg-[#07080c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/[0.05] text-cyan-400 text-xs font-mono mb-4">
              <span className="text-cyan-400">05 //</span>
              <span>APPLIED AI &amp; AGENTIC SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Building with AI, not just using AI.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              Modern AI delivers actual value when integrated into reliable software architecture — with deterministic type contracts, resilient fallback mechanisms, and autonomous agent loops.
            </p>
          </FadeIn>
        </div>

        {/* AI Focus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {aiFocusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <FadeIn key={area.title} direction="up" delay={0.06 * idx}>
                <div className="h-full p-6 rounded-2xl border border-white/[0.08] bg-[#0a0c13] hover:border-cyan-500/30 hover:bg-[#0c0f18] transition-all duration-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${area.color}`} />
                  </div>
                  <h3 className="font-semibold text-zinc-100 text-sm tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Interactive AI Workflow Flow */}
        <FadeIn direction="up">
          <SystemFlowAI />
        </FadeIn>

      </div>
    </section>
  );
}
