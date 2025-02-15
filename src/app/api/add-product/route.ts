import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const quantity = formData.get("quantity") as string;
    const price = formData.get("price") as string;
    console.log(image.name);
    console.log(title);
    console.log(description);
    console.log(quantity);
    console.log(price);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
};
