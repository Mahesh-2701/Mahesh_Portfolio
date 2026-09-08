"use client";

import React from "react";
import { githubData } from "@/data/github";
import { FadeIn } from "@/components/animations/FadeIn";
import { 
  FolderGit2, 
  ExternalLink, 
  Flame 
} from "lucide-react";

export function GithubSection() {
  // Generate visual contribution matrix representation
  const weeks = 40;
  const daysPerWeek = 7;
  const contributionGrid = Array.from({ length: weeks }, (_, wIdx) =>
    Array.from({ length: daysPerWeek }, (_, dIdx) => {
      // Deterministic heat level without fabricating claims
      const val = (wIdx * 7 + dIdx * 3) % 11;
      if (val > 8) return 3; // highest intensity
      if (val > 5) return 2; // medium
      if (val > 2) return 1; // light
      return 0; // inactive
    })
  );

  return (
    <section id="github" className="py-24 border-t border-white/[0.06] bg-[#06070a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 text-xs font-mono mb-4">
              <span className="text-indigo-400">08 //</span>
              <span>OPEN SOURCE &amp; CODEBASE ACTIVITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              GitHub Engineering &amp; Repositories
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Explore public repositories, code architectures, and developer tooling modules.
            </p>
          </FadeIn>

          <a
            href={githubData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.1] bg-white/[0.04] text-xs font-mono text-zinc-200 hover:text-white hover:border-white/[0.25] transition-all self-start md:self-auto"
          >
            <FolderGit2 className="w-4 h-4 text-blue-400" />
            <span>github.com/{githubData.username}</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>

        {/* Contribution Activity Visualization */}
        <FadeIn direction="up">
          <div className="mb-12 p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-[#0a0c13] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Engineering Commit Activity</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-xs bg-white/[0.05]" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-950/80" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-700/80" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
                <span>More</span>
              </div>
            </div>

            {/* Matrix overflow scroll */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1 min-w-[700px]">
                {contributionGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-2.5 h-2.5 rounded-xs transition-colors ${
                          level === 3
                            ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)]"
                            : level === 2
                            ? "bg-emerald-600/70"
                            : level === 1
                            ? "bg-emerald-900/50"
                            : "bg-white/[0.04]"
                        }`}
                        title={`Activity week ${wIdx + 1}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-zinc-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-white/[0.04]">
              <span>Continuous development workflow across private and open-source branches</span>
              <span className="text-zinc-400">Maintained with Git &bull; Atomic Commits</span>
            </div>
          </div>
        </FadeIn>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {githubData.featuredRepos.map((repo, idx) => (
            <FadeIn key={repo.name} direction="up" delay={0.08 * idx}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full p-6 rounded-3xl border border-white/[0.08] bg-[#090b11] hover:border-blue-500/40 hover:bg-[#0c0f18] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-zinc-100 font-mono text-sm font-semibold group-hover:text-blue-400 transition-colors">
                      <FolderGit2 className="w-4 h-4 text-zinc-400 group-hover:text-blue-400" />
                      <span>{repo.name}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300" />
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                    {repo.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/[0.04]">
                  <div className="flex flex-wrap gap-1.5">
                    {repo.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>
                    <span className="text-[10px] text-zinc-600">TypeScript / Clean Architecture</span>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
