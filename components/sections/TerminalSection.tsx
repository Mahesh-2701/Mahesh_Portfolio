"use client";

import React from "react";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { FadeIn } from "@/components/animations/FadeIn";

export function TerminalSection() {
  return (
    <section id="terminal" className="py-24 border-t border-white/[0.06] bg-[#06070a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 text-xs font-mono mb-4">
              <span className="text-emerald-400">06 //</span>
              <span>DEVELOPER CLI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Interactive Developer Workstation
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
              Prefer command-line interfaces? Query my stack, background, architecture decisions, and status directly in the browser terminal.
            </p>
          </FadeIn>
        </div>

        {/* Terminal Component */}
        <FadeIn direction="up" delay={0.1}>
          <InteractiveTerminal />
        </FadeIn>

      </div>
    </section>
  );
}
