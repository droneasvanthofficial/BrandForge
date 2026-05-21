import { NextRequest, NextResponse } from "next/server";

const demoVariations = [
  {
    content: "🚀 Ready to 10x your brand's reach without burning out?\n\nConsistency beats perfection every time.\n\n✅ Post 3x/week minimum\n✅ Use hooks that stop the scroll\n✅ End with a question to boost comments\n\nComment 'INFO' to learn more 👇",
    hashtags: ["#ContentMarketing", "#SocialMediaStrategy", "#BrandGrowth", "#AIMarketing"],
    hook: "🚀 Ready to 10x your brand's reach without burning out?",
    cta: "Comment 'INFO' to learn more 👇",
    emojis: ["🚀", "✅", "👇"],
  },
  {
    content: "Your competitors are posting 5x more content than you — and doing it in 30 minutes a day.\n\nThe secret? AI-powered content systems.\n\nStop watching others grow. Start your free trial today.",
    hashtags: ["#Entrepreneur", "#ContentCreation", "#MarketingTips", "#AITools"],
    hook: "Your competitors are posting 5x more content than you.",
    cta: "Start your free trial today.",
    emojis: ["•", "→"],
  },
  {
    content: "Unpopular opinion: You don't need better content ideas. You need a better content system.\n\n💡 The brands winning on social aren't more creative — they're more consistent.\n\nReady to build your system? Drop a 🔥 below.",
    hashtags: ["#MarketingStrategy", "#ContentSystem", "#BrandBuilding", "#SocialGrowth"],
    hook: "Unpopular opinion: You don't need better content ideas.",
    cta: "Drop a 🔥 below.",
    emojis: ["💡", "🔥"],
  },
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, industry, platform, contentType, tone } = body;

    if (!businessName || !industry) {
      return NextResponse.json({ error: "Business name and industry are required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const { GoogleGenerativeAI } = await import("@google/generative-ai");
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `You are an expert social media copywriter. Generate 3 unique ${contentType} variations for ${platform} for a ${industry} business called "${businessName}" with a ${tone} tone.

Format your response as a JSON array with 3 objects, each containing:
- content: the full post content
- hashtags: array of 4-5 relevant hashtags
- hook: the opening line
- cta: the call to action
- emojis: array of emojis used

Return only valid JSON, no markdown.`;

        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const variations = JSON.parse(jsonMatch[0]);
          return NextResponse.json({ variations, seoKeywords: [], bestPostingTime: "9:00 AM", engagementTips: [] });
        }
      } catch (aiError) {
        console.error("Gemini API error, falling back to demo:", aiError);
      }
    }

    // Fallback demo response
    return NextResponse.json({
      variations: demoVariations,
      seoKeywords: ["social media marketing", "brand growth", "content strategy"],
      bestPostingTime: "9:00 AM – 11:00 AM",
      engagementTips: [
        "Post consistently at the same time each day",
        "Respond to all comments within the first hour",
        "Use 5-7 hashtags maximum for best reach",
      ],
    });
  } catch (error) {
    console.error("Generate content error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
