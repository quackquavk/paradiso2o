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
    } else {
      header.classList.remove("headerActive");
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
      <section className="h-screen min-w-[100vw] flex flex-col items-center justify-center m-0 relative">
        <video
          autoPlay
          muted
          loop
          src="/vids/bgProto.mp4"
          className="h-screen w-full object-cover absolute inset-0 z-0 video"
        ></video>
        {isMenuActive && (
          <div
            ref={menuRef}
            className="absolute z-20 bg-[#b48484]  h-fit pb-[10vh] flex flex-col items-center gap-2 mobile-header bottom-0 w-full"
          >
            <div className="flex flex-col items-center gap-4 pb-10 pt-5">
              {headerItems.map((item, index) => (
                <Link href={item.href} key={index}>
                  <div className="flex flex-col items-center ">
                    <p
                      className={`${
                        item.href === currentUrl
                          ? "text-orange-500"
                          : "text-black"
                      } text-[20px]`}
                    >
                      {item.name}
                    </p>

                    <span className="border-b-2 border-black h-0.5 opacity-25 w-full mt-1"></span>
                  </div>
                </Link>
              ))}
              <p className="text-[20px]">Book a table</p>
            </div>
          </div>
        )}
        <h1 className="text-6xl md:text-[300px] text-white z-10">PARADISO</h1>
        <header
          id="header"
          className={`header px-10 backdrop-blur-sm text-white text-center flex py-1 sticky z-50 w-full top-[100%] justify-between items-center ${
            visible ? "" : "hidden"
          }`}
        >
          <Image src="/images/logo.png" width={60} height={60} alt="logo" />
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
          <h2 className="text-[18px] md:block hidden">Book a table</h2>
          <div
            onClick={toggleMenu}
            className={`${
              isMenuActive ? "pointer-events-none" : ""
            } md:hidden block cursor-pointer z--30 `}
          >
            {isMenuActive ? (
              <FaTimes size={20} color="black" />
            ) : (
              <FaBars size={20} />
            )}
          </div>
        </header>
      </section>
      <SecondHero />
      <About />
      <Events />
      <Footer />
    </>
  );
};

export default Home;
