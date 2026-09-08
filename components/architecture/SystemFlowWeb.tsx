"use client";

import React, { useState } from "react";
import { webSystemNodes, type FlowNode } from "@/data/architecture";
import { ArrowDown, CheckCircle2, Server, Database, Globe, Shield, Zap } from "lucide-react";

export function SystemFlowWeb() {
  const [selectedNode, setSelectedNode] = useState<FlowNode>(webSystemNodes[0]);

  const nodeIcons: Record<string, React.ReactNode> = {
    client: <Globe className="w-4 h-4 text-blue-400" />,
    edge: <Shield className="w-4 h-4 text-cyan-400" />,
    api: <Server className="w-4 h-4 text-purple-400" />,
    services: <Zap className="w-4 h-4 text-indigo-400" />,
    cache: <Zap className="w-4 h-4 text-emerald-400" />,
    db: <Database className="w-4 h-4 text-amber-400" />
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Visual Flow Diagram */}
      <div className="lg:col-span-7 bg-[#0a0c13] border border-white/[0.1] rounded-3xl p-6 sm:p-8 space-y-3">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-2">
          <div className="text-xs font-mono text-zinc-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>FULL_STACK_TOPOLOGY.draw</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">CLICK NODE TO AUDIT</span>
        </div>

        <div className="space-y-2">
          {webSystemNodes.map((node, index) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <React.Fragment key={node.id}>
                <div
                  onClick={() => setSelectedNode(node)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? "border-blue-500/50 bg-blue-500/[0.08] shadow-[0_0_24px_rgba(59,130,246,0.2)]"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/[0.08] flex items-center justify-center shrink-0">
                      {nodeIcons[node.id] || <Server className="w-4 h-4 text-zinc-400" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-zinc-100 group-hover:text-blue-300 transition-colors">
                          {node.label}
                        </span>
                        {node.latency && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/[0.05] text-zinc-400">
                            {node.latency}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-zinc-400 font-mono">
                        {node.sublabel}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {node.status}
                    </span>
                  </div>
                </div>

                {/* Arrow connector between stages */}
                {index < webSystemNodes.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-zinc-600 animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Node Detail Audit Inspector */}
      <div className="lg:col-span-5 bg-[#0c0e17] border border-white/[0.1] rounded-3xl p-6 sm:p-7 space-y-6">
        <div className="border-b border-white/[0.08] pb-4">
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
            Selected Tier Inspector
          </div>
          <h4 className="text-xl font-bold text-white mt-1">
            {selectedNode.label}
          </h4>
          <p className="text-xs font-mono text-blue-400 mt-0.5">
            {selectedNode.sublabel}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
              Role in Production
            </h5>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {selectedNode.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-zinc-500">ESTIMATED LATENCY</div>
              <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">
                {selectedNode.latency || "Instant"}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-zinc-500">HEALTH CHECK</div>
              <div className="text-base font-bold text-blue-400 font-mono mt-0.5">
                99.9% SLO
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-zinc-400 space-y-1.5">
            <div className="text-zinc-500 text-[10px] uppercase">Architectural Guarantees:</div>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Decoupled failure domain</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Automated circuit breakers</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Stateless horizontal replica scaling</span>
            </div>
          </div>
        </div>

        <div className="pt-2 text-[11px] font-mono text-zinc-500 border-t border-white/[0.06]">
          Click another node above to audit its pipeline telemetry.
        </div>
      </div>

    </div>
  );
}
