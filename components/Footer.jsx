import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bottom--10 w-full flex justify-between md:px-[2vw] px-4 bg-black items-center py-2 m-0">
      <Link href="/" >
          <Image src="/images/logo.png" width={50} height={50} alt="logo" />
      </Link>
      <div className="flex space-x-4">
        <Link href="https://www.facebook.com/paradisopokhara" passHref target="_blank">
            <FaFacebook size={32} className="text-gray-200" />
        </Link>
        <Link href="https://www.instagram.com/paradisopokhara" passHref target="_blank">
            <FaInstagram size={32} className="text-gray-200" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
