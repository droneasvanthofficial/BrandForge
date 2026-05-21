"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import { Image as ImageIcon, Sparkles, Copy, ChevronDown } from "lucide-react";
import { toast } from "sonner";

const styles = ["Photorealistic", "Illustration", "3D Render", "Minimalist", "Cinematic", "Flat Design", "Watercolor", "Neon Glow"];
const ratios = ["1:1 (Square)", "4:5 (Portrait)", "16:9 (Landscape)", "9:16 (Vertical/Stories)", "1.91:1 (OG Image)"];

const demoPrompts = [
  {
    title: "Hero Product Shot",
    prompt: "A sleek, minimalist product photo of a smartphone app interface on a premium iPhone, dark glossy background with soft purple and blue gradient bokeh lighting, ultra-realistic 8K photography, studio lighting, high contrast, commercial photography style",
    negative: "blur, distortion, watermark, text overlay, low quality, JPEG artifacts",
    tags: ["Product", "Commercial", "Dark Theme"],
  },
  {
    title: "Brand Lifestyle Shot",
    prompt: "Young professional working on a laptop in a modern co-working space, warm ambient lighting, shallow depth of field, authentic lifestyle photography, motivated and focused expression, soft natural light from large windows, film grain texture",
    negative: "stock photo look, generic, posed, artificial, harsh lighting",
    tags: ["Lifestyle", "Authentic", "Workspace"],
  },
  {
    title: "Social Media Graphic",
    prompt: "Abstract tech background with flowing glowing purple and blue geometric shapes, futuristic digital art, perfect for social media posts, dark background, neon accents, cyberpunk aesthetic, high contrast, vector-style illustration",
    negative: "busy, cluttered, text, watermarks, low resolution",
    tags: ["Abstract", "Digital", "Social Media"],
  },
];

export default function ImagesPage() {
  const [form, setForm] = useState({
    businessName: "",
    industry: "",
    style: "Photorealistic",
    ratio: "1:1 (Square)",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (!form.businessName || !form.industry) {
      toast.error("Please fill in business name and industry");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
      toast.success("3 image prompts generated!");
    }, 1200);
  };

  const copyPrompt = (text: string) => {
    navigator.clipboard.writeText(text).then(() => toast.success("Prompt copied!"));
  };

  return (
    <>
      <Header title="AI Image Prompts" subtitle="Generate optimized prompts for DALL-E, Midjourney & more" />
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-sm font-semibold text-gray-300 mb-5 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-blue-400" />
              Prompt Settings
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs font-medium text-gray-400 mb-1.5 block">Business Name *</label>
                <input
                  type="text"
                  value={form.businessName}
                  onChange={(e) => setForm((p) => ({ ...p, businessName: e.target.value }))}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-400 mb-1.5 block">Industry *</label>
                <input
                  type="text"
                  value={form.industry}
                  onChange={(e) => setForm((p) => ({ ...p, industry: e.target.value }))}
                  placeholder="e.g. SaaS, Fashion, Food"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { label: "Image Style", field: "style", options: styles },
                { label: "Aspect Ratio", field: "ratio", options: ratios },
              ].map(({ label, field, options }) => (
                <div key={field}>
                  <label className="text-xs font-medium text-gray-400 mb-1.5 block">{label}</label>
                  <div className="relative">
                    <select
                      value={form[field as keyof typeof form]}
                      onChange={(e) => setForm((p) => ({ ...p, [field]: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white outline-none appearance-none pr-8"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {options.map((o) => (
                        <option key={o} value={o} style={{ background: "#1a1a2e" }}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-5">
              <label className="text-xs font-medium text-gray-400 mb-1.5 block">Describe what you need</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
                placeholder="e.g. Hero image for Instagram featuring our new product launch..."
                rows={3}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none resize-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white disabled:opacity-60"
              style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)", boxShadow: "0 0 20px rgba(37,99,235,0.3)" }}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate Image Prompts
                </>
              )}
            </button>
          </motion.div>

          {generated && (
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-300">Generated Prompts</h2>
              {demoPrompts.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white">{p.title}</span>
                    <button
                      onClick={() => copyPrompt(p.prompt)}
                      className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      Copy Prompt
                    </button>
                  </div>
                  <div
                    className="rounded-xl p-3.5 mb-3 text-sm text-gray-300 leading-relaxed"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {p.prompt}
                  </div>
                  <div className="mb-3">
                    <span className="text-xs text-gray-500 font-medium">Negative prompt: </span>
                    <span className="text-xs text-red-400/70">{p.negative}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(37,99,235,0.15)", color: "#60a5fa" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
