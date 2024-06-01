"use client";
import { useState, useEffect } from "react";
import { headerItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const currentUrl = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header
      id="header"
      className={`header px-10 text-white text-center flex py-4 fixed z-50 w-full justify-between items-center  ${
        visible ? "" : "hidden"
      }`}
    >
      <Image src="/images/logo.png" width={50} height={50} alt="logo" />
      <div className="justify-center items-center gap-[30px] md:flex hidden">
        {headerItems.map((link, index) => (
          <Link key={index} href={link.href}>
            <h2
              className={
                currentUrl === link.href ? "text-orange-400" : "text-white"
              }
            >
              {link.name}
            </h2>
          </Link>
        ))}
      </div>
      <h2 className="text-[18px] hidden md:block">Book a table</h2>
     
    </header>
  );
};

export default Header;
