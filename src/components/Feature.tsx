import Image from "next/image";
import React from "react";

import { FeatureProps } from "@/libs/type";

const Feature = ({ img, title, description, dir = "left" }: FeatureProps) => {
  return (
    <div
      className={`flex items-center justify-around m-3 rounded-e-3xl p-4 bg-gradient-to-r from-transparent to-foreground/10 ${
        dir === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <Image src={img} alt={title} className="h-14" />
      <div className={`${dir === "left" ? "text-right" : "text-left"}`}>
        <h3 className="text-xl">{title}</h3>
        <p className="opacity-75">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
