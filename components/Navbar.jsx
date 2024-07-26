"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";

const navData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pricing",
    path: "/",
  },
  
];

const Navbar = () => {
  return (
    <div className=" w-full bg-violet-800 text-white  flex justify-between items-center  bg-transparent p-4 pr-10 pl-10 ">
      <Link className="flex text-3xl items-center gap-4" href="/">
        InvoiceWallah
      </Link>

      {/* "md:flex lg:flex gap-5 hidden " */}
      <div className={`md:flex lg:flex lg:gap-5 md:gap-3 hidden `}>
        <div className="">
          <ul className=" sm:flex text-xl font-semibold  lg:flex lg:gap-5 md:flex md:gap-3">
            {navData.map((items, index) => {
              return (
                <li className="" key={index}>
                  <Link href={items.path}>{items.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <Link href="/login">Login</Link>
          <Link href="/signup" className="btn bg-red-400 text-primary">
            Get Started
          </Link>
        </div>
      </div>

      <button className="lg:hidden md:hidden  ">
        <AlignRight />
      </button>
    </div>
  );
};

export default Navbar;
