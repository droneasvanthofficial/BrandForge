import { NextResponse } from "next/server";

export async function GET() {
  const analytics = {
    totalGenerations: 847,
    savedPosts: 134,
    creditsUsed: 320,
    creditsRemaining: 180,
    topPlatforms: [
      { platform: "Instagram", count: 284 },
      { platform: "LinkedIn", count: 198 },
      { platform: "Twitter", count: 156 },
      { platform: "Facebook", count: 112 },
      { platform: "TikTok", count: 97 },
    ],
    weeklyActivity: [
      { day: "Mon", generations: 24 },
      { day: "Tue", generations: 38 },
      { day: "Wed", generations: 12 },
      { day: "Thu", generations: 56 },
      { day: "Fri", generations: 45 },
      { day: "Sat", generations: 30 },
      { day: "Sun", generations: 18 },
    ],
    monthlyTrend: [
      { month: "Jan", generations: 120 },
      { month: "Feb", generations: 189 },
      { month: "Mar", generations: 234 },
      { month: "Apr", generations: 310 },
      { month: "May", generations: 280 },
      { month: "Jun", generations: 390 },
      { month: "Jul", generations: 420 },
    ],
  };

  return NextResponse.json(analytics);
}
