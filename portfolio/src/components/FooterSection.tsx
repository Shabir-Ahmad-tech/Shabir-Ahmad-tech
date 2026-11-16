"use client";

import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function FooterSection() {
  const [year, setYear] = React.useState<string>("2026");

  React.useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#080c14] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-7 h-7 rounded-lg bg-[#161c2b] border border-[#bd93f9]/30 flex items-center justify-center text-[#bd93f9]">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-xs font-mono text-slate-300">
              Designed & Coded by <strong className="text-white">{PERSONAL_INFO.name}</strong>
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              Built with Next.js 16, Tailwind CSS & Framer Motion • Hosted on Vercel
            </p>
          </div>
        </div>

        {/* Center: Visitor Counter Badge */}
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://komarev.com/ghpvc/?username=Shabir-Ahmad-tech&label=Profile%20Views&color=bd93f9&style=flat"
            alt="Profile Views"
            className="h-5"
          />
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#161c2b] hover:bg-[#20273a] text-xs font-mono text-slate-300 hover:text-[#bd93f9] border border-slate-800 transition-all cursor-pointer"
          title="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-slate-900 text-center">
        <p className="text-[11px] font-mono text-slate-600 flex items-center justify-center gap-1">
          <span>Tongmyong University AI & Computer Engineering</span>
          <span>•</span>
          <span>© {year} All rights reserved</span>
        </p>
      </div>
    </footer>
  );
}
