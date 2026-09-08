"use client";

import React, { useState, useRef, useEffect } from "react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: "whoami",
      output: (
        <div className="text-zinc-300">
          <span className="text-emerald-400 font-bold">{profileData.name}</span> &bull; {profileData.tagline}
        </div>
      )
    },
    {
      command: "status",
      output: (
        <div className="text-zinc-400">
          <div>&bull; {profileData.status.message}</div>
          <div className="text-blue-400 text-[11px]">&gt; {profileData.status.details}</div>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const availableCommands = [
    "help",
    "whoami",
    "about",
    "stack",
    "projects",
    "architecture",
    "ai",
    "status",
    "contact",
    "clear",
    "date"
  ];

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    if (cmd === "clear") {
      setLogs([]);
      setInput("");
      return;
    }

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-zinc-400">
            <div className="text-white font-semibold">Available commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 pt-1 text-xs">
              <div><span className="text-blue-400">whoami</span> - Identity &amp; role</div>
              <div><span className="text-blue-400">about</span> - Background &amp; bio</div>
              <div><span className="text-blue-400">stack</span> - Active tech stack</div>
              <div><span className="text-blue-400">projects</span> - Showcase list</div>
              <div><span className="text-blue-400">status</span> - Availability</div>
              <div><span className="text-blue-400">contact</span> - Email &amp; links</div>
              <div><span className="text-blue-400">architecture</span> - System design</div>
              <div><span className="text-blue-400">clear</span> - Reset terminal</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="space-y-1">
            <div className="text-white font-bold">{profileData.name}</div>
            <div className="text-blue-300">{profileData.tagline}</div>
            <div className="text-zinc-400 text-xs">Location: {profileData.status.details}</div>
          </div>
        );
        break;

      case "about":
        outputNode = (
          <div className="text-zinc-300 max-w-xl leading-relaxed">
            {profileData.bio}
          </div>
        );
        break;

      case "stack":
        outputNode = (
          <div className="space-y-2 text-xs">
            <div><span className="text-cyan-400">Frontend:</span> React, Next.js 16, TypeScript, Tailwind CSS, HTML5, CSS</div>
            <div><span className="text-indigo-400">Backend:</span> Node.js, Express, REST APIs, PostgreSQL, MongoDB, Redis</div>
            <div><span className="text-emerald-400">AI:</span> LLMs, RAG, AI Agents, Tool Calling, Agentic Workflows, Prompt Engineering</div>
            <div><span className="text-purple-400">DevOps:</span> Docker, Linux, Nginx, Cloudflare, Git, GitHub Actions, CI/CD</div>
            <div><span className="text-amber-400">Automation:</span> n8n, Webhooks, APIs, Background Queues</div>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-2 text-xs">
            {projectsData.map((p) => (
              <div key={p.id} className="p-2 rounded bg-white/[0.03] border border-white/[0.05]">
                <div className="text-white font-bold">{p.name} <span className="text-blue-400 font-mono text-[10px]">[{p.badge}]</span></div>
                <div className="text-zinc-400 text-[11px]">{p.tagline}</div>
                <div className="text-zinc-500 text-[10px] font-mono mt-0.5">Stack: {p.technologies.slice(0, 4).join(", ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "status":
        outputNode = (
          <div className="text-emerald-400 font-mono text-xs space-y-1">
            <div>✓ {profileData.status.message}</div>
            <div className="text-zinc-400 text-[11px]">&gt; {profileData.status.details}</div>
          </div>
        );
        break;

      case "architecture":
        outputNode = (
          <div className="text-zinc-300 font-mono text-xs space-y-1">
            <div className="text-blue-400">Web App Request Pipeline:</div>
            <div>Client &rarr; Next.js Edge &rarr; API Gateway &rarr; App Services &rarr; PostgreSQL &amp; Redis Cache</div>
            <div className="text-zinc-500 text-[11px] pt-1">Scroll to #engineering section for interactive node audits.</div>
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs">
            <div>Email: <a href={`mailto:${profileData.email}`} className="text-blue-400 underline">{profileData.email}</a></div>
            <div>GitHub: <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{profileData.github}</a></div>
            <div>LinkedIn: <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{profileData.linkedin}</a></div>
          </div>
        );
        break;

      case "date":
        outputNode = <div className="text-zinc-400">{new Date().toUTCString()}</div>;
        break;

      default:
        outputNode = (
          <div className="text-red-400">
            command not found: {cmd}. Type <span className="text-white underline cursor-pointer" onClick={() => handleCommand("help")}>help</span> for a list of available commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [...prev, { command: rawCmd, output: outputNode }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < history.length) {
          setHistoryIndex(nextIndex);
          setInput(history[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInput("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = availableCommands.find((c) => c.startsWith(input.toLowerCase()));
      if (match) {
        setInput(match);
      }
    }
  };

  return (
    <div className="rounded-3xl border border-white/[0.1] bg-[#090b12] shadow-2xl overflow-hidden font-mono text-xs">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          <span className="ml-2 text-zinc-400 text-xs">mahi@dev: ~ (zsh)</span>
        </div>

        {/* Quick run pills */}
        <div className="hidden sm:flex items-center gap-1.5 text-[11px]">
          <span className="text-zinc-500">Quick:</span>
          {["whoami", "stack", "projects", "status", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Log Area */}
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="p-5 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto cursor-text text-zinc-300 leading-relaxed"
      >
        <div className="text-zinc-500 text-[11px]">
          Antigravity Developer Shell [v2.4.0-macOS-arm64]<br />
          Type <span className="text-blue-400">help</span> for commands, or use ↑/↓ for history.
        </div>

        {logs.map((log, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-blue-400 font-semibold">mahi@dev</span>:
              <span className="text-cyan-400">~</span>$ 
              <span className="text-white">{log.command}</span>
            </div>
            <div className="pl-4">{log.output}</div>
          </div>
        ))}

        {/* Interactive Prompt Input */}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-blue-400 font-semibold">mahi@dev</span>:
          <span className="text-cyan-400">~</span>$
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white focus:outline-none caret-blue-400 text-xs font-mono"
            placeholder="type 'help' or any command..."
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
          />
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="flex items-center justify-between px-5 py-2 border-t border-white/[0.06] bg-black/40 text-[10px] text-zinc-500">
        <span>Press TAB to autocomplete &bull; ENTER to run</span>
        <span className="text-emerald-400">Session: Active</span>
      </div>
    </div>
  );
}
