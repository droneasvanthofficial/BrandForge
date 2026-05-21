"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/dashboard/Header";
import { Settings, User, Bell, Shield, Palette, Key, Check } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [profile, setProfile] = useState({ name: "Jane Demo", email: "jane@example.com", timezone: "UTC-5" });
  const [notifications, setNotifications] = useState({
    emailDigest: true,
    creditWarning: true,
    newFeatures: false,
    marketingEmails: false,
  });
  const [theme, setTheme] = useState("dark");

  const saveProfile = () => toast.success("Profile saved!");
  const saveNotifications = () => toast.success("Notification preferences saved!");

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <>
      <Header title="Settings" subtitle="Manage your account preferences" />
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-2xl mx-auto space-y-5">
          {/* Profile */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-gray-300 mb-5 flex items-center gap-2">
              <User className="w-4 h-4 text-violet-400" />
              Profile
            </h2>
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
              >
                JD
              </div>
              <div>
                <button
                  className="text-xs px-3 py-1.5 rounded-lg border border-white/15 text-gray-300 hover:text-white hover:border-white/30 transition-all"
                >
                  Change Avatar
                </button>
                <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 2MB</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="text-xs font-medium text-gray-400 mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-400 mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white outline-none"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-400 mb-1.5 block">Timezone</label>
                <select
                  value={profile.timezone}
                  onChange={(e) => setProfile((p) => ({ ...p, timezone: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm text-white outline-none appearance-none"
                  style={inputStyle}
                >
                  {["UTC-8", "UTC-7", "UTC-6", "UTC-5", "UTC-4", "UTC+0", "UTC+1", "UTC+5:30"].map((tz) => (
                    <option key={tz} value={tz} style={{ background: "#1a1a2e" }}>{tz}</option>
                  ))}
                </select>
              </div>
            </div>
            <button onClick={saveProfile} className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}>
              Save Profile
            </button>
          </motion.div>

          {/* Notifications */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-gray-300 mb-5 flex items-center gap-2">
              <Bell className="w-4 h-4 text-blue-400" />
              Notifications
            </h2>
            <div className="space-y-4">
              {[
                { key: "emailDigest", label: "Weekly Email Digest", desc: "Get a summary of your content performance every week" },
                { key: "creditWarning", label: "Low Credits Warning", desc: "Alert when credits drop below 20%" },
                { key: "newFeatures", label: "New Features & Updates", desc: "Be the first to know about new BrandForge features" },
                { key: "marketingEmails", label: "Marketing & Tips", desc: "Content marketing tips and success stories" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between py-1">
                  <div>
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                  <button
                    onClick={() => setNotifications((p) => ({ ...p, [item.key]: !p[item.key as keyof typeof p] }))}
                    className={`w-11 h-6 rounded-full transition-all duration-200 relative flex-shrink-0 ${
                      notifications[item.key as keyof typeof notifications] ? "bg-violet-600" : "bg-white/15"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-200 ${
                        notifications[item.key as keyof typeof notifications] ? "left-5.5" : "left-0.5"
                      }`}
                      style={{ left: notifications[item.key as keyof typeof notifications] ? "22px" : "2px" }}
                    />
                  </button>
                </div>
              ))}
            </div>
            <button onClick={saveNotifications} className="mt-5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}>
              Save Preferences
            </button>
          </motion.div>

          {/* Security */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-gray-300 mb-5 flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              Security
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => toast.info("Password reset email sent (demo)")}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all border border-white/8"
              >
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-gray-500" />
                  Change Password
                </div>
                <span className="text-xs text-gray-500">→</span>
              </button>
              <button
                onClick={() => toast.success("2FA enabled (demo)")}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all border border-white/8"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-500" />
                  Enable Two-Factor Authentication
                </div>
                <span className="text-xs text-green-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Recommended
                </span>
              </button>
            </div>
          </motion.div>

          {/* API Key */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="glass rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4 text-yellow-400" />
              API Key
            </h2>
            <div className="flex gap-2 mb-3">
              <div
                className="flex-1 px-3.5 py-2.5 rounded-xl text-xs font-mono text-gray-400 truncate"
                style={inputStyle}
              >
                bf_pro_••••••••••••••••••••••••••••
              </div>
              <button
                onClick={() => toast.success("API key copied!")}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/25 transition-all"
              >
                Copy
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Pro plan includes API access. Keep this key secret — it has full access to your account.
            </p>
          </motion.div>

          {/* Danger zone */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-2xl p-6 border border-red-500/20" style={{ background: "rgba(239,68,68,0.05)" }}>
            <h2 className="text-sm font-semibold text-red-400 mb-4">Danger Zone</h2>
            <div className="space-y-3">
              <button
                onClick={() => toast.error("All data cleared (demo only)")}
                className="text-xs text-gray-400 hover:text-red-400 transition-colors"
              >
                Clear all generated content
              </button>
              <br />
              <button
                onClick={() => toast.error("Account deletion not available in demo")}
                className="text-xs text-gray-400 hover:text-red-400 transition-colors"
              >
                Delete account permanently
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
