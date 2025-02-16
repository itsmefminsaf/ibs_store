import { uploadImage } from "@/libs/cloudinary";
import connectDB from "@/libs/mongoDB";
import productModel from "@/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const formData = await req.formData();
    const image = formData.get("image") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const quantity = formData.get("quantity") as string;
    const price = formData.get("price") as string;

    const imageBuffer = Buffer.from(await image.arrayBuffer());

    const imageURL = await uploadImage(imageBuffer);
    console.log(imageURL);

    const newProduct = await new productModel({
      title,
      description,
      quantity,
      price,
      imageURL,
    });

    await newProduct.save();

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
