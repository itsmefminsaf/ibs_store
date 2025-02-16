import type { productType } from "@/libs/type";
import Image from "next/image";

const ProductCard = ({
  _id,
  imageURL,
  title,
  quantity,
  price,
  sells,
}: productType) => {
  return (
    <a
      href={`/product/${_id}`}
      className="relative aspect-[2/3] bg-black/5 rounded-xl p-2 grid gap-2"
    >
      <h4 className="right-1 top-1 text-sm px-2 bg-red-600 text-background rounded-full absolute">
        {sells}sold
      </h4>
      <Image
        src={imageURL}
        alt="Product picture"
        width={256}
        height={256}
        className="rounded-xl"
      />
      <div className="h-20 grid grid-cols-[auto_auto] grid-rows-[3rem_1.5rem] gap-x-1 bg-black/10 font-semibold rounded-xl py-1 px-2">
        <h3 className="text-sm col-span-2 leading-4">{title}</h3>
        <h4 className="text-[.65rem] text-center bg-red-600/20 text-red-600 rounded-xl py-1 px-2">
          {quantity} left
        </h4>
        <h4 className="text-xs text-center bg-blue-600/20 text-blue-600 rounded-xl py-1 px-2">
          Rs.{price}
        </h4>
      </div>
    </a>
  );
};

export default ProductCard;
