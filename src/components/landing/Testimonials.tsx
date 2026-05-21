"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Social Media Manager",
    company: "TechStartup Co.",
    avatar: "SC",
    color: "#7c3aed",
    rating: 5,
    content:
      "BrandForge AI completely transformed our content workflow. We went from spending 3 hours a day on copy to 20 minutes. The quality is incredible — clients keep asking what agency we hired!",
  },
  {
    name: "Marcus Williams",
    role: "Founder & CEO",
    company: "FitLife Brand",
    avatar: "MW",
    color: "#2563eb",
    rating: 5,
    content:
      "I was skeptical about AI-generated content, but this blew me away. The tone customization is spot-on. Our Instagram engagement went up 340% in the first month after switching.",
  },
  {
    name: "Priya Sharma",
    role: "Digital Marketing Lead",
    company: "E-commerce Giants",
    avatar: "PS",
    color: "#db2777",
    rating: 5,
    content:
      "The brand kit feature is a game-changer. Every piece of content perfectly matches our brand voice. Managing 8 different brand accounts has never been easier.",
  },
  {
    name: "Jake Thompson",
    role: "Content Creator",
    company: "Self-employed",
    avatar: "JT",
    color: "#059669",
    rating: 5,
    content:
      "As a solo creator, I couldn't afford a copywriting team. BrandForge AI is like having a team of 5 writers. I post 3x more content and my audience grew from 2k to 28k followers.",
  },
  {
    name: "Lisa Park",
    role: "Agency Owner",
    company: "Spark Digital Agency",
    avatar: "LP",
    color: "#f59e0b",
    rating: 5,
    content:
      "We onboard new clients in 1 day now instead of 2 weeks. The Agency plan pays for itself in the first hour of use. Absolutely essential tool for any marketing agency.",
  },
  {
    name: "David Osei",
    role: "Brand Strategist",
    company: "Global Foods Corp",
    avatar: "DO",
    color: "#0ea5e9",
    rating: 5,
    content:
      "The AI understands nuanced brand voice better than most junior copywriters. We've saved over $4,000/month in content production costs since switching to BrandForge AI.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, #2563eb, transparent)" }}
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
            What Customers Say
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Loved by <span className="gradient-text">50,000+</span> Creators
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Real results from real customers. Join thousands of brands growing
            with BrandForge AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass rounded-2xl p-6 relative"
            >
              <Quote
                className="absolute top-4 right-4 w-8 h-8 opacity-10"
                style={{ color: t.color }}
              />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role} · {t.company}</div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">{t.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
