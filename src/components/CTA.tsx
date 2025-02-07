"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const CTA = () => {
  useEffect(() => {
    if (localStorage.getItem("visited")) {
      return redirect("/shop?category=all");
    }
  });

  const handleClick = () => {
    localStorage.setItem("visited", "true");
    return redirect("/shop?category=all");
  };

  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className="shadow-md active:scale-95 duration-500 text-xl mt-4 relative left-1/2 -translate-x-1/2 bg-foreground text-background rounded-xl text-nowrap p-3"
    >
      Start Shopping
    </button>
  );
};

export default CTA;
