import { NextRequest, NextResponse } from "next/server";

function createVoiceEnvelopeWav(durationSec = 1.2, sampleRate = 22050): Buffer {
  const numSamples = Math.floor(durationSec * sampleRate);
  const buffer = Buffer.alloc(44 + numSamples * 2);

  // RIFF WAVE header
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + numSamples * 2, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16); // PCM chunk size
  buffer.writeUInt16LE(1, 20); // PCM format
  buffer.writeUInt16LE(1, 22); // Mono
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * 2, 28); // Byte rate
  buffer.writeUInt16LE(2, 32); // Block align
  buffer.writeUInt16LE(16, 34); // Bits per sample
  buffer.write("data", 36);
  buffer.writeUInt32LE(numSamples * 2, 40);

  // Gentle soft ambient voice-band modulation so EMI's 3D particle audio analyzer reacts smoothly
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const env =
      Math.sin((Math.PI * i) / numSamples) *
      (0.6 + 0.4 * Math.sin(2 * Math.PI * 3.5 * t));
    const sig =
      Math.sin(2 * Math.PI * 220 * t) * 0.08 +
      Math.sin(2 * Math.PI * 440 * t) * 0.04;
    const sample = Math.max(-1, Math.min(1, sig * env));
    buffer.writeInt16LE(Math.floor(sample * 32767), 44 + i * 2);
  }

  return buffer;
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const text = typeof body?.text === "string" ? body.text : "";
  const duration = Math.min(4.0, Math.max(0.8, text.length * 0.04));
  const wav = createVoiceEnvelopeWav(duration);
  return new NextResponse(wav, {
    status: 200,
    headers: {
      "Content-Type": "audio/wav",
      "Cache-Control": "no-store",
    },
  });
}
