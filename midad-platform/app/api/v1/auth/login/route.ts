import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body ?? {};

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "يرجى إدخال البريد الإلكتروني وكلمة المرور",
          errorCode: "VALIDATION_ERROR",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: "user_1001",
          email,
          role: "registered_user",
          token: "demo_jwt_token",
        },
      },
      message: "تم تسجيل الدخول بنجاح",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء تنفيذ العملية",
        errorCode: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 },
    );
  }
}
