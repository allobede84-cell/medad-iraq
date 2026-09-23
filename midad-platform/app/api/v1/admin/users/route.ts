import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      {
        id: "user_1001",
        email: "admin@midad.org",
        firstName: "MIDAD",
        lastName: "Admin",
        status: "active",
      },
    ],
    message: "تم جلب المستخدمين بنجاح",
  });
}
