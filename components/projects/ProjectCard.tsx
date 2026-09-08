"use client";

import React from "react";
import { 
  ArrowUpRight, 
  Sparkles,
  Terminal,
  Bot
} from "lucide-react";
import { type Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative rounded-3xl border border-white/[0.1] bg-[#0c0e15] hover:border-blue-500/40 hover:bg-[#0f121c] transition-all duration-300 overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
    >
      {/* Top Banner / UI Preview Mockup */}
      <div className="relative h-48 sm:h-52 w-full bg-[#08090d] border-b border-white/[0.08] overflow-hidden p-4 flex flex-col justify-between select-none">
        
        {/* Subtle grid in card preview */}
        <div className="absolute inset-0 bg-tech-dots opacity-40" />

        {/* Mockup Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-zinc-400 border border-white/[0.08]">
            {project.previewType.toUpperCase()}
          </span>
        </div>

        {/* Dynamic Graphic Preview based on Project Type */}
        <div className="relative z-10 my-auto">
          {project.previewType === "dashboard" && (
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 bg-white/[0.04] p-2 rounded-lg border border-white/[0.06]">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Ingestion &amp; Analytics Engine</span>
                </div>
                <span className="text-emerald-400 text-[10px]">99.8% Uptime</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-white/[0.08] text-[11px] text-zinc-300 space-y-1">
                <div className="flex items-center justify-between text-zinc-500 text-[10px]">
                  <span>QUERY STREAM</span>
                  <span className="text-blue-400">EN | ES | FR</span>
                </div>
                <div className="text-zinc-200">
                  &gt; Ingesting organizational telemetry... <span className="inline-block w-1.5 h-3 bg-blue-400 animate-pulse" />
                </div>
              </div>
            </div>
          )}

          {project.previewType === "workflow" && (
            <div className="font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 bg-white/[0.04] p-2 rounded-lg border border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-purple-300">
                  <Bot className="w-3.5 h-3.5" />
                  <span>Agent DAG Workflow Orchestrator</span>
                </div>
                <span className="text-blue-400 text-[10px]">Active</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center">
                <div className="p-1.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">
                  Planner
                </div>
                <div className="p-1.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                  Tool Exec
                </div>
                <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  Verifier
                </div>
              </div>
            </div>
          )}

          {project.previewType === "code" && (
            <div className="font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 bg-white/[0.04] p-2 rounded-lg border border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-blue-300">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Developer Telemetry Harness</span>
                </div>
                <span className="text-emerald-400 text-[10px]">200 OK &bull; 14ms</span>
              </div>
              <div className="p-2 rounded bg-black/60 border border-white/[0.08] text-[10px] text-zinc-400">
                <span>HMAC Signature: Validated &bull; Event: Webhook.Dispatched</span>
              </div>
            </div>
          )}
        </div>

        {/* Mockup Footer */}
        <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>Production Ready</span>
          <span className="group-hover:text-blue-400 transition-colors flex items-center gap-0.5">
            Click to inspect <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
              {project.name}
            </h3>
            <Badge variant="accent">{project.badge}</Badge>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technologies and Action CTA */}
        <div className="pt-4 border-t border-white/[0.06] space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-zinc-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-1 text-xs font-mono text-zinc-500 group-hover:text-blue-400 transition-colors">
            <span>View Architecture &amp; Decisions</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
