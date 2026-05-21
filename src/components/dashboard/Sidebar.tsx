"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  LayoutDashboard,
  Sparkles,
  Image,
  Calendar,
  Palette,
  BarChart3,
  CreditCard,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/generate", icon: Sparkles, label: "Generate" },
  { href: "/images", icon: Image, label: "Images" },
  { href: "/calendar", icon: Calendar, label: "Calendar" },
  { href: "/brand", icon: Palette, label: "Brand Kit" },
  { href: "/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/subscription", icon: CreditCard, label: "Subscription" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const creditsUsed = 320;
  const creditsTotal = 500;
  const creditsPercent = Math.round((creditsUsed / creditsTotal) * 100);

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="hidden md:flex flex-col h-screen sticky top-0 border-r border-white/10 overflow-hidden flex-shrink-0"
      style={{ background: "rgba(10,10,20,0.95)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-white/10 flex-shrink-0">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
        >
          <Zap className="w-4 h-4 text-white" />
        </div>
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="font-bold text-white text-sm whitespace-nowrap gradient-text"
            >
              BrandForge AI
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              style={
                isActive
                  ? {
                      background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(37,99,235,0.15))",
                      border: "1px solid rgba(124,58,237,0.25)",
                    }
                  : {}
              }
              title={collapsed ? item.label : undefined}
            >
              <item.icon
                className={`w-5 h-5 flex-shrink-0 transition-colors ${
                  isActive ? "text-violet-400" : "text-gray-500 group-hover:text-gray-300"
                }`}
              />
              <AnimatePresence initial={false}>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
              {isActive && !collapsed && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Credits */}
      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-4 py-4 border-t border-white/10"
          >
            <div className="glass rounded-xl p-3">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span className="font-medium">Credits</span>
                <span className="text-violet-400 font-semibold">{creditsUsed}/{creditsTotal}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${creditsPercent}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb)" }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1.5">{creditsTotal - creditsUsed} remaining</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User + logout */}
      <div className="px-2 pb-4 border-t border-white/10 pt-3">
        <div
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl ${collapsed ? "justify-center" : ""}`}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
          >
            JD
          </div>
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 min-w-0"
              >
                <div className="text-sm font-medium text-white truncate">Jane Demo</div>
                <div className="text-xs text-gray-500 truncate">Pro Plan</div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence initial={false}>
            {!collapsed && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-500 hover:text-red-400 transition-colors"
                title="Sign out"
                onClick={() => (window.location.href = "/")}
              >
                <LogOut className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-[60px] -right-3.5 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center bg-[#0a0a14] text-gray-400 hover:text-white transition-colors z-20"
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>
    </motion.aside>
  );
}
