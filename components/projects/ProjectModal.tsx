"use client";

import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  FolderGit2, 
  CheckCircle, 
  Layers, 
  AlertCircle
} from "lucide-react";
import { type Project } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0e16] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden text-zinc-200 flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {project.name}
                </h3>
                <Badge variant="accent">{project.badge}</Badge>
              </div>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                {project.category}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-sm">
          
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Overview
            </h4>
            <p className="text-base text-zinc-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/[0.03] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <CheckCircle className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Architecture Flow */}
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#090b10] space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>System Architecture &amp; Data Pipeline</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">PRODUCTION PATTERN</span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.details.architecture.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.details.architecture.flow.map((step, idx) => (
                <div
                  key={step.label}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] space-y-1"
                >
                  <div className="text-[11px] font-mono text-blue-400 font-semibold flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    <span>{step.label}</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Decisions */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Key Engineering Decisions &amp; Tradeoffs
            </h4>
            <div className="space-y-2.5">
              {project.details.keyDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <div className="w-5 h-5 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                    &bull;
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">{decision}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges & Mitigations */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Challenges Solved
            </h4>
            <div className="space-y-2">
              {project.details.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed"
                >
                  <span className="text-yellow-400 font-mono shrink-0">⚠</span>
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Technologies &amp; Protocols
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" size="md">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Production Status / Results */}
          <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/[0.05] flex items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                Status &amp; Verification
              </div>
              <div className="text-xs text-zinc-200 mt-0.5">
                {project.details.results}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-white/[0.08] bg-[#090b10]">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white px-3 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] transition-colors"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 px-3 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live System Demo</span>
              </a>
            )}
          </div>

          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Detail View
          </Button>
        </div>

      </div>
    </div>
  );
}
