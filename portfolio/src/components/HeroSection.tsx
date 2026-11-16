"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Code2, Copy, Check, Terminal, Sparkles, MapPin, GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [typedIndex, setTypedIndex] = useState(0);

  const codeSnippet = `import torch
import torch.nn as nn

class ShabirAI(nn.Module):
    def __init__(self):
        super().__init__()
        self.focus = ["Computer Engineering", "Deep Learning", "Systems in C"]
        self.university = "Tongmyong University 🇰🇷"
        self.status = "Ready to collaborate & build"

    def forward(self, problem):
        solution = self.solve(problem, precision=1.0)
        return solution`;

  useEffect(() => {
    if (typedIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setTypedIndex((prev) => Math.min(prev + 3, codeSnippet.length));
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [typedIndex, codeSnippet.length]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickIcons = [
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "PyTorch", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Jupyter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#bd93f9]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#50fa7b]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Intro & Highlights */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161c2b] border border-[#bd93f9]/30 text-xs font-mono text-slate-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#50fa7b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#50fa7b]" />
            </span>
            <span>Tongmyong University • Open to AI Collaborations</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi 👋! My name is <br />
              <span className="text-gradient">Shabir Ahmad</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-[#bd93f9] flex items-center gap-2 flex-wrap">
              <GraduationCap className="w-5 h-5 text-[#bd93f9]" />
              <span>AI & Computer Engineering Student</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 flex items-center gap-1 text-base">
                <MapPin className="w-4 h-4 text-[#ff79c6]" /> Busan, South Korea 🇰🇷
              </span>
            </p>
          </div>

          {/* Subtext */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Passionate about building at both ends of the computing spectrum — from high-level neural networks and predictive modeling in 
            <span className="text-[#8be9fd] font-mono"> Python & PyTorch</span> down to memory management and core systems in 
            <span className="text-[#50fa7b] font-mono"> C & Linux</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#bd93f9] hover:bg-[#caa7fa] text-[#0b0f17] font-semibold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#bd93f9]/20"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#161c2b] hover:bg-[#20273a] text-slate-200 border border-slate-700/80 font-medium text-sm transition-all transform hover:-translate-y-0.5"
            >
              <Terminal className="w-4 h-4 text-[#50fa7b]" />
              <span>Get in Touch</span>
            </a>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-[#161c2b] transition-all text-sm font-mono"
            >
              <Code2 className="w-4 h-4 text-[#8be9fd]" />
              <span>GitHub / Profiler</span>
            </a>
          </div>

          {/* Quick Devicon Row */}
          <div className="pt-4 border-t border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-[#50fa7b]" />
                Primary Core Stack
              </span>
              <span>10+ Technologies</span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {quickIcons.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative p-2 rounded-lg bg-[#161c2b]/90 border border-slate-800 hover:border-[#bd93f9]/50 transition-all hover:scale-110"
                  title={tech.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tech.src} alt={tech.name} className="w-5 h-5 object-contain" />
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Editor Card */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-[#131926] border border-[#bd93f9]/25 shadow-2xl overflow-hidden glow-purple">
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d121c] border-b border-slate-800/90 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5555] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#f1fa8c] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#50fa7b] inline-block" />
                <span className="ml-2 text-slate-300 font-semibold">shabir_ai.py</span>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 px-2 py-1 rounded bg-[#1c2438] hover:bg-[#28324e] text-[11px] text-slate-300 transition-colors"
                title="Copy code snippet"
              >
                {copied ? <Check className="w-3 h-3 text-[#50fa7b]" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-x-auto min-h-[260px] bg-[#0b0f17]/90">
              <pre className="whitespace-pre">
                <code>
                  {codeSnippet.slice(0, typedIndex)}
                  <span className="inline-block w-2 h-4 bg-[#50fa7b] animate-pulse ml-0.5 align-middle" />
                </code>
              </pre>
            </div>

            {/* Window Footer Status */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#0d121c] border-t border-slate-800/90 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#50fa7b]" />
                <span className="text-[#50fa7b]">Inference Engine: Active</span>
              </div>
              <span className="text-slate-500">Python 3.12 • PyTorch 2.5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
