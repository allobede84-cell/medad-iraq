import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body ?? {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "جميع الحقول مطلوبة",
          errorCode: "VALIDATION_ERROR",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      data: { ticketId: "msg_1123" },
      message: "تم إرسال الرسالة بنجاح",
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
