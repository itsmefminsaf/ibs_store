"use client";

import { ArrowLeftIcon, Upload } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

const AddProductPage = () => {
  const [image, setImage] = useState<File>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image as Blob);
    formData.append("title", title);
    formData.append("quantity", quantity);
    formData.append("price", price);
    formData.append("description", description);

    try {
      const res = await fetch("/api/add-product", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        alert("Product added successfully! Keep adding products..");
      } else {
        alert("Failed to add product! Try again");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <header className="flex items-center justify-between p-3">
        <button
          onClick={() => {
            history.back();
          }}
          className="flex flex-col items-center justify-center bg-foreground/20 rounded-xl p-2"
        >
          <ArrowLeftIcon />
          <h4>Products</h4>
        </button>
        <h1 className="font-extrabold text-3xl">Add new Product</h1>
      </header>
      <form
        className="grid grid-cols-2 grid-rows-[auto_auto_auto_auto] gap-2 p-2 mt-10"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="file-upload"
          className="relative place-self-center col-span-2 size-60 flex flex-col items-center justify-center gap-3 bg-foreground/20 p-3 rounded-xl"
        >
          {image ? (
            <Image
              alt="product image preview"
              src={URL.createObjectURL(image)}
              fill
              className="rounded-xl"
            />
          ) : (
            <>
              <Upload />
              <h3>Select Product picture</h3>
            </>
          )}
        </label>
        <input
          type="file"
          accept="image/*"
          id="file-upload"
          className="hidden"
          onChange={(e) => {
            setImage(e.target.files?.[0]);
          }}
          required
        />
        <input
          type="text"
          placeholder="Enter the product title"
          className="add-product-input col-span-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          maxLength={35}
          required
        />
        <textarea
          placeholder="Enter the product description"
          className="add-product-input col-span-2 h-32 text-wrap overflow-scroll"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />
        <input
          type="number"
          placeholder="Product Quantity"
          className="add-product-input"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          required
        />
        <input
          type="number"
          placeholder="Product Price"
          className="add-product-input"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="col-span-2 bg-foreground text-background p-4 w-fit rounded-xl place-self-center mt-10"
        >
          Add Product
        </button>
      </form>
    </>
  );
};

export default AddProductPage;
