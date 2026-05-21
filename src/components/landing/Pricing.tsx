"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    id: "free",
    name: "Starter",
    icon: Zap,
    price: 0,
    yearlyPrice: 0,
    description: "Perfect for trying out BrandForge AI.",
    credits: 20,
    features: [
      "20 AI generations/month",
      "3 platforms (IG, Twitter, LinkedIn)",
      "5 content types",
      "Basic hashtag generation",
      "Copy to clipboard",
      "Email support",
    ],
    notIncluded: ["Brand Kit", "Content Calendar", "Analytics", "API Access"],
    cta: "Start Free",
    color: "#6b7280",
  },
  {
    id: "pro",
    name: "Pro",
    icon: Sparkles,
    price: 29,
    yearlyPrice: 23,
    description: "For creators and growing brands.",
    credits: 500,
    features: [
      "500 AI generations/month",
      "All 10+ platforms",
      "All content types",
      "Smart hashtag optimizer",
      "Brand Kit (3 brands)",
      "Content Calendar",
      "Basic Analytics",
      "AI image prompts",
      "Priority support",
    ],
    notIncluded: ["White-label", "Team members", "API Access"],
    cta: "Start Pro Trial",
    popular: true,
    color: "#7c3aed",
  },
  {
    id: "agency",
    name: "Agency",
    icon: Building2,
    price: 99,
    yearlyPrice: 79,
    description: "For agencies managing multiple brands.",
    credits: 2000,
    features: [
      "2000 AI generations/month",
      "All platforms & content types",
      "Unlimited Brand Kits",
      "Advanced Analytics",
      "Content Calendar & Scheduling",
      "5 team member seats",
      "White-label exports",
      "API Access",
      "Dedicated account manager",
      "Custom integrations",
    ],
    notIncluded: [],
    cta: "Start Agency Trial",
    color: "#2563eb",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 border"
            style={{
              background: "rgba(124,58,237,0.1)",
              borderColor: "rgba(124,58,237,0.3)",
              color: "#a78bfa",
            }}
          >
            Transparent Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Simple, <span className="gradient-text">Scalable Plans</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto mb-8">
            Start free. Scale as you grow. No hidden fees.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full px-2 py-1.5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-green-400 font-semibold">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 ${
                plan.popular
                  ? "border-violet-500/60 ring-2 ring-violet-500/30"
                  : "border-white/10"
              } border`}
              style={{
                background: plan.popular
                  ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(37,99,235,0.08))"
                  : "rgba(255,255,255,0.03)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
                >
                  ✨ Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}30` }}
                >
                  <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{plan.name}</div>
                  <div className="text-xs text-gray-400">{plan.credits} credits/mo</div>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-extrabold text-white">
                  ${isYearly ? plan.yearlyPrice : plan.price}
                </span>
                {plan.price > 0 && (
                  <span className="text-gray-400 text-sm ml-1">/mo</span>
                )}
                {plan.price === 0 && (
                  <span className="text-gray-400 text-sm ml-1">forever</span>
                )}
                {isYearly && plan.price > 0 && (
                  <div className="text-xs text-green-400 mt-0.5">
                    Billed ${plan.yearlyPrice * 12}/year
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-400 mb-5">{plan.description}</p>

              <Link
                href="/sign-up"
                className="block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 mb-6"
                style={
                  plan.popular
                    ? {
                        background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                        color: "white",
                        boxShadow: "0 0 20px rgba(124,58,237,0.3)",
                      }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }
                }
              >
                {plan.cta}
              </Link>

              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          All plans include a 14-day money-back guarantee. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
