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
  Menu,
  X,
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

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center w-9 h-9 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-64 z-50 flex flex-col"
              style={{ background: "#0d0d1a", borderRight: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
                  >
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-white text-sm gradient-text">BrandForge AI</span>
                </div>
                <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                      style={
                        isActive
                          ? { background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(37,99,235,0.15))", border: "1px solid rgba(124,58,237,0.25)" }
                          : {}
                      }
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? "text-violet-400" : "text-gray-500"}`} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
