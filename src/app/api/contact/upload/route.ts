import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const name = body?.name || "attachment.bin";
  const leadId = `lead-${Date.now()}`;
  return NextResponse.json({
    leadId,
    path: `/uploads/${name}`,
    url: "/api/contact/upload",
  });
}

export async function PUT() {
  return NextResponse.json({ ok: true });
}
