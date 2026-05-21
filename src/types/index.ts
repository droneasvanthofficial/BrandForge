export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: "free" | "pro" | "agency";
  credits: number;
  createdAt: string;
}

export interface GeneratedContent {
  id: string;
  userId: string;
  platform: string;
  contentType: string;
  tone: string;
  businessName: string;
  industry: string;
  content: string;
  hashtags: string[];
  hooks: string[];
  cta: string;
  createdAt: string;
  saved: boolean;
}

export interface BrandKit {
  id: string;
  userId: string;
  name: string;
  colors: string[];
  fonts: string[];
  logo?: string;
  tone: string;
  hashtags: string[];
  guidelines?: string;
}

export interface ContentCalendarItem {
  id: string;
  userId: string;
  title: string;
  content: string;
  platform: string;
  scheduledDate: string;
  status: "draft" | "scheduled" | "published";
}

export interface AnalyticsData {
  totalGenerations: number;
  savedPosts: number;
  creditsUsed: number;
  creditsRemaining: number;
  topPlatforms: { platform: string; count: number }[];
  weeklyActivity: { day: string; generations: number }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  yearlyPrice: number;
  features: string[];
  credits: number;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ContentVariation {
  content: string;
  hashtags: string[];
  hook: string;
  cta: string;
  emojis: string[];
}

export interface GenerateContentResponse {
  variations: ContentVariation[];
  seoKeywords: string[];
  bestPostingTime: string;
  engagementTips: string[];
}
