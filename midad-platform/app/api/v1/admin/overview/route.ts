import { NextResponse } from "next/server";
import { dashboardMetrics } from "@/lib/site-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      metrics: dashboardMetrics,
      summary: {
        activeVolunteers: 8760,
        pendingApplications: 214,
        totalInitiatives: 182,
      },
    },
    message: "تم جلب إحصاءات لوحة الإدارة بنجاح",
  });
}
