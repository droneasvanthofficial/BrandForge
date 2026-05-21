"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import { Palette, Plus, Check, X } from "lucide-react";
import { toast } from "sonner";

const defaultColors = ["#7c3aed", "#2563eb", "#db2777", "#059669", "#f59e0b", "#0ea5e9"];
const tones = ["Professional", "Casual", "Witty", "Inspirational", "Bold", "Empathetic", "Educational", "Urgency"];

export default function BrandPage() {
  const [brand, setBrand] = useState({
    name: "Acme Corp",
    industry: "SaaS",
    tagline: "Build faster, grow smarter",
    tone: "Professional",
    colors: ["#7c3aed", "#2563eb", "#f8f8f8"],
    fonts: ["Inter", "Playfair Display"],
    hashtags: "#SaaS #TechStartup #BuildInPublic #Growth",
    guidelines: "Always be helpful, never salesy. Focus on value and transformation. Use data and social proof.",
    targetAudience: "B2B founders, product managers, and startup teams",
  });

  const [newColor, setNewColor] = useState("");
  const [newHashtag, setNewHashtag] = useState("");

  const saveChanges = () => {
    toast.success("Brand Kit saved successfully!");
  };

  const removeColor = (c: string) => {
    setBrand((prev) => ({ ...prev, colors: prev.colors.filter((x) => x !== c) }));
  };

  const addColor = (c: string) => {
    if (c && !brand.colors.includes(c)) {
      setBrand((prev) => ({ ...prev, colors: [...prev.colors, c] }));
      setNewColor("");
    }
  };

  return (
    <>
      <Header title="Brand Kit" subtitle="Store your brand identity for consistent AI outputs" />
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-3xl mx-auto space-y-5">
          {/* Brand identity */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-gray-300 mb-5 flex items-center gap-2">
              <Palette className="w-4 h-4 text-pink-400" />
              Brand Identity
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Brand Name", field: "name", placeholder: "Your brand name" },
                { label: "Industry", field: "industry", placeholder: "e.g. SaaS, E-commerce" },
                { label: "Tagline", field: "tagline", placeholder: "Your brand tagline" },
                { label: "Target Audience", field: "targetAudience", placeholder: "Who are your customers?" },
              ].map(({ label, field, placeholder }) => (
                <div key={field}>
                  <label className="text-xs font-medium text-gray-400 mb-1.5 block">{label}</label>
                  <input
                    type="text"
                    value={brand[field as keyof typeof brand] as string}
                    onChange={(e) => setBrand((p) => ({ ...p, [field]: e.target.value }))}
                    placeholder={placeholder}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tone */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-gray-300 mb-4">Brand Voice / Tone</h2>
            <div className="flex flex-wrap gap-2">
              {tones.map((t) => (
                <button
                  key={t}
                  onClick={() => setBrand((p) => ({ ...p, tone: t }))}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${brand.tone === t ? "text-white" : "text-gray-400 hover:text-white border border-white/10 hover:border-white/20"}`}
                  style={brand.tone === t ? { background: "linear-gradient(135deg, #7c3aed, #2563eb)" } : {}}
                >
                  {t}
                  {brand.tone === t && <Check className="w-3 h-3 inline ml-1" />}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Colors */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-gray-300 mb-4">Brand Colors</h2>
            <div className="flex flex-wrap gap-3 mb-4">
              {brand.colors.map((c) => (
                <div key={c} className="relative group">
                  <div
                    className="w-10 h-10 rounded-xl border-2 border-white/20 cursor-pointer"
                    style={{ background: c }}
                  />
                  <button
                    onClick={() => removeColor(c)}
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 text-white hidden group-hover:flex items-center justify-center"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <div className="flex gap-2 flex-wrap">
                  {defaultColors.filter((c) => !brand.colors.includes(c)).map((c) => (
                    <button
                      key={c}
                      onClick={() => addColor(c)}
                      className="w-8 h-8 rounded-lg border border-white/10 opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center"
                      style={{ background: c }}
                    >
                      <Plus className="w-3 h-3 text-white" />
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={newColor || "#000000"}
                    onChange={(e) => setNewColor(e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer border-0 bg-transparent"
                  />
                  <button
                    onClick={() => addColor(newColor)}
                    className="text-xs text-violet-400 hover:text-violet-300"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hashtags & Guidelines */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-2xl p-6 space-y-4">
            <h2 className="text-sm font-semibold text-gray-300">Hashtags & Guidelines</h2>
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1.5 block">Default Hashtags</label>
              <input
                type="text"
                value={brand.hashtags}
                onChange={(e) => setBrand((p) => ({ ...p, hashtags: e.target.value }))}
                placeholder="#yourbrand #industry #niche"
                className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-400 mb-1.5 block">Brand Guidelines</label>
              <textarea
                value={brand.guidelines}
                onChange={(e) => setBrand((p) => ({ ...p, guidelines: e.target.value }))}
                placeholder="Describe your brand dos and don'ts, messaging pillars..."
                rows={4}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white placeholder-gray-500 outline-none resize-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
            </div>
          </motion.div>

          <button
            onClick={saveChanges}
            className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 20px rgba(124,58,237,0.2)" }}
          >
            Save Brand Kit
          </button>
        </div>
      </div>
    </>
  );
}
