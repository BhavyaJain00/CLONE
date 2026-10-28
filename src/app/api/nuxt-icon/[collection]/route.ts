import { NextResponse } from "next/server";
import lucideIcons from "@/data/lucide_icons.json";

export async function GET() {
  return NextResponse.json(lucideIcons);
}
