import connectDB from "@/libs/mongoDB";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const products = await productModel.find({});
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
