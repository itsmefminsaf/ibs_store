import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (fileBuffer: Buffer) => {
  try {
    const base64Image = `data:image/png;base64,${fileBuffer.toString(
      "base64"
    )}`;

    const uploadedResponse = await cloudinary.uploader.upload(base64Image, {
      width: 512,
      height: 512,
      crop: "fill",
      format: "webp",
    });

    return uploadedResponse.secure_url;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Image upload failed");
  }
};

export default cloudinary;
