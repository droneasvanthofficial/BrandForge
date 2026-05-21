"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import { Plus, Calendar as CalendarIcon, Instagram, Linkedin, Twitter } from "lucide-react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

interface CalendarPost {
  id: string;
  title: string;
  platform: string;
  status: "draft" | "scheduled" | "published";
  color: string;
}

const platformIcon: Record<string, React.ElementType> = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  Twitter: Twitter,
};

const platformColor: Record<string, string> = {
  Instagram: "#db2777",
  LinkedIn: "#2563eb",
  Twitter: "#0ea5e9",
};

const initialPosts: Record<number, CalendarPost[]> = {
  3: [{ id: "1", title: "Product launch teaser", platform: "Instagram", status: "scheduled", color: "#db2777" }],
  7: [{ id: "2", title: "Industry tip thread", platform: "Twitter", status: "draft", color: "#0ea5e9" }],
  10: [
    { id: "3", title: "Company milestone post", platform: "LinkedIn", status: "published", color: "#2563eb" },
    { id: "4", title: "Behind the scenes story", platform: "Instagram", status: "scheduled", color: "#db2777" },
  ],
  14: [{ id: "5", title: "Customer spotlight", platform: "LinkedIn", status: "scheduled", color: "#2563eb" }],
  18: [{ id: "6", title: "Product demo reel", platform: "Instagram", status: "draft", color: "#db2777" }],
  21: [{ id: "7", title: "Weekly insights", platform: "Twitter", status: "published", color: "#0ea5e9" }],
  25: [{ id: "8", title: "Team culture post", platform: "LinkedIn", status: "scheduled", color: "#2563eb" }],
};

export default function CalendarPage() {
  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [posts] = useState(initialPosts);

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear((y) => y - 1); }
    else setCurrentMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear((y) => y + 1); }
    else setCurrentMonth((m) => m + 1);
  };

  const totalScheduled = Object.values(posts).flat().filter((p) => p.status === "scheduled").length;
  const totalDraft = Object.values(posts).flat().filter((p) => p.status === "draft").length;

  return (
    <>
      <Header title="Content Calendar" subtitle="Plan and schedule your content" />
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-5xl mx-auto space-y-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Scheduled", value: totalScheduled, color: "#059669" },
              { label: "Drafts", value: totalDraft, color: "#f59e0b" },
              { label: "This Month", value: Object.values(posts).flat().length, color: "#7c3aed" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-5 h-5 text-violet-400" />
                <h2 className="text-base font-bold text-white">
                  {MONTHS[currentMonth]} {currentYear}
                </h2>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevMonth}
                  className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  ‹
                </button>
                <button
                  onClick={() => { setCurrentMonth(now.getMonth()); setCurrentYear(now.getFullYear()); }}
                  className="px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  Today
                </button>
                <button
                  onClick={nextMonth}
                  className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  ›
                </button>
                <button
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add
                </button>
              </div>
            </div>

            {/* Days header */}
            <div className="grid grid-cols-7 mb-2">
              {DAYS.map((d) => (
                <div key={d} className="text-center text-xs font-medium text-gray-500 py-2">{d}</div>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="h-20 rounded-lg" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isToday = day === now.getDate() && currentMonth === now.getMonth() && currentYear === now.getFullYear();
                const dayPosts = posts[day] || [];

                return (
                  <div
                    key={day}
                    className={`h-20 rounded-lg p-1.5 text-xs transition-all cursor-pointer group hover:bg-white/5 ${isToday ? "ring-2 ring-violet-500/50" : ""}`}
                    style={{ background: isToday ? "rgba(124,58,237,0.1)" : "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <div className={`font-semibold mb-1 w-5 h-5 flex items-center justify-center rounded-full ${isToday ? "bg-violet-500 text-white" : "text-gray-400"}`}>
                      {day}
                    </div>
                    <div className="space-y-0.5 overflow-hidden">
                      {dayPosts.slice(0, 2).map((post) => {
                        const Icon = platformIcon[post.platform] || CalendarIcon;
                        return (
                          <div
                            key={post.id}
                            className="flex items-center gap-0.5 px-1 py-0.5 rounded text-[10px] truncate"
                            style={{ background: `${post.color}20`, color: post.color }}
                          >
                            <Icon className="w-2.5 h-2.5 flex-shrink-0" />
                            <span className="truncate">{post.title}</span>
                          </div>
                        );
                      })}
                      {dayPosts.length > 2 && (
                        <div className="text-[10px] text-gray-500 pl-1">+{dayPosts.length - 2} more</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
