import { NextResponse } from "next/server";
import { articles } from "@/lib/site-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: articles,
    message: "تم جلب المقالات بنجاح",
  });
}
