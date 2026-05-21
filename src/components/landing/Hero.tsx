"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, Users, Zap } from "lucide-react";

const floatVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
  },
};

const stats = [
  { label: "Content Generated", value: "2M+" },
  { label: "Happy Users", value: "50K+" },
  { label: "Platforms Supported", value: "10+" },
  { label: "Time Saved / Week", value: "8hrs" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        />
        <div
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #2563eb, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, #db2777, transparent)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border"
            style={{
              background: "rgba(124,58,237,0.1)",
              borderColor: "rgba(124,58,237,0.3)",
              color: "#a78bfa",
            }}
          >
            <Sparkles className="w-4 h-4" />
            Powered by Google Gemini AI
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Generate{" "}
            <span className="gradient-text">Viral Content</span>
            <br />
            for Every Platform
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            BrandForge AI crafts scroll-stopping Instagram captions, LinkedIn posts,
            Twitter threads, ad copy, and more — tailored to your brand voice in
            seconds.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              href="/sign-up"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
            >
              <Sparkles className="w-5 h-5" />
              Start Generating Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #6d28d9, #1d4ed8)" }}
              />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              See How It Works
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center justify-center gap-3 text-sm text-gray-400 mb-16"
          >
            <div className="flex -space-x-2">
              {["bg-violet-500", "bg-blue-500", "bg-pink-500", "bg-emerald-500"].map(
                (c, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${c} border-2 border-[#0a0a0f] flex items-center justify-center`}
                  >
                    <Users className="w-3 h-3 text-white" />
                  </div>
                )
              )}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>
              Loved by <strong className="text-white">50,000+</strong> creators & brands
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="text-3xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating UI preview */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-10 right-10 hidden xl:block"
      >
        <div
          className="glass rounded-2xl p-4 w-64 shadow-2xl"
          style={{ boxShadow: "0 0 40px rgba(124,58,237,0.2)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-semibold text-gray-300">AI Generating...</span>
            <span className="ml-auto text-xs text-violet-400 font-medium">Live</span>
          </div>
          <div className="space-y-2">
            <div className="h-2.5 bg-white/10 rounded-full w-full animate-pulse" />
            <div className="h-2.5 bg-white/10 rounded-full w-4/5 animate-pulse" />
            <div className="h-2.5 bg-white/10 rounded-full w-3/5 animate-pulse" />
          </div>
          <div className="mt-3 flex gap-1.5 flex-wrap">
            {["#brand", "#social", "#AI"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  color: "#a78bfa",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
