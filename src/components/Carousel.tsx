"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="relative p-3 w-screen aspect-video">
      <button
        className="carousel-arrow left-5"
        onClick={() => {
          currentIndex === 0
            ? setCurrentIndex(images.length - 1)
            : setCurrentIndex(currentIndex - 1);
        }}
      >
        <ArrowLeftIcon />
      </button>
      <Image
        src={`/carousel/${images[currentIndex]}`}
        width={512}
        height={512}
        alt="Iyoob Book Shop Images"
        className="rounded-lg"
      />
      <button
        className="carousel-arrow right-5"
        onClick={() => {
          currentIndex === images.length - 1
            ? setCurrentIndex(0)
            : setCurrentIndex(currentIndex + 1);
        }}
      >
        <ArrowRightIcon />
      </button>
      <div className="flex items-center justify-center gap-2 absolute bottom-5 w-fit p-2 bg-black/50 backdrop-blur-lg rounded-full left-1/2 -translate-x-1/2">
        {images.map((image, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
              }}
              className={`p-1 rounded-full bg-background duration-300 ${
                index === currentIndex ? "w-5" : "w-0"
              }`}
            ></button>
          );
        })}
      </div>
    </section>
  );
};

export default Carousel;
