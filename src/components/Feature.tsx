import Image from "next/image";
import React from "react";

import { featureProp } from "@/libs/type";

const Feature = ({ img, title, description, dir = "left" }: featureProp) => {
  return (
    <div
      className={`flex items-center justify-around m-3 rounded-e-3xl p-4 from-transparent to-foreground/10 ${
        dir === "left"
          ? "flex-row bg-gradient-to-r"
          : "flex-row-reverse bg-gradient-to-l"
      }`}
    >
      <Image
        src={`/featureImage/${img}`}
        alt={title}
        className="h-14"
        width={256}
        height={128}
      />
      <div className={`${dir === "left" ? "text-right" : "text-left"}`}>
        <h3 className="text-xl">{title}</h3>
        <p className="opacity-75">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
