import { shopName } from "@/libs/variables";
import NavOpenClose from "@/components/NavOpenClose";
import Image from "next/image";
import React from "react";
import AdminDashboard from "@/components/AdminDashboard";

const page = () => {
  return (
    <>
      <header className="grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto] p-3">
        <Image
          src="/logo.png"
          alt="logo"
          width={512}
          height={512}
          className="w-20 h-20 col-start-1 row-start-1 col-end-2 row-end-3"
        />
        <h1 className="col-start-2 row-start-1 col-end-3 row-end-2 text-3xl font-bold">
          Dashboard
        </h1>
        <h3 className="col-start-2 row-start-2 col-end-3 row-end-3 text-xl">
          {shopName}
        </h3>
        <NavOpenClose />
      </header>
      <AdminDashboard />
    </>
  );
};

export default page;
