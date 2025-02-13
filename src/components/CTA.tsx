"use client";

import { redirect } from "next/navigation";

const CTA = () => {
  return (
    <button
      onClick={() => {
        redirect("/shop?category=all");
      }}
      className="shadow-md active:scale-95 duration-500 text-xl mt-4 relative left-1/2 -translate-x-1/2 bg-foreground text-background rounded-xl text-nowrap p-3"
    >
      Start Shopping
    </button>
  );
};

export default CTA;
