"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavOpenClose = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
        className="bg-foreground text-background w-fit h-fit p-3 place-self-center rounded-lg col-start-3 row-start-1 col-end-4 row-end-3"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      <nav
        className={`${
          isOpen ? "scale-y-100" : "scale-y-0"
        } absolute bg-foreground text-background py-5 px-3 right-2 rounded-lg top-20 duration-75 origin-top`}
      >
        <ul className="text-xl flex flex-col gap-5">
          <a href="/admin/dashboard?tab=acc" className="nav-item">
            Daily Accounts
          </a>
          <a href="/admin/dashboard?tab=product" className="nav-item">
            Products
          </a>
          <a href="/admin/dashboard?tab=bills" className="nav-item">
            Bills
          </a>
        </ul>
      </nav>
    </>
  );
};

export default NavOpenClose;
