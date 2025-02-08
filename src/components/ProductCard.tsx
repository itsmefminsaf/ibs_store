import eye from "@/assets/eye.svg";
import Image from "next/image";

import { productType } from "@/libs/type";

const ProductCard = ({ product }: { product: productType }) => {
  return (
    <div className="p-4 border shadow-top duration-500 shadow-slate-500 rounded-xl">
      <Image
        src={product.image}
        alt={product.title}
        loading="lazy"
        width={512}
        height={512}
      />
      <div className="grid grid-rows-[auto_auto] gap-1 grid-cols-[2fr_1fr]">
        <h2 className="col-span-2 font-bold p-1">{product.title}</h2>
        <h4
          className={`text-center text-white rounded-lg ${
            product.stockCount == 0 ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {product.stockCount == 0
            ? "Out of Stock"
            : `${product.stockCount} Available`}
        </h4>
        <button className="w-fit h-fit place-self-end bg-foreground text-background py-1 px-3 rounded-lg">
          <Image
            src={eye.src}
            alt="view"
            color="while"
            width={128}
            height={128}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
