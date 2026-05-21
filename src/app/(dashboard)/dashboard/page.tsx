"use client";
import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import {
  Sparkles,
  TrendingUp,
  FileText,
  Zap,
  ArrowRight,
  BarChart3,
  Clock,
  Star,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total Generations", value: "847", change: "+12%", icon: Sparkles, color: "#7c3aed" },
  { label: "Saved Posts", value: "134", change: "+8%", icon: FileText, color: "#2563eb" },
  { label: "Credits Used", value: "320", change: "180 left", icon: Zap, color: "#f59e0b" },
  { label: "Avg. Engagement", value: "4.7%", change: "+0.9%", icon: TrendingUp, color: "#059669" },
];

const recentGenerations = [
  { platform: "Instagram", type: "Caption", content: "Unlock your potential with our AI-powered workflow. Less time on tasks, more time on growth. 🚀", time: "2m ago", saved: true },
  { platform: "LinkedIn", type: "Post", content: "After 3 years building startups, the #1 lesson I learned: speed beats perfection every single time.", time: "15m ago", saved: false },
  { platform: "Twitter", type: "Thread", content: "7 things nobody tells you about growing a SaaS to $10k MRR (thread) 🧵", time: "1h ago", saved: true },
  { platform: "Facebook", type: "Ad Copy", content: "Transform your brand's social media presence in just 30 seconds per day.", time: "3h ago", saved: false },
];

const platformColors: Record<string, string> = {
  Instagram: "#db2777",
  LinkedIn: "#2563eb",
  Twitter: "#0ea5e9",
  Facebook: "#1d4ed8",
  TikTok: "#7c3aed",
};

export default function DashboardPage() {
  return (
    <>
      <Header title="Dashboard" subtitle="Welcome back, Jane! Here's your content overview." />
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${stat.color}20` }}
                >
                  <stat.icon className="w-4.5 h-4.5" style={{ color: stat.color }} />
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: `${stat.color}15`, color: stat.color }}
                >
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-sm font-semibold text-gray-300 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: "/generate", label: "Generate Content", icon: Sparkles, color: "#7c3aed" },
              { href: "/images", label: "Image Prompts", icon: BarChart3, color: "#2563eb" },
              { href: "/calendar", label: "View Calendar", icon: Clock, color: "#059669" },
              { href: "/brand", label: "Brand Kit", icon: Star, color: "#f59e0b" },
            ].map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="flex items-center gap-2.5 p-3.5 rounded-xl hover:bg-white/5 transition-all duration-200 group border border-white/5 hover:border-white/15"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${action.color}20` }}
                >
                  <action.icon className="w-4 h-4" style={{ color: action.color }} />
                </div>
                <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                  {action.label}
                </span>
                <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-gray-400 ml-auto" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent generations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-sm font-semibold text-gray-300">Recent Generations</h2>
            <Link href="/generate" className="text-xs text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {recentGenerations.map((gen, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-xl hover:bg-white/3 transition-all duration-200 group"
                style={{ border: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: `${platformColors[gen.platform] || "#7c3aed"}30`, border: `1px solid ${platformColors[gen.platform] || "#7c3aed"}30`, color: platformColors[gen.platform] }}
                >
                  {gen.platform[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-medium text-white">{gen.platform}</span>
                    <span className="text-xs text-gray-500">·</span>
                    <span className="text-xs text-gray-500">{gen.type}</span>
                    {gen.saved && <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />}
                  </div>
                  <p className="text-xs text-gray-400 truncate">{gen.content}</p>
                </div>
                <span className="text-xs text-gray-600 flex-shrink-0">{gen.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
