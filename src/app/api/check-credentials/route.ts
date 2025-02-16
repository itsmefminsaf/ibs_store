import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { adminName, pwd } = await req.json();

  const realAdminName = process.env.ADMIN_NAME;
  const realPWD = process.env.PASSWORD;

  if (adminName === realAdminName && pwd === realPWD) {
    return NextResponse.json({ authenticated: true, adminName, pwd });
  } else {
    return NextResponse.json({ authenticated: false });
  }
};
