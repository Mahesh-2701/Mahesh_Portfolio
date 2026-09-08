"use client";

import React, { useState } from "react";
import { projectsData, type Project } from "@/data/projects";
import { ProjectCard } from "@/projects/ProjectCard";
import { ProjectModal } from "@/projects/ProjectModal";
import { FadeIn } from "@/animations/FadeIn";
import { FolderGit2 } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 border-t border-white/[0.06] bg-[#07080d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 text-xs font-mono mb-4">
              <span className="text-blue-400">03 //</span>
              <span>ENGINEERED PRODUCTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Software Systems
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Production-focused applications, multi-agent pipelines, and developer tooling. Click on any product to inspect architecture diagrams, engineering decisions, and technical challenges.
            </p>
          </FadeIn>

          <div className="text-xs font-mono text-zinc-500 hidden md:flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-zinc-400" />
            <span>Interactive Spec Sheet Enabled</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <FadeIn key={project.id} direction="up" delay={0.1 * idx}>
              <ProjectCard
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
