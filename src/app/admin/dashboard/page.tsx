"use client";

import AdminDashboard from "@/components/AdminDashboard";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const AdminDashboardPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const adminName = localStorage.getItem("adminName");
    const pwd = localStorage.getItem("pwd");

    if (!pwd || !adminName) {
      setIsAuthenticated(false);
      setLoading(false);
    }

    fetch("/api/check-credentials", {
      method: "POST",
      body: JSON.stringify({ adminName, pwd }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.authenticated) {
          setIsAuthenticated(true);
        }
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Checking credentials...</h1>;
  }

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return <AdminDashboard />;
};

export default AdminDashboardPage;
