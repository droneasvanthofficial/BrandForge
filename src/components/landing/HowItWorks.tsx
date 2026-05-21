"use client";
import { motion } from "framer-motion";
import { Building2, Sparkles, Copy, CalendarCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Building2,
    title: "Describe Your Brand",
    description:
      "Enter your business name, industry, and target audience. Set your brand voice and upload your brand kit for perfectly on-brand content every time.",
    color: "#7c3aed",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Choose Content Type",
    description:
      "Select the platform (Instagram, LinkedIn, Twitter, etc.) and content type (caption, thread, hook, ad copy). Pick your tone and campaign goal.",
    color: "#2563eb",
  },
  {
    step: "03",
    icon: Copy,
    title: "Generate & Refine",
    description:
      "Get 3 AI-crafted variations in under 5 seconds. Tweak, regenerate, or copy with one click. Edit directly in the app before publishing.",
    color: "#db2777",
  },
  {
    step: "04",
    icon: CalendarCheck,
    title: "Schedule & Publish",
    description:
      "Drag content into your visual calendar, schedule posts, and track performance — all without leaving BrandForge AI.",
    color: "#059669",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #2563eb, transparent)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 border"
            style={{
              background: "rgba(37,99,235,0.1)",
              borderColor: "rgba(37,99,235,0.3)",
              color: "#60a5fa",
            }}
          >
            Simple 4-Step Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            From Idea to{" "}
            <span className="gradient-text">Viral Post</span>
            <br />in 30 Seconds
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No copywriting experience needed. Our AI handles everything from
            strategy to execution.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-24 left-0 right-0 h-px hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), rgba(37,99,235,0.3), rgba(219,39,119,0.3), rgba(5,150,105,0.3), transparent)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number circle */}
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}25, ${step.color}10)`,
                    border: `2px solid ${step.color}40`,
                    boxShadow: `0 0 30px ${step.color}20`,
                  }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  <span
                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{ background: step.color, color: "white" }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA under steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a
            href="/sign-up"
            className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-2xl transition-all duration-300 hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 30px rgba(124,58,237,0.3)" }}
          >
            <Sparkles className="w-5 h-5" />
            Try It Free — No Credit Card Needed
          </a>
        </motion.div>
      </div>
    </section>
  );
}
