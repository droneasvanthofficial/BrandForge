"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Image,
  Calendar,
  BarChart3,
  Palette,
  Globe,
  Zap,
  RefreshCw,
  Hash,
  MessageSquare,
  TrendingUp,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Content Generation",
    description:
      "Generate scroll-stopping captions, posts, and copy for Instagram, LinkedIn, Twitter, Facebook, TikTok, and more with one click.",
    color: "#7c3aed",
    gradient: "from-violet-500/20 to-violet-500/5",
  },
  {
    icon: Image,
    title: "AI Image Prompts",
    description:
      "Get precise, platform-optimized image prompts and descriptions to use with DALL-E, Midjourney, or Stable Diffusion.",
    color: "#2563eb",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Calendar,
    title: "Content Calendar",
    description:
      "Drag-and-drop your generated content into a beautiful visual calendar. Plan weeks of content in minutes.",
    color: "#059669",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track your content performance, credit usage, and generation trends with beautiful charts and insights.",
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: Palette,
    title: "Brand Kit",
    description:
      "Store your brand colors, fonts, tone of voice, and guidelines. Every piece of content stays on-brand automatically.",
    color: "#db2777",
    gradient: "from-pink-500/20 to-pink-500/5",
  },
  {
    icon: Globe,
    title: "Multi-Platform",
    description:
      "Tailored content for each platform's algorithm and audience — same message, optimized format for every channel.",
    color: "#0ea5e9",
    gradient: "from-sky-500/20 to-sky-500/5",
  },
  {
    icon: Zap,
    title: "10+ Content Types",
    description:
      "Captions, hooks, CTAs, stories, carousels, threads, ad copy, email subjects, hashtag sets, and more.",
    color: "#7c3aed",
    gradient: "from-violet-500/20 to-violet-500/5",
  },
  {
    icon: RefreshCw,
    title: "Endless Variations",
    description:
      "Not happy with the first result? Generate unlimited variations with different tones, hooks, and angles instantly.",
    color: "#2563eb",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Hash,
    title: "Smart Hashtags",
    description:
      "AI-curated hashtag sets based on your industry, target audience, and platform — optimized for maximum reach.",
    color: "#059669",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: MessageSquare,
    title: "Tone Customization",
    description:
      "Choose from 12+ tones: professional, casual, witty, inspirational, educational, urgent, and more.",
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    icon: TrendingUp,
    title: "Trending Topics",
    description:
      "Stay relevant with AI suggestions based on your industry's latest trends, news, and viral content patterns.",
    color: "#db2777",
    gradient: "from-pink-500/20 to-pink-500/5",
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description:
      "All content is filtered for appropriateness. No offensive, misleading, or off-brand outputs — ever.",
    color: "#0ea5e9",
    gradient: "from-sky-500/20 to-sky-500/5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-5"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
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
              background: "rgba(124,58,237,0.1)",
              borderColor: "rgba(124,58,237,0.3)",
              color: "#a78bfa",
            }}
          >
            Everything You Need
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Features Built for{" "}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything a modern brand needs to dominate social media — in one
            AI-powered platform.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="glass rounded-2xl p-6 group cursor-default card-hover"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}30` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
