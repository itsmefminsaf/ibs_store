import { Pickaxe, Wrench } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex items-center justify-center gap-10 flex-col h-[75vh]">
      <div className="relative">
        <Pickaxe className="absolute -left-10 -top-5 animate-work origin-bottom size-14" />
        <Image
          src="/logo.png"
          alt="logo"
          width={512}
          height={512}
          className="w-64"
        />
        <Wrench className="absolute animate-work right-4 origin-top-right -scale-x-100 size-16 bottom-2" />
      </div>
      <h1 className="text-3xl font-bold">This site is being built...</h1>
    </main>
  );
};

export default page;
