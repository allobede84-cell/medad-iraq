import { NextResponse } from "next/server";
import { events } from "@/lib/site-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: events,
    message: "تم جلب الفعاليات بنجاح",
  });
}
