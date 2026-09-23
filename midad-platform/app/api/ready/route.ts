import { NextResponse } from "next/server";
import { checkDatabaseStatus } from "@/lib/prisma";

export async function GET() {
  const status = await checkDatabaseStatus();

  if (!status.ready) {
    return NextResponse.json(
      {
        success: false,
        message: status.message,
        errorCode: status.errorCode,
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    success: true,
    data: { status: "ready" },
    message: "قاعدة البيانات جاهزة للاتصال عند تهيئتها فعليًا",
  });
}
