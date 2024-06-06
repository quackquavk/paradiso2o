"use client";
import { useState, useEffect } from "react";
import { headerItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import React from "react";

const Header = () => {
  const currentUrl = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      id="header"
      className={`header px-10 text-white text-center flex py-2 fixed z-50 w-full justify-between items-center transition-all duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <Image src="/images/logo.png" width={50} height={50} alt="logo" />
      <div className="md:flex hidden items-center justify-between ">
        <div
          className={`justify-center items-center gap-6 md:flex ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
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
      </div>
      <Link href="/contact">
        <h2 className="text-[18px] hidden md:block">Book a table</h2>
      </Link>
      <AiOutlineMenu
        onClick={toggleMenu}
        className="text-2xl cursor-pointer block md:hidden z-20"
      />
      <div className="md:hidden">
        {menuOpen && (
          <>
            <div
              className={`absolute min-h-[100vh] min-w-full ${menuOpen? 'pointer-events-auto z-50 ': 'pointer-events-none '}`}
              onClick={() => setMenuOpen(false)}
            ></div>
            <div className="absolute top-full left-0 w-full bg-white z-10 animate-slideInDown">
              {headerItems.map((link, index) => (
                <Link key={index} href={link.href}>
                  <h2
                    className={`block py-2 px-4 ${
                      currentUrl === link.href
                        ? "text-orange-400"
                        : "text-black"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </h2>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
