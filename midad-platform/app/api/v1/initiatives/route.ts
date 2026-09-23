import { NextResponse } from "next/server";
import { readInitiatives } from "@/lib/initiative-store";

export async function GET() {
  const initiatives = await readInitiatives();

  return NextResponse.json({
    success: true,
    data: initiatives,
    message: "تم جلب المبادرات بنجاح",
  });
}
