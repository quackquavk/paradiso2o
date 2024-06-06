"use client";

import { headerItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import SecondHero from "/components/SecondHero";
import About from "/components/About";
import Events from "@/components/Events";
import Footer from "@/components/Footer";

import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const currentUrl = usePathname();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos >= window.innerHeight) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleHeaderScroll = () => {
    const header = document.querySelector(".header");
    const scrollY = window.scrollY;
    const winheight = window.innerHeight;

    if (scrollY >= winheight) {
      header.classList.add("headerActive");
      setHeaderActive(true);
    } else {
      header.classList.remove("headerActive");
      setHeaderActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll);
    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuActive(false);
    }
  };

  useEffect(() => {
    if (isMenuActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuActive]);

  return (
    <>
      <section className="h-screen min-w-[100vw] max-w-[100vw] flex flex-col items-center justify-center m-0 relative">
        <video
          autoPlay
          loop
          src="/vids/bgProto.mp4"
          className="h-screen  w-full object-cover absolute inset-0 z-0 video"
        ></video>
        <h1 className="text-6xl md:text-[300px] text-white z-10">PARADISO</h1>
        <header
          id="header"
          className={`header px-10 backdrop-blur-sm text-white text-center flex py-1 sticky z-40 w-full top-[100%] justify-between items-center ${
            visible ? "" : "hidden"
          }`}
        >
          <Link href="/" passHref>
            <Image src="/images/logo.png" width={60} height={60} alt="logo" />
          </Link>
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
          <Link href="/contact" passHref legacyBehavior>
            <a className="text-[20px] hidden md:block">Book a table</a>
          </Link>
          <div
            onClick={toggleMenu}
            className={`${
              isMenuActive ? "pointer-events-none" : ""
            } md:hidden block cursor-pointer z-50`}
          >
            {isMenuActive ? (
              <FaTimes size={20} color="white" />
            ) : (
              <FaBars size={20} color="white" />
            )}
          </div>
        </header>
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full w-64 bg-white z-40 transform  ${
            isMenuActive ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end p-4">
            <FaTimes
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
                  onClick={() => setIsMenuActive(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/contact" passHref legacyBehavior>
              <a className="block py-2 px-4 text-lg">Book a table</a>
            </Link>
          </div>
        </div>
        {isMenuActive && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={toggleMenu}
          ></div>
        )}
      </section>
      <SecondHero />
      <About />
      <Events />
    </>
  );
};

export default Home;
