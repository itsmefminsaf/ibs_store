"use client";

import { useSearchParams } from "next/navigation";
import DailyAccounts from "./DailyAccounts";
import ManageProducts from "./ManageProducts";
import ManageBills from "./ManageBills";

const AdminDashboard = () => {
  const param = useSearchParams();
  const tab = param.get("tab");
  return (
    <>
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
