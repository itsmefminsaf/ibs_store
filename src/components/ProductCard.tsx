import type { productType } from "@/libs/type";
import Image from "next/image";

const ProductCard = ({ id, imageURL, title, count, price }: productType) => {
  return (
    <div className="text-xs bg-foreground/10 rounded-xl p-3">
      <Image
        src={imageURL}
        alt="Product picture"
        width={256}
        height={256}
        className="rounded-xl"
      />
      <div className="mt-1 grid gap-1 grid-cols-[auto_auto] grid-rows-[auto_auto] bg-foreground/20 rounded-xl py-1 px-2">
        <a href={`/product/${id}`} className="col-span-2 leading-4">
          {title}
        </a>
        <h4 className="text-center bg-foreground/30 rounded-xl py-1 px-2">
          {count} left
        </h4>
        <h4 className="text-center bg-foreground/30 rounded-xl py-1 px-2">
          Rs.{price}
        </h4>
      </div>
    </div>
  );
};

export default ProductCard;
