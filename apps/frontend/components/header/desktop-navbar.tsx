"use client";

import { cn } from "@/lib/utils";
import React, { PropsWithChildren, useEffect, useState } from "react";

type Props = PropsWithChildren;

const DesktopNavbar = (props: Props) => {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isScrolledDown = scrollPos > 10;

  return (
    <nav
      className={cn("fixed w-full transition-colors top-0 block", {
        "bg-white text-gray-700 shadow-md": isScrolledDown,
      })}
    >
      <div className="flex items-center px-4 py-4  w-full">
        {props.children}
      </div>
    </nav>
  );
};

export default DesktopNavbar;
