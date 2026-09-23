import { NextResponse } from "next/server";
import { readInitiatives, writeInitiatives } from "@/lib/initiative-store";
import type { Initiative } from "@/lib/site-data";

export async function GET() {
  const initiatives = await readInitiatives();

  return NextResponse.json({
    success: true,
    data: initiatives,
    message: "تم جلب المبادرات الإدارية بنجاح",
  });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Omit<Initiative, "id">;

  if (!body.title?.trim() || !body.description?.trim() || !body.category?.trim()) {
    return NextResponse.json(
      {
        success: false,
        message: "العنوان والوصف والفئة مطلوبة",
        errorCode: "VALIDATION_ERROR",
      },
      { status: 400 },
    );
  }

  const initiatives = await readInitiatives();
  const created: Initiative = {
    ...body,
    id: Date.now(),
    volunteers: Number(body.volunteers) || 0,
    gallery: body.gallery?.length ? body.gallery : [body.image],
  };

  await writeInitiatives([created, ...initiatives]);

  return NextResponse.json(
    { success: true, data: created, message: "تمت إضافة المبادرة وحفظها بنجاح" },
    { status: 201 },
  );
}

export async function PUT(request: Request) {
  const body = (await request.json()) as Initiative;
  const initiatives = await readInitiatives();
  const index = initiatives.findIndex((item) => item.id === body.id);

  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "المبادرة غير موجودة", errorCode: "NOT_FOUND" },
      { status: 404 },
    );
  }

  initiatives[index] = {
    ...body,
    volunteers: Number(body.volunteers) || 0,
    gallery: body.gallery?.length ? body.gallery : [body.image],
  };
  await writeInitiatives(initiatives);

  return NextResponse.json({
    success: true,
    data: initiatives[index],
    message: "تم حفظ تعديلات المبادرة بنجاح",
  });
}

export async function DELETE(request: Request) {
  const { id } = (await request.json()) as { id?: number };
  const initiatives = await readInitiatives();
  const filtered = initiatives.filter((item) => item.id !== id);

  if (filtered.length === initiatives.length) {
    return NextResponse.json(
      { success: false, message: "المبادرة غير موجودة", errorCode: "NOT_FOUND" },
      { status: 404 },
    );
  }

  await writeInitiatives(filtered);
  return NextResponse.json({
    success: true,
    data: { id },
    message: "تم حذف المبادرة وحفظ التغيير",
  });
}
