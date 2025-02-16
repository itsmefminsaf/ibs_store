import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageURL: String,
  quantity: Number,
  price: Number,
  sells: Number,
});

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
