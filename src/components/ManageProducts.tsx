"use client";

import { Plus } from "lucide-react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { productType } from "@/libs/type";

const ManageProducts = () => {
  const [products, setProducts] = useState<productType[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("/api/fetch-products", { method: "GET" })
        .then((res) => res.json())
        .then((result) => {
          setProducts(result.products);
        });
    };
    fetchProducts();
  }, []);

  return (
    <section className="grid grid-cols-2 p-3 gap-3">
      <a
        href="/admin/add-product"
        className="aspect-[2/3] rounded-xl bg-foreground text-background text-3xl p-2 flex flex-col items-center justify-evenly"
      >
        <Plus className="size-24" />
        <h3 className="text-center">Add new Product</h3>
      </a>
      {products?.map(
        ({ quantity, description, sells, _id, imageURL, price, title }) => {
          return (
            <ProductCard
              key={_id}
              _id={_id}
              quantity={quantity}
              description={description}
              imageURL={imageURL}
              price={price}
              sells={sells}
              title={title}
            />
          );
        }
      )}
    </section>
  );
};

export default ManageProducts;
