"use client";
import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const weeklyData = [
  { day: "Mon", generations: 24, saved: 8 },
  { day: "Tue", generations: 38, saved: 14 },
  { day: "Wed", generations: 12, saved: 5 },
  { day: "Thu", generations: 56, saved: 22 },
  { day: "Fri", generations: 45, saved: 18 },
  { day: "Sat", generations: 30, saved: 10 },
  { day: "Sun", generations: 18, saved: 6 },
];

const platformData = [
  { platform: "Instagram", count: 284 },
  { platform: "LinkedIn", count: 198 },
  { platform: "Twitter", count: 156 },
  { platform: "Facebook", count: 112 },
  { platform: "TikTok", count: 97 },
];

const monthlyData = [
  { month: "Jan", generations: 120 },
  { month: "Feb", generations: 189 },
  { month: "Mar", generations: 234 },
  { month: "Apr", generations: 310 },
  { month: "May", generations: 280 },
  { month: "Jun", generations: 390 },
  { month: "Jul", generations: 420 },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; name: string; color: string }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl p-3 text-xs border border-white/10 shadow-xl">
        <div className="font-semibold text-white mb-1">{label}</div>
        {payload.map((p) => (
          <div key={p.name} style={{ color: p.color }}>
            {p.name}: {p.value}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function AnalyticsPage() {
  return (
    <>
      <Header title="Analytics" subtitle="Track your content generation performance" />
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-5xl mx-auto space-y-5">
          {/* Top stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Total Generations", value: "847", sub: "All time" },
              { label: "This Month", value: "320", sub: "+12% vs last month" },
              { label: "Saved Posts", value: "134", sub: "15.8% save rate" },
              { label: "Credits Left", value: "180", sub: "of 500 monthly" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass rounded-2xl p-5"
              >
                <div className="text-2xl font-bold text-white mb-0.5">{s.value}</div>
                <div className="text-xs font-medium text-gray-300 mb-0.5">{s.label}</div>
                <div className="text-xs text-gray-500">{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Weekly activity chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-sm font-semibold text-gray-300 mb-5">Weekly Activity</h2>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="genGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="savedGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="day" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="generations" stroke="#7c3aed" strokeWidth={2} fill="url(#genGrad)" name="Generations" />
                <Area type="monotone" dataKey="saved" stroke="#2563eb" strokeWidth={2} fill="url(#savedGrad)" name="Saved" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Platform breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="glass rounded-2xl p-6"
            >
              <h2 className="text-sm font-semibold text-gray-300 mb-5">Platform Breakdown</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={platformData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                  <XAxis type="number" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis dataKey="platform" type="category" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} width={70} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" fill="#7c3aed" radius={[0, 4, 4, 0]} name="Generations" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Monthly trend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6"
            >
              <h2 className="text-sm font-semibold text-gray-300 mb-5">Monthly Trend</h2>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="monthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#db2777" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#db2777" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="generations" stroke="#db2777" strokeWidth={2} fill="url(#monthGrad)" name="Generations" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
