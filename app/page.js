"use client";
import { headerItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const Home = () => {
  const currentUrl = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  // Define your header items with names and corresponding hrefs
  const headerItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact" },
  ];
  const handleHeaderScroll = () => {
    const header = document.querySelector(".header");
    const scrollY = window.scrollY;
    const winheight = window.innerHeight;
    console.log(winheight);

    if (scrollY >= winheight) {
      header.classList.add("headerActive");
      console.log("header added");
    } else {
      header.classList.remove("headerActive");
      console.log("header removed ");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleHeaderScroll);
    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  }, []);

  return (
    <>
      <section className="h-screen w-full flex flex-col items-center justify-center m-0 relative">
        <video
          autoPlay
          muted
          loop
          src="/vids/bgProto.mp4"
          className="h-screen w-full object-cover absolute inset-0 z-0 video"
        ></video>

        <h1 className="text-6xl md:text-[300px] text-white z-10">PARADISO</h1>
        <header
          id="header"
          className="header px-10  backdrop-blur-sm text-white text-center flex py-4 sticky z-50 w-full top-[100%] justify-between items-center"
        >
          <Image src="/images/logo.png" width={50} height={50} alt="logo" />
          <div className="justify-center items-center gap-[30px]  md:flex header hidden">
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
          <h2 className="text-[18px]">Book a table</h2>
        </header>
      </section>
      <section
        id="next-section"
        className="md:h-[200vh] h-[100vh] w-full m-0 bg-black relative overflow-hidden"
      >
        <div className="relative h-fit mt-[20vh] block">
          <Image src='/images/cloud1.png' height={100} width={100} alt="cloud"  className="h-[30vh] w-auto cloud1 z-10 absolute top-20"/>
          <Image src='/images/cloud1.png' height={100} width={100} alt="cloud"  className="h-[10vh] w-auto cloud2 z-10  relative bottom-[100px]"/>
        </div>
        <div className="relative h-[60vh] w-full flex items-center justify-center ">
          <Image
            src="/images/paradiso_apng_op_gr.png"
            width={100}
            height={100}
            alt="water"
            className="w-auto h-full object-contain absolute"
          />
          <h1 className="text-6xl md:text-[150px] text-white z-10 relative top-[-10%]">
            PARADISO
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
