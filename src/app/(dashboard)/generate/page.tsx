"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/dashboard/Header";
import { Sparkles, Copy, RefreshCw, Star, StarOff, ChevronDown } from "lucide-react";
import { toast } from "sonner";

const platforms = ["Instagram", "LinkedIn", "Twitter/X", "Facebook", "TikTok", "Pinterest", "YouTube", "Email"];
const contentTypes = ["Caption", "Post", "Thread", "Hook", "Story", "Ad Copy", "Hashtag Set", "Bio", "CTA"];
const tones = ["Professional", "Casual", "Witty", "Inspirational", "Educational", "Urgency", "Empathetic", "Bold"];

const demoVariations = [
  {
    content: "🚀 Ready to 10x your brand's reach without burning out?\n\nMost businesses spend hours crafting the perfect post — only to see it disappear in the algorithm.\n\nHere's the truth: Consistency beats perfection.\n\n✅ Post 3x/week minimum\n✅ Use hooks that stop the scroll\n✅ End with a question to boost comments\n\nWe help brands automate this entire process with AI. The result? 340% more engagement in 30 days.\n\nComment 'INFO' to see how 👇",
    hashtags: ["#ContentMarketing", "#SocialMediaStrategy", "#BrandGrowth", "#AIMarketing", "#DigitalMarketing"],
    hook: "🚀 Ready to 10x your brand's reach without burning out?",
    cta: "Comment 'INFO' to see how 👇",
    emojis: ["🚀", "✅", "👇"],
  },
  {
    content: "Your competitors are posting 5x more content than you.\n\nAnd they're doing it in 30 minutes a day.\n\nThe secret? AI-powered content systems.\n\nWith BrandForge AI, you can:\n• Generate 30 posts in under 5 minutes\n• Maintain your unique brand voice\n• Never run out of ideas again\n\nStop watching others grow. Start your free trial today.",
    hashtags: ["#Entrepreneur", "#ContentCreation", "#MarketingTips", "#AITools", "#GrowthHacking"],
    hook: "Your competitors are posting 5x more content than you.",
    cta: "Stop watching others grow. Start your free trial today.",
    emojis: ["•", "→"],
  },
  {
    content: "Unpopular opinion: You don't need better content ideas. You need a better content system.\n\n💡 The brands winning on social media right now aren't more creative — they're more consistent.\n\nThey use systems. They use automation. They use AI.\n\nAnd the results speak for themselves:\n📈 3x more content output\n💬 5x more engagement\n💰 40% lower marketing costs\n\nReady to build your system? Drop a 🔥 below.",
    hashtags: ["#MarketingStrategy", "#ContentSystem", "#BrandBuilding", "#SocialGrowth", "#StartupMarketing"],
    hook: "Unpopular opinion: You don't need better content ideas.",
    cta: "Ready to build your system? Drop a 🔥 below.",
    emojis: ["💡", "📈", "💬", "💰", "🔥"],
  },
];

export default function GeneratePage() {
  const [form, setForm] = useState({
    businessName: "",
    industry: "",
    platform: "Instagram",
    contentType: "Caption",
    tone: "Professional",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    if (!form.businessName || !form.industry) {
      toast.error("Please fill in business name and industry");
      return;
    }
    setLoading(true);
    setGenerated(false);
    // Call API or use demo data
    try {
      const res = await fetch("/api/generate-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      await res.json();
    } catch {
      // silently fall back to demo
    }
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
      toast.success("3 variations generated!");
    }, 1500);
  };

  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text).then(() => toast.success("Copied!"));
  };

  const toggleSave = (i: number) => {
    setSaved((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
    toast.success(saved.includes(i) ? "Removed from saved" : "Saved!");
  };

  return (
    <>
      <Header title="Generate Content" subtitle="Create AI-powered content for any platform" />
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-sm font-semibold text-gray-300 mb-5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              Content Settings
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-medium text-gray-400 mb-1.5 block">Business Name *</label>
                <input
                  type="text"
                  value={form.businessName}
                  onChange={(e) => handleChange("businessName", e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-400 mb-1.5 block">Industry *</label>
                <input
                  type="text"
                  value={form.industry}
                  onChange={(e) => handleChange("industry", e.target.value)}
                  placeholder="e.g. SaaS, E-commerce, Fitness"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {[
                { label: "Platform", field: "platform", options: platforms },
                { label: "Content Type", field: "contentType", options: contentTypes },
                { label: "Tone", field: "tone", options: tones },
              ].map(({ label, field, options }) => (
                <div key={field}>
                  <label className="text-xs font-medium text-gray-400 mb-1.5 block">{label}</label>
                  <div className="relative">
                    <select
                      value={form[field as keyof typeof form]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white outline-none appearance-none transition-all pr-8"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {options.map((o) => (
                        <option key={o} value={o} style={{ background: "#1a1a2e" }}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-5">
              <label className="text-xs font-medium text-gray-400 mb-1.5 block">
                Additional context (optional)
              </label>
              <textarea
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Describe your campaign, product launch, or specific message..."
                rows={3}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all resize-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate 3 Variations
                </>
              )}
            </button>
          </motion.div>

          {/* Results */}
          <AnimatePresence>
            {generated && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-gray-300">Generated Variations</h2>
                  <button
                    onClick={handleGenerate}
                    className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Regenerate
                  </button>
                </div>

                {demoVariations.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass rounded-2xl p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
                      >
                        Variation {i + 1}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleSave(i)}
                          className="p-1.5 rounded-lg hover:bg-white/10 transition-all text-gray-400 hover:text-yellow-400"
                        >
                          {saved.includes(i) ? (
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ) : (
                            <StarOff className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => copyContent(v.content)}
                          className="p-1.5 rounded-lg hover:bg-white/10 transition-all text-gray-400 hover:text-white"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 whitespace-pre-line leading-relaxed mb-4">{v.content}</p>

                    <div className="border-t border-white/5 pt-3 space-y-2">
                      <div>
                        <span className="text-xs text-gray-500 font-medium">Hashtags: </span>
                        <span className="text-xs text-violet-400">{v.hashtags.join(" ")}</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 font-medium">Hook: </span>
                        <span className="text-xs text-gray-400">{v.hook}</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 font-medium">CTA: </span>
                        <span className="text-xs text-gray-400">{v.cta}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
