import React from "react";
import { experienceData } from "@/data/experience";
import { FadeIn } from "@/components/animations/FadeIn";
import { Badge } from "@/components/ui/Badge";
import { Calendar, MapPin, CheckCircle2, Layers } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-white/[0.06] bg-[#07080d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 text-xs font-mono mb-4">
              <span className="text-blue-400">07 //</span>
              <span>ENGINEERING TRAJECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Professional Experience
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
              Software engineering roles spanning production web applications, AI system integration, and distributed workflow automation.
            </p>
          </FadeIn>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <FadeIn key={exp.id} direction="up" delay={0.1 * idx}>
              <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-[#0a0c13] hover:border-white/[0.16] hover:bg-[#0c0e17] transition-all duration-200 space-y-6">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <Badge variant="emerald">{exp.badge}</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-400 font-mono">
                      <span>{exp.company}</span>
                      <span className="text-zinc-600">&bull;</span>
                      <span className="text-zinc-400 flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                    Core Engineering Responsibilities
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Projects */}
                {exp.keyProjects && exp.keyProjects.length > 0 && (
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-purple-400" />
                      <span>Key Technical Deliverables</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exp.keyProjects.map((proj, pIdx) => (
                        <div key={pIdx} className="space-y-1">
                          <div className="text-xs font-semibold text-zinc-200">
                            {proj.name}
                          </div>
                          <p className="text-xs text-zinc-400 leading-relaxed">
                            {proj.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies List */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/[0.04]">
                  <span className="text-xs font-mono text-zinc-500 mr-2">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
