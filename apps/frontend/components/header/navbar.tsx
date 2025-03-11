import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <h1 className="text-2xl font-bold p-2">My Website</h1>
      <div className="flex gap-2 ml-auto [&>a]:py-2 [&>a]:px-4 [&>a]:transition [&>a]:rounded-md [&>a:hover]:text-sky-100 [&>a:hover]:bg-sky-500">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
