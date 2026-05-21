import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "BrandForge AI – Generate Viral Social Media Content with AI",
  description:
    "Create Instagram posts, captions, hashtags, reels, and marketing campaigns in seconds using AI. The most powerful social media content generator for businesses and creators.",
  keywords:
    "AI content generator, social media, Instagram, LinkedIn, Twitter, marketing, brand",
  openGraph: {
    title: "BrandForge AI – Generate Viral Social Media Content with AI",
    description:
      "Create Instagram posts, captions, hashtags, reels, and marketing campaigns in seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster position="top-right" theme="dark" richColors />
      </body>
    </html>
  );
}
