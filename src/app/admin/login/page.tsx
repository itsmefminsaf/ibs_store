"use client";

import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

const page = () => {
  const [adminName, setAdminName] = useState("");
  const [pwd, setPwd] = useState("");
  const [invalid, setInValid] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { adminName, pwd };
    fetch("/api/check-credentials", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.authenticated) {
          localStorage.setItem("adminName", result.adminName);
          localStorage.setItem("pwd", result.pwd);
          redirect("/admin/dashboard");
        } else {
          setInValid(true);
        }
      });
  };

  return (
    <>
      <h1 className="text-center text-4xl font-extrabold p-6 text-background bg-foreground">
        IYOOB BOOK SHOP
      </h1>
      <form
        className="h-[28rem] flex items-center justify-center gap-10 flex-col"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter admin name:"
          className={`admin-form-input ${
            invalid ? "outline-3 outline-red-600" : ""
          }`}
          value={adminName}
          onChange={(e) => {
            setAdminName(e.target.value);
            setInValid(false);
          }}
        />
        <input
          type="password"
          placeholder="Enter password:"
          className={`admin-form-input ${
            invalid ? "outline-3 outline-red-600" : ""
          }`}
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
            setInValid(false);
          }}
        />
        {invalid ? <h1>Invalid credentials..!!!</h1> : <></>}
        <button
          type="submit"
          className="bg-foreground text-background rounded-lg p-3 text-2xl"
        >
          VERIFY
        </button>
      </form>
    </>
  );
};

export default page;
