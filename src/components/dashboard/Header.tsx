"use client";
import { Bell, Search, Sparkles } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="h-16 border-b border-white/10 flex items-center px-6 gap-4 sticky top-0 z-30 flex-shrink-0" style={{ background: "rgba(10,10,20,0.9)", backdropFilter: "blur(12px)" }}>
      <div className="flex-1 min-w-0">
        <h1 className="text-base font-bold text-white truncate">{title}</h1>
        {subtitle && <p className="text-xs text-gray-500 truncate">{subtitle}</p>}
      </div>

      {/* Search */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm text-gray-400" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <Search className="w-4 h-4" />
        <span className="text-xs">Search...</span>
        <kbd className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-gray-500">⌘K</kbd>
      </div>

      {/* Generate CTA */}
      <Link
        href="/generate"
        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
      >
        <Sparkles className="w-3.5 h-3.5" />
        Generate
      </Link>

      {/* Notifications */}
      <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-all">
        <Bell className="w-4.5 h-4.5" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-500" />
      </button>

      {/* Avatar */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 cursor-pointer"
        style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
      >
        JD
      </div>
    </header>
  );
}
