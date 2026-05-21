"use client";
import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import { Check, Zap, Sparkles, Building2, CreditCard } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    id: "free",
    name: "Starter",
    icon: Zap,
    price: 0,
    credits: 20,
    features: ["20 generations/month", "3 platforms", "5 content types", "Basic hashtags"],
    color: "#6b7280",
    current: false,
  },
  {
    id: "pro",
    name: "Pro",
    icon: Sparkles,
    price: 29,
    credits: 500,
    features: ["500 generations/month", "All 10+ platforms", "All content types", "Brand Kit (3 brands)", "Content Calendar", "Analytics", "Image Prompts", "Priority support"],
    color: "#7c3aed",
    popular: true,
    current: true,
  },
  {
    id: "agency",
    name: "Agency",
    icon: Building2,
    price: 99,
    credits: 2000,
    features: ["2000 generations/month", "Unlimited Brand Kits", "5 team seats", "White-label exports", "API Access", "Dedicated manager"],
    color: "#2563eb",
    current: false,
  },
];

export default function SubscriptionPage() {
  return (
    <>
      <Header title="Subscription" subtitle="Manage your plan and billing" />
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Current plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6"
            style={{ border: "1px solid rgba(124,58,237,0.3)" }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-semibold text-white">Current Plan: Pro</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa" }}>Active</span>
                </div>
                <p className="text-xs text-gray-400">Next billing date: August 15, 2025 · $29/month</p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-xl text-xs font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/25 transition-all">
                  Cancel Plan
                </button>
                <button
                  className="px-4 py-2 rounded-xl text-xs font-medium text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
                >
                  Manage Billing
                </button>
              </div>
            </div>

            {/* Credits usage */}
            <div className="mt-5 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                <span>Monthly Credits</span>
                <span className="text-violet-400 font-semibold">320 / 500 used</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "64%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #7c3aed, #2563eb)" }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">180 credits remaining · Resets Aug 15</div>
            </div>
          </motion.div>

          {/* Plan selection */}
          <div>
            <h2 className="text-sm font-semibold text-gray-300 mb-4">Available Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-5 border ${plan.current ? "border-violet-500/50" : "border-white/8"}`}
                  style={{
                    background: plan.current
                      ? "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(37,99,235,0.08))"
                      : "rgba(255,255,255,0.02)",
                  }}
                >
                  {plan.popular && (
                    <div className="text-xs font-bold text-violet-400 mb-2">✨ Most Popular</div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
                    <span className="font-bold text-white">{plan.name}</span>
                    {plan.current && (
                      <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa" }}>
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-extrabold text-white mb-0.5">
                    ${plan.price}
                    <span className="text-sm font-normal text-gray-400">/mo</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">{plan.credits} credits/month</div>
                  <ul className="space-y-1.5 mb-4">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {!plan.current ? (
                    <button
                      className="w-full py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:opacity-90"
                      style={
                        plan.id === "agency"
                          ? { background: "linear-gradient(135deg, #2563eb, #7c3aed)" }
                          : { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }
                      }
                    >
                      {plan.price === 0 ? "Downgrade" : "Upgrade"}
                    </button>
                  ) : (
                    <div className="w-full py-2.5 rounded-xl text-xs font-semibold text-center text-violet-400 border border-violet-500/30">
                      ✓ Active Plan
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Billing history */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <CreditCard className="w-4 h-4 text-blue-400" />
              <h2 className="text-sm font-semibold text-gray-300">Billing History</h2>
            </div>
            <div className="space-y-3">
              {[
                { date: "Jul 15, 2025", amount: "$29.00", status: "Paid", period: "Jul 15 – Aug 14" },
                { date: "Jun 15, 2025", amount: "$29.00", status: "Paid", period: "Jun 15 – Jul 14" },
                { date: "May 15, 2025", amount: "$29.00", status: "Paid", period: "May 15 – Jun 14" },
              ].map((inv) => (
                <div key={inv.date} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
                  <div>
                    <div className="text-sm text-white">{inv.period}</div>
                    <div className="text-xs text-gray-500">{inv.date}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white">{inv.amount}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(5,150,105,0.2)", color: "#34d399" }}>
                      {inv.status}
                    </span>
                    <Link href="#" className="text-xs text-violet-400 hover:text-violet-300">
                      Download
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
