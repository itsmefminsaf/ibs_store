"use client";

import { useSearchParams } from "next/navigation";

const Category = () => {
  const param = useSearchParams();
  const category = param.get("category");

  return (
    <div className="flex items-center justify-between mt-3 px-1">
      <h3 className={`category ${category == "all" ? "active_category" : ""}`}>
        <a href="/shop/?category=all">All</a>
      </h3>
      <h3
        className={`category ${
          category == "stationary" ? "active_category" : ""
        }`}
      >
        <a href="/shop/?category=stationary">Stationary</a>
      </h3>
      <h3
        className={`category ${category == "plastic" ? "active_category" : ""}`}
      >
        <a href="/shop/?category=plastic">Plastic Items</a>
      </h3>
      <h3 className={`category ${category == "toys" ? "active_category" : ""}`}>
        <a href="shop/?category=toys">Toys</a>
      </h3>
    </div>
  );
};

export default Category;
