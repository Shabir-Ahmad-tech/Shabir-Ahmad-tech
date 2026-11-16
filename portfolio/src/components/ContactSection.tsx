"use client";

import React, { useState } from "react";
import { Terminal, Mail, Send, Copy, Check, Quote, RefreshCw, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO, DEV_QUOTES } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % DEV_QUOTES.length);
  };

  const currentQuote = DEV_QUOTES[quoteIndex];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161c2b] border border-[#bd93f9]/30 text-xs font-mono text-[#bd93f9]">
          <Terminal className="w-3.5 h-3.5" />
          <span>04. GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Something <span className="text-gradient">Extraordinary</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl">
          Interested in collaborating on AI projects, discussing research, or connecting? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Connect Card */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#131926] border border-[#bd93f9]/25 shadow-2xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#50fa7b]" />
                <span>Start a Conversation</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you have an interesting AI problem, a student research project, or simply want to chat about engineering —
                feel free to reach out directly.
              </p>
            </div>

            {/* Email Box with One-Click Copy & Direct Mailto */}
            <div className="p-4 rounded-xl bg-[#0b0f17] border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#bd93f9]/15 border border-[#bd93f9]/30 flex items-center justify-center text-[#bd93f9]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-mono font-medium text-white">{PERSONAL_INFO.socials.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#161c2b] hover:bg-[#20273a] text-xs font-mono text-slate-300 border border-slate-700 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#50fa7b]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy"}</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#bd93f9] hover:bg-[#caa7fa] text-[#0b0f17] font-semibold text-xs transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* Verified Social Connect Cards */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 block">Connect on Verified Platforms:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0b0f17] border border-slate-800 hover:border-[#0077b5]/60 hover:bg-[#0077b5]/10 transition-all group flex items-center gap-3"
                >
                  <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />
                  <div>
                    <span className="text-xs font-semibold text-white block group-hover:text-[#0077b5]">LinkedIn</span>
                    <span className="text-[10px] font-mono text-slate-400">@shabir-ahmad-ai</span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0b0f17] border border-slate-800 hover:border-slate-500 hover:bg-white/5 transition-all group flex items-center gap-3"
                >
                  <span className="w-5 h-5 flex items-center justify-center text-white font-bold text-sm">𝕏</span>
                  <div>
                    <span className="text-xs font-semibold text-white block">X / Twitter</span>
                    <span className="text-[10px] font-mono text-slate-400">@ShabirAhmadev</span>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#0b0f17] border border-slate-800 hover:border-[#bd93f9]/60 hover:bg-[#bd93f9]/10 transition-all group flex items-center gap-3"
                >
                  <GithubIcon className="w-5 h-5 text-[#bd93f9]" />
                  <div>
                    <span className="text-xs font-semibold text-white block group-hover:text-[#bd93f9]">GitHub</span>
                    <span className="text-[10px] font-mono text-slate-400">@Shabir-Ahmad-tech</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quotes & Academic Base Card */}
        <div className="lg:col-span-5 space-y-6">
          {/* Interactive Dev Quote Widget */}
          <div className="p-6 rounded-2xl bg-[#131926] border border-slate-800 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#50fa7b] flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5" />
                Random Dev & Engineering Quote
              </span>
              <button
                onClick={handleNextQuote}
                className="p-1.5 rounded-lg bg-[#161c2b] text-slate-400 hover:text-white hover:bg-slate-700/60 transition-all cursor-pointer"
                title="Shuffle Quote"
                aria-label="Get another quote"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

            <blockquote className="text-slate-200 text-sm sm:text-base italic leading-relaxed pt-1">
              &quot;{currentQuote.quote}&quot;
            </blockquote>

            <div className="text-right">
              <span className="text-xs font-mono text-[#bd93f9] font-medium">— {currentQuote.author}</span>
            </div>
          </div>

          {/* Academic Base Info */}
          <div className="p-5 rounded-2xl bg-[#131926]/70 border border-slate-800/80 space-y-3">
            <span className="text-xs font-mono text-slate-400">Current Academic Location:</span>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇰🇷</span>
              <div>
                <h4 className="text-sm font-semibold text-white">Tongmyong University (동명대학교)</h4>
                <p className="text-xs text-slate-400">Department of AI & Computer Engineering • Busan, South Korea</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
