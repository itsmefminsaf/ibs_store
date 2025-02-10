import logo from "@/assets/img/ibs_logo.png";
import carousel from "@/assets/img/carousel_1.jpg";

import img1 from "@/assets/img/offer.png";
import img2 from "@/assets/img/free_delivery.png";
import img3 from "@/assets/img/voucher.png";
import { features, storeDescription } from "@/libs/variables";

import Feature from "@/components/Feature";
import CTA from "@/components/CTA";

import Image from "next/image";

const featureImages = [img1.src, img2.src, img3.src, img3.src];

const Home = () => {
  return (
    <main>
      <header className="text-right grid grid-cols-[auto_auto] grid-rows-[auto_auto] p-4 shadow-md rounded-b-3xl">
        <div className="row-span-2 h-20 aspect-square relative">
          <Image src={logo.src} alt="IBS logo" fill />
        </div>
        <h1 className="text-2xl font-extrabold">IYOOB BOOK SHOP</h1>
        <h4>Main street, Kalpitiya</h4>
      </header>
      <section className="relative p-3 w-screen aspect-video">
        <Image
          src={carousel.src}
          blurDataURL={carousel.blurDataURL}
          width={512}
          height={512}
          alt="Iyoob Book Shop"
          className="rounded-lg"
        />
      </section>
      <section className="text-[.8rem] p-4 text-justify">
        <h3 className="font-bold text-xl text-center">
          Welcome to Iyoob Book Shop
        </h3>
        <p>{storeDescription}</p>
        <CTA />
      </section>
      <section>
        <h2 className="text-2xl font-bold m-2">Why Iyoob Book Shop?</h2>
        {features.map((feature, index) => {
          return (
            <Feature
              key={index}
              {...feature}
              img={featureImages[index]}
              dir={index % 2 == 0 ? "right" : "left"}
            />
          );
        })}
      </section>
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center">No more to scroll...</h2>
        <CTA />
      </div>
    </main>
  );
};

export default Home;
