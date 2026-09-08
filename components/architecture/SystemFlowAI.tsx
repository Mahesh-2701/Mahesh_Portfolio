"use client";

import React, { useState } from "react";
import { 
  Play, 
  RotateCcw, 
  Database, 
  Network, 
  Workflow, 
  Sparkles,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SimStep {
  stepNumber: number;
  label: string;
  sublabel: string;
  status: "idle" | "running" | "completed";
  output: string;
}

export function SystemFlowAI() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const steps: SimStep[] = [
    {
      stepNumber: 1,
      label: "User Request / Intent",
      sublabel: "Natural Language Ingestion",
      status: currentStep > 1 ? "completed" : currentStep === 1 ? "running" : "idle",
      output: '"Analyze quarterly customer churn vectors and trigger webhook alerts for at-risk accounts."'
    },
    {
      stepNumber: 2,
      label: "Agent Orchestrator",
      sublabel: "Supervisor & Task Decomposition",
      status: currentStep > 2 ? "completed" : currentStep === 2 ? "running" : "idle",
      output: "Goal decomposed into 3 discrete tasks: (1) vector retrieval, (2) risk scoring, (3) webhook dispatch."
    },
    {
      stepNumber: 3,
      label: "Reasoning & Tool Selection",
      sublabel: "ReAct Loop & JSON Schema Validation",
      status: currentStep > 3 ? "completed" : currentStep === 3 ? "running" : "idle",
      output: "Invoking tools: [pgvector_similarity_search, crm_rest_api, n8n_webhook_event]"
    },
    {
      stepNumber: 4,
      label: "Sandboxed Tool Execution",
      sublabel: "Parallel Database & API Calls",
      status: currentStep > 4 ? "completed" : currentStep === 4 ? "running" : "idle",
      output: "Found 12 at-risk vector clusters; HMAC webhook signed & sent to n8n automation pipeline."
    },
    {
      stepNumber: 5,
      label: "Validated Response Stream",
      sublabel: "Zod Schema Guardrails & SSE Output",
      status: currentStep >= 5 ? "completed" : "idle",
      output: "Grounded analysis synthesized with 0 hallucinations; streaming JSON tokens dispatched to client."
    }
  ];

  const handleSimulate = () => {
    setIsRunning(true);
    setCurrentStep(1);

    let step = 1;
    const interval = setInterval(() => {
      step += 1;
      if (step > 5) {
        clearInterval(interval);
        setIsRunning(false);
      } else {
        setCurrentStep(step);
      }
    }, 700);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsRunning(false);
  };

  return (
    <div className="rounded-3xl border border-white/[0.1] bg-[#090c13] p-6 sm:p-8 space-y-6">
      {/* Interactive Controls Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h4 className="text-base font-bold text-white tracking-tight">
              Interactive Agent Execution Workflow
            </h4>
          </div>
          <p className="text-xs text-zinc-400 font-mono">
            User Intent &rarr; Agent &rarr; Reasoning &rarr; Tools (DB/APIs/n8n) &rarr; Stream
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={handleSimulate}
            disabled={isRunning}
            variant="primary"
            size="sm"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isRunning ? "Executing..." : "Run Simulation"}</span>
          </Button>
          <Button
            onClick={handleReset}
            disabled={isRunning}
            variant="secondary"
            size="sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </Button>
        </div>
      </div>

      {/* Visual Workflow Steps */}
      <div className="space-y-3">
        {steps.map((step, idx) => {
          const isCompleted = step.status === "completed";
          const isCurrent = step.status === "running";

          return (
            <React.Fragment key={step.stepNumber}>
              <div
                onClick={() => setCurrentStep(step.stepNumber)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? "border-cyan-500/50 bg-cyan-500/[0.08] shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    : isCompleted
                    ? "border-emerald-500/30 bg-emerald-500/[0.04]"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                        isCompleted
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : isCurrent
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 animate-pulse"
                          : "bg-white/[0.05] text-zinc-500 border border-white/[0.08]"
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-zinc-100">
                        {step.label}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono ml-2">
                        {"// "}{step.sublabel}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase self-start sm:self-auto ${
                      isCompleted
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : isCurrent
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        : "bg-white/[0.03] text-zinc-500 border border-white/[0.05]"
                    }`}
                  >
                    {step.status}
                  </span>
                </div>

                <div className="pl-9 text-xs font-mono text-zinc-300 bg-black/40 p-2.5 rounded-xl border border-white/[0.05]">
                  &gt; {step.output}
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <ArrowDown className="w-3.5 h-3.5 text-zinc-600" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Tools Constellation Breakdown */}
      <div className="pt-4 border-t border-white/[0.08]">
        <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
          Orchestrated Tool Ecosystem
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
            <div className="flex items-center gap-1.5 text-cyan-300">
              <Database className="w-3.5 h-3.5" />
              <span>Database / RAG</span>
            </div>
            <p className="text-[11px] text-zinc-400">pgvector similarity &amp; hybrid SQL</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
            <div className="flex items-center gap-1.5 text-blue-300">
              <Network className="w-3.5 h-3.5" />
              <span>External APIs</span>
            </div>
            <p className="text-[11px] text-zinc-400">Typed REST with idempotency keys</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
            <div className="flex items-center gap-1.5 text-purple-300">
              <Workflow className="w-3.5 h-3.5" />
              <span>Automation</span>
            </div>
            <p className="text-[11px] text-zinc-400">n8n webhooks &amp; background workers</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Guardrails</span>
            </div>
            <p className="text-[11px] text-zinc-400">JSON schema &amp; context pruning</p>
          </div>
        </div>
      </div>
    </div>
  );
}
