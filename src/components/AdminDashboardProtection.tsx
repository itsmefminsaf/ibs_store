"use client";

import { useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import AdminLogin from "./AdminLogin";

const AdminDashboardProtection = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const adminName = localStorage.getItem("adminName");
    const pwd = localStorage.getItem("pwd");

    if (!pwd || !adminName) {
      setIsAuthenticated(false);
      return;
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
      });
  }, []);

  return isAuthenticated ? <AdminDashboard /> : <AdminLogin />;
};

export default AdminDashboardProtection;
