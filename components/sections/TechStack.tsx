"use client";

import React, { useState } from "react";
import { 
  skillCategories, 
  skillsData, 
  type SkillCategory
} from "@/data/skills";
import { FadeIn } from "@/components/animations/FadeIn";
import { 
  Cpu, 
  Layers, 
  Database, 
  Terminal, 
  Workflow, 
  Filter,
  CheckCircle
} from "lucide-react";

export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all");

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === "all") return true;
    return skill.category === selectedCategory;
  });

  const categoryIcons: Record<SkillCategory, React.ReactNode> = {
    all: <Filter className="w-3.5 h-3.5" />,
    frontend: <Layers className="w-3.5 h-3.5 text-blue-400" />,
    backend: <Database className="w-3.5 h-3.5 text-indigo-400" />,
    ai: <Cpu className="w-3.5 h-3.5 text-cyan-400" />,
    infrastructure: <Terminal className="w-3.5 h-3.5 text-emerald-400" />,
    automation: <Workflow className="w-3.5 h-3.5 text-purple-400" />
  };

  return (
    <section id="tech-stack" className="py-24 border-t border-white/[0.06] bg-[#06070a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 text-xs font-mono mb-4">
              <span className="text-cyan-400">02 //</span>
              <span>CORE TECHNOLOGIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Production Stack &amp; Tooling
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Technologies and runtimes I build real products with. Filter by architectural layer to see production use-cases.
            </p>
          </FadeIn>

          {/* Quick Counter */}
          <div className="font-mono text-xs text-zinc-500 hidden sm:block">
            Showing <span className="text-white font-bold">{filteredSkills.length}</span> tools in active use
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl border border-white/[0.08] bg-[#0c0e14]/70 backdrop-blur-md">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-150 ${
                  isSelected
                    ? "bg-blue-600 text-white font-semibold shadow-[0_0_16px_rgba(59,130,246,0.35)] border border-blue-400/40"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-black/25 text-white" : "bg-white/[0.06] text-zinc-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            return (
              <div
                key={skill.name}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                  skill.highlight
                    ? "border-white/[0.12] bg-[#0c0f17] hover:border-blue-500/40 hover:bg-[#0f1422] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                    : "border-white/[0.06] bg-[#090b10] hover:border-white/[0.15] hover:bg-[#0d1017]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors text-base tracking-tight">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {skill.category}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {skill.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-500 group-hover:text-zinc-400 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Stack Architecture Note */}
        <div className="mt-12 p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-blue-950/20 via-black to-purple-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-200">
                Type-Safe &amp; Production-Tested Pipeline
              </h4>
              <p className="text-xs text-zinc-400">
                End-to-end TypeScript contracts across Next.js frontend, Node.js API layer, and SQL/vector persistence.
              </p>
            </div>
          </div>
          <a
            href="#engineering"
            className="text-xs font-mono text-blue-400 hover:text-blue-300 hover:underline shrink-0"
          >
            Inspect System Design Flows &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
