"use client";

import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import Image from "next/image";
import { useState } from "react";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  setTimeout(() => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  }, 6000);

  return (
    <section className="w-full h-64 flex items-center justify-center p-3">
      <Image
        src={images[currentImageIndex].src}
        className="h-full rounded-lg"
        alt="iyoob book shop images"
      />
    </section>
  );
};

export default Carousel;
