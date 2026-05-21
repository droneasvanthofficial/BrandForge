import { NextRequest, NextResponse } from "next/server";

const demoPrompts = [
  {
    title: "Hero Product Shot",
    prompt: "A sleek, minimalist product photo on a premium dark background with soft purple and blue gradient bokeh lighting, ultra-realistic 8K photography, studio lighting, high contrast, commercial photography style",
    negative: "blur, distortion, watermark, text overlay, low quality",
    tags: ["Product", "Commercial", "Dark Theme"],
    style: "Photorealistic",
  },
  {
    title: "Brand Lifestyle Shot",
    prompt: "Young professional in a modern co-working space, warm ambient lighting, shallow depth of field, authentic lifestyle photography, motivated expression, soft natural light from large windows, film grain texture",
    negative: "stock photo look, generic, posed, artificial lighting",
    tags: ["Lifestyle", "Authentic", "Workspace"],
    style: "Cinematic",
  },
  {
    title: "Social Media Graphic",
    prompt: "Abstract tech background with flowing glowing geometric shapes in purple and blue, futuristic digital art, dark background, neon accents, high contrast, vector-style illustration",
    negative: "busy, cluttered, text, watermarks, low resolution",
    tags: ["Abstract", "Digital", "Social Media"],
    style: "Illustration",
  },
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, industry, style, description } = body;

    if (!businessName || !industry) {
      return NextResponse.json({ error: "Business name and industry are required" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const { GoogleGenerativeAI } = await import("@google/generative-ai");
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `You are an expert AI image prompt engineer. Generate 3 detailed image prompts for a ${industry} business called "${businessName}" in ${style || "photorealistic"} style.
${description ? `Context: ${description}` : ""}

Format as JSON array with 3 objects, each containing:
- title: descriptive title
- prompt: detailed image prompt (50-80 words)
- negative: negative prompt to exclude unwanted elements
- tags: array of 2-3 style tags

Return only valid JSON, no markdown.`;

        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          const prompts = JSON.parse(jsonMatch[0]);
          return NextResponse.json({ prompts });
        }
      } catch (aiError) {
        console.error("Gemini API error, falling back to demo:", aiError);
      }
    }

    return NextResponse.json({ prompts: demoPrompts });
  } catch (error) {
    console.error("Generate image error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
