"use client";

import { useSearchParams } from "next/navigation";
import DailyAccounts from "./DailyAccounts";
import ManageProducts from "./ManageProducts";
import ManageBills from "./ManageBills";
import Image from "next/image";
import { shopName } from "@/libs/variables";
import NavOpenClose from "./NavOpenClose";

const AdminDashboard = () => {
  const param = useSearchParams();
  const tab = param.get("tab");
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
      {tab === "acc" ? (
        <>
          <h1 className="dashboard-title">Daily Accounts</h1>
          <DailyAccounts />
        </>
      ) : tab === "product" ? (
        <>
          <h1 className="dashboard-title">Manage Products</h1>
          <ManageProducts />
        </>
      ) : tab === "bills" ? (
        <>
          <h1 className="dashboard-title">Manage Bills</h1>
          <ManageBills />
        </>
      ) : (
        <>
          <h1 className="dashboard-title">Daily Accounts</h1>
          <DailyAccounts />
        </>
      )}
    </>
  );
};

export default AdminDashboard;
