import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full flex justify-between px-[2vw] bg-black  items-center ">
      <Link href='/'>
      <Image src="/images/logo.png" width={50} height={50} alt="logo" className=""  /></Link>
      <p className="text-white">2024 Paradiso All rights reserved</p>
    </footer>
  );
};

export default Footer;
