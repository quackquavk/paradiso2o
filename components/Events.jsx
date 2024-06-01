import { eventItems } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "./Footer";

const Events = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 100); // Adjust the timeout to match your CSS transition duration
    return () => clearTimeout(timeout);
  }, [curIndex]);

  const handleNext = () => {
    setCurIndex((prevIndex) => (prevIndex + 1) % eventItems.length);
    setAnimate(true)
  };

  const handlePrev = () => {
    setCurIndex(
      (prevIndex) => (prevIndex - 1 + eventItems.length) % eventItems.length
    );
  };
  console.log(curIndex)

  return (
    <section className="min-h-[100vh] w-full bg-black flex flex-col eventmain">
      <h1 className="h1-bold text-white text-center py-[10vh]">Past Events</h1>
      <div className="flex  md:flex-row justify-center px-0 md:px-[20vw] max-w-[100vw] gap-10 min-w-[90vw] items-center  eventsImage1 py-3  relative max-h-[50vh] min-h-[50vh]">
          <Image
            src={eventItems[curIndex].image}
            alt="events image"
            className=" eventsimage max-h-[40vh] w-auto"
            width={100}
            height={100}
          />
          <div className="">
            <p className="text-white text-[60px] font-bold mb-2 whitespace-nowrap ">
              {eventItems[curIndex].title}
            </p>
            <p className="text-white text-[20px] whitespace-pre-wrap">
              {eventItems[curIndex].desc}
            </p>
        </div>
        <div className="flex absolute  bottom-10 right-20">
          <FaChevronLeft
            onClick={handlePrev}
            className="text-orange-300 cursor-pointer text-4xl mr-4"
          />
          <FaChevronRight
            onClick={handleNext}
            className="text-orange-200 cursor-pointer text-4xl ml-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
