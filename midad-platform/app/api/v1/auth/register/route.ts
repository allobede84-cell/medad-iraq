import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password } = body ?? {};

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "جميع الحقول مطلوبة",
          errorCode: "VALIDATION_ERROR",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          user: {
            id: "user_1001",
            firstName,
            lastName,
            email,
            role: "registered_user",
          },
        },
        message: "تم إنشاء الحساب بنجاح",
      },
      { status: 201 },
    );
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
