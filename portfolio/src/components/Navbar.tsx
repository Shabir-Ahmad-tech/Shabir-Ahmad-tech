"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Mail, Menu, X, PlayCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface NavbarProps {
  onReplayIntro: () => void;
}

export default function Navbar({ onReplayIntro }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f17]/85 backdrop-blur-md border-b border-[#bd93f9]/15 shadow-xl shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5 text-slate-100 font-mono font-bold text-base sm:text-lg tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-[#161c2b] border border-[#bd93f9]/30 flex items-center justify-center text-[#bd93f9] group-hover:border-[#50fa7b] group-hover:text-[#50fa7b] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <span>
            shabir<span className="text-[#bd93f9]">.dev</span>
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#50fa7b] animate-pulse" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121824]/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1 text-xs font-mono text-slate-300 hover:text-[#bd93f9] hover:bg-[#161c2b] rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action icons & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Replay intro animation */}
          <button
            onClick={onReplayIntro}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161c2b] border border-slate-700/60 hover:border-[#bd93f9] text-xs font-mono text-slate-300 hover:text-[#bd93f9] transition-all cursor-pointer"
            title="Replay the Multi-Cursor live build animation"
          >
            <PlayCircle className="w-3.5 h-3.5 text-[#bd93f9]" />
            <span>Replay Build</span>
          </button>

          {/* Social icons */}
          <div className="flex items-center gap-1 border-l border-slate-800 pl-2">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#161c2b] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg text-slate-400 hover:text-[#0077b5] hover:bg-[#161c2b] transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.socials.email}`}
              aria-label="Send email"
              className="p-2 rounded-lg text-slate-400 hover:text-[#50fa7b] hover:bg-[#161c2b] transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onReplayIntro}
            className="p-2 rounded-lg bg-[#161c2b] border border-slate-800 text-slate-300"
            title="Replay build"
            aria-label="Replay build animation"
          >
            <PlayCircle className="w-4 h-4 text-[#bd93f9]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#161c2b] border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e131f]/95 border-b border-[#bd93f9]/20 px-6 py-5 mt-2 space-y-4 backdrop-blur-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-mono text-slate-200 hover:bg-[#161c2b] hover:text-[#bd93f9] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Tongmyong Univ, Korea</span>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-300 hover:text-[#bd93f9]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-300 hover:text-[#0077b5]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="p-2 text-slate-300 hover:text-[#50fa7b]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
