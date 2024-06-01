"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
const flipBook = (elBook) => {
  elBook.style.setProperty("--c", "0"); // Set current page
  const pages = elBook.querySelectorAll(".page");
  pages.forEach((page, idx) => {
    page.style.setProperty("--i", `${idx}`);
    page.addEventListener("click", (evt) => {
      const target = evt.target;
      if (target.closest("a")) return;
      const curr = target.closest(".back") ? idx : idx + 1;
      elBook.style.setProperty("--c", `${curr}`);
    });
  });
};

const Menus = () => {
  const bookRef = useRef(null);

  useEffect(() => {
    if (bookRef.current) {
      flipBook(bookRef.current);
    }
  }, []);
  return (
    <main className="bodyy bg-black w-full flex-col items-center" >
      <div className="book mb-100" ref={bookRef}>
        <div className="page">
          <div className="front cover">
            <h1>Menu</h1>
            <h3>Click to explore</h3>
          </div>
          <div className="back">
            <Image
              src="/images/menu1.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>
        </div>

        <div className="page" id="appetizer">
          <div className="front">
            <Image
              src="/images/menu2.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>
          <div className="back">
            <Image
              src="/images/image3.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>
        </div>

        <div className="page">
          <div className="front">
            <Image
              src="/images/menu4.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>
          <div className="back" id="indiancousine">
            <Image
              src="/images/menu5.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>
        </div>

        <div className="page">
          <div className="front">
            <Image
              src="/images/menu6.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>
          <div className="back">
            <Image
              src="/images/menu7.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>
        </div>

        <div className="page">
          <div className="front">
            <Image
              src="/images/menu8.webp"
              alt="Paradiso Logo"
              width={500}
              height={500}
              quality={100}
              unoptimized={true}
              priority
            />
          </div>

          <div className="back cover"></div>
        </div>
      </div>
      
    </main>
  );
};

export default Menus;
