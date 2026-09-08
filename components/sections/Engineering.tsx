"use client";

import React from "react";
import { engineeringPillars } from "@/data/architecture";
import { SystemFlowWeb } from "@/components/architecture/SystemFlowWeb";
import { FadeIn } from "@/components/animations/FadeIn";
import { 
  TrendingUp, 
  Zap, 
  Network, 
  ShieldAlert, 
  Database, 
  Activity, 
  Check, 
  Layers 
} from "lucide-react";

export function Engineering() {
  const pillarIcons: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-5 h-5 text-blue-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Network: <Network className="w-5 h-5 text-purple-400" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-cyan-400" />,
    Activity: <Activity className="w-5 h-5 text-rose-400" />
  };

  return (
    <section id="engineering" className="py-24 border-t border-white/[0.06] bg-[#06070a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 text-xs font-mono mb-4">
              <span className="text-purple-400">04 //</span>
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Production Systems
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              How I approach building high-throughput, fault-tolerant web applications. Systems are structured with clear layer boundaries, proactive caching, and strict data contracts.
            </p>
          </FadeIn>
        </div>

        {/* Interactive Web Application System Design Topology */}
        <div className="mb-20">
          <FadeIn direction="up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                <span>Web Application Topology &amp; Request Lifecycle</span>
              </h3>
              <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
                Next.js &rarr; API &rarr; PostgreSQL &rarr; Redis
              </span>
            </div>
          </FadeIn>

          <SystemFlowWeb />
        </div>

        {/* 6 Core Architectural Pillars */}
        <div>
          <FadeIn direction="up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Architectural Pillars
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Non-negotiable tenets that distinguish production software from prototypes.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringPillars.map((pillar, idx) => (
              <FadeIn key={pillar.id} direction="up" delay={0.06 * idx}>
                <div className="h-full p-6 rounded-3xl border border-white/[0.08] bg-[#0a0c13] hover:border-white/[0.18] hover:bg-[#0c0f18] transition-all duration-200 flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      {pillarIcons[pillar.iconName] || <Zap className="w-5 h-5 text-blue-400" />}
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-1">
                      {pillar.title}
                    </h4>

                    <p className="text-xs font-mono text-blue-400 mb-3">
                      {pillar.tagline}
                    </p>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/[0.05]">
                    {pillar.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
