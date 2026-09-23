import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, area, availability } = body ?? {};

    if (!fullName || !email || !area || !availability) {
      return NextResponse.json(
        {
          success: false,
          message: "يرجى تعبئة الحقول الأساسية لإرسال الطلب",
          errorCode: "VALIDATION_ERROR",
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          applicationId: "vol_2048",
          status: "pending",
        },
        message: "تم إرسال طلب التطوع بنجاح",
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
