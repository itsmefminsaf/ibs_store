import {
  features,
  shopAddress,
  shopDescription,
  shopName,
} from "@/libs/variables";

import Feature from "@/components/Feature";
import CTA from "@/components/CTA";

import Image from "next/image";

const Home = () => {
  return (
    <main>
      <header className="text-right grid grid-cols-[auto_auto] grid-rows-[auto_auto] p-4 shadow-md rounded-b-3xl">
        <div className="row-span-2 h-20 aspect-square relative">
          <Image src="/logo.png" alt="Shop logo" fill />
        </div>
        <h1 className="text-2xl font-extrabold uppercase">{shopName}</h1>
        <h4>{shopAddress}</h4>
      </header>
      <section className="relative p-3 w-screen aspect-video">
        <Image
          src={"/carousel/1.jpg"}
          width={512}
          height={512}
          alt="Iyoob Book Shop"
          className="rounded-lg"
        />
      </section>
      <section className="text-[.8rem] p-4 text-justify">
        <h3 className="font-bold text-xl text-center">Welcome to {shopName}</h3>
        <p>{shopDescription}</p>
        <CTA />
      </section>
      <section>
        <h2 className="text-2xl font-bold m-2">Why {shopName}?</h2>
        {features.map((feature, index) => {
          return (
            <Feature
              key={index}
              {...feature}
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
