import { NextRequest, NextResponse } from "next/server";

const KNOWLEDGE_RULES: Array<{ match: RegExp; reply: () => string }> = [
  {
    match: /\b(bye|goodbye|close|exit|stop|end)\b/i,
    reply: () => "Talk soon! [[EXIT]]",
  },
  {
    match: /\b(hi|hello|hey|yo)\b/i,
    reply: () =>
      "Hey, I'm EMI! Welcome to Flux Edit Portfolio by Sahil Lunia. Ask me about Sahil's 5+ years of video editing experience, tools, or projects!",
  },
  {
    match: /\b(sahil|founder|owner|editor|who are you|about you|experience|years)\b/i,
    reply: () =>
      "Sahil Lunia is a passionate Video Editor with 5+ years of professional experience, 90+ completed projects, and worldwide clients — refining stories into impactful and engaging masterpieces. [[NAVIGATE:page:about]]",
  },
  {
    match: /\b(services?|what do you do|offers?|specialt(?:y|ies)|capabilities|video|edit|vfx|reels)\b/i,
    reply: () =>
      "Flux Edit offers creative & cinematic editing, professional VFX & motion graphics, social media–ready content (Reels, Shorts, TikTok), YouTube videos, short films, ads, and music videos. [[NAVIGATE:page:projects]]",
  },
  {
    match: /\b(portfolios?|projects?|works?|case stud(?:y|ies)|show (?:me )?(?:your )?work)\b/i,
    reply: () =>
      "With 90+ completed projects across Recent Videos, Movie Edits, Motion Graphics, Demos, and Story Telling, here is our work showcase! [[NAVIGATE:page:projects]]",
  },
  {
    match: /\b(tools?|software|stack|premiere|after effects|photoshop|capcut)\b/i,
    reply: () =>
      "Sahil uses Premiere Pro for editing, After Effects for VFX & motion graphics, Photoshop for design, CapCut for fast social cuts, and ChatGPT as an AI assistant.",
  },
  {
    match: /\b(contacts?|emails?|calls?|book|reach|talk to|get in touch|whatsapp|instagram|gmail)\b/i,
    reply: () =>
      "Reach Sahil Lunia at sahillunia2006@gmail.com, on WhatsApp (+91 6377239386 — DM only), on Instagram (@flux__edit), or via the contact form! [[NAVIGATE:page:contact]]",
  },
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const history: Array<{ role: string; content: string }> =
      body?.history || [];
    const lastUser =
      [...history].reverse().find((m) => m.role === "user")?.content || "";

    for (const rule of KNOWLEDGE_RULES) {
      if (rule.match.test(lastUser)) {
        return NextResponse.json({
          text: rule.reply(),
          meta: {},
        });
      }
    }

    return NextResponse.json({
      text: "Flux Edit by Sahil Lunia crafts video edits that don't just impress the eyes, but connect with emotions — 5+ years of experience and 90+ completed projects. Want to see the work or get in touch? [[NAVIGATE:page:projects]]",
      meta: {},
    });
  } catch {
    return NextResponse.json({
      text: "Hey! Ask me about Sahil Lunia (Flux Edit), our video editing services, tools, or how to get in touch.",
      meta: {},
    });
  }
}
