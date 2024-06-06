"use client";

import { useState, useEffect } from "react";
import { headerItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
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
      className={`header text-white px-4 md:px-10 flex py-2 fixed z-50 w-full justify-between items-center transition-all duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <Link href="/" passHref>
        <Image src="/images/logo.png" width={50} height={50} alt="logo" />
      </Link>
      <div className="md:hidden flex items-center">
        <AiOutlineMenu
          onClick={toggleMenu}
          className="text-[24px] cursor-pointer text-white"
        />
      </div>
      <div className="hidden md:flex items-center justify-between">
        <div className={`flex items-center gap-6 `}>
          {headerItems.map((link, index) => (
            <Link key={index} href={link.href} passHref legacyBehavior>
              <a className={currentUrl === link.href ? "text-orange-400" : "text-white"}>
                {link.name}
              </a>
            </Link>
          ))}
        </div>
       
      </div>
      <div className="hidden md:block">
      <Link href="/contact" passHref legacyBehavior>
          <a className="text-[18px] hidden md:block">Book a table</a>
        </Link>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose
            onClick={toggleMenu}
            className="text-[24px] cursor-pointer text-black"
          />
        </div>
        <div className="flex flex-col items-start p-4">
          {headerItems.map((link, index) => (
            <Link key={index} href={link.href} passHref legacyBehavior>
              <a
                className={`block py-2 px-4 text-lg ${
                  currentUrl === link.href ? "text-orange-400" : "text-black"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
