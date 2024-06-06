import { eventItems } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "./Footer";

const Events = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [direction, setDirection] = useState(""); // To track the direction of the slide
  const [transitioning, setTransitioning] = useState(false); // To manage transition state

  useEffect(() => {
    if (transitioning) {
      const timeout = setTimeout(() => {
        setTransitioning(false);
        setDirection(""); // Reset direction after transition
      }, 300); // Match your CSS transition duration
      return () => clearTimeout(timeout);
    }
  }, [transitioning]);

  const handleNext = () => {
    setDirection("next");
    setTransitioning(true);
    setTimeout(() => {
      setCurIndex((prevIndex) => (prevIndex + 1) % eventItems.length);
    }, 300); // Delay to allow slide-out animation
  };

  const handlePrev = () => {
    setDirection("prev");
    setTransitioning(true);
    setTimeout(() => {
      setCurIndex(
        (prevIndex) => (prevIndex - 1 + eventItems.length) % eventItems.length
      );
    }, 300); // Delay to allow slide-out animation
  };

  return (
    <section className="min-h-[100vh] w-full bg-black flex flex-col eventmain sm:mb-[-10vh] mb-0">
      <h1 className="h1-bold text-white text-center py-[10vh] pastevents">
        Past Events
      </h1>
      <div className="hidden md:flex flex-row justify-center px-0 md:px-[20vw] max-w-[100vw] gap-10 items-center eventsImage1 relative max-h-[50vh] min-h-[50vh] ">
        <div
          className={`transition-transform duration-300 ${
            transitioning
              ? direction === "next"
                ? "slide-out-left"
                : "slide-out-right"
              : ""
          } ${
            !transitioning && direction
              ? direction === "next"
                ? "slide-in-right"
                : "slide-in-left"
              : ""
          }`}
        >
          <Image
            src={eventItems[curIndex].image}
            alt="events image"
            className="eventsimage max-w-[80vw] md:max-h-[40vh] w-auto"
            width={800}
            height={400}
          />
        </div>
        <div
          className={`transition-transform duration-300 eventstext ${
            transitioning
              ? direction === "next"
                ? "slide-out-left"
                : "slide-out-right"
              : ""
          } ${
            !transitioning && direction
              ? direction === "next"
                ? "slide-in-right"
                : "slide-in-left"
              : ""
          }`}
        >
          <p className="text-white text-[40px] md:text-[60px] font-bold mb-2 md:whitespace-nowrap eventstext">
            {eventItems[curIndex].title}
          </p>
          <p className="text-white text-[20px] eventstext">
            {eventItems[curIndex].desc}
          </p>
        </div>
        <div className="flex absolute bottom-0 right-0 md:bottom-10 md:right-20">
          <FaChevronLeft
            onClick={handlePrev}
            className="text-orange-300 cursor-pointer text-4xl mr-4"
          />
          <FaChevronRight
            onClick={handleNext}
            className="text-orange-300 cursor-pointer text-4xl ml-4"
          />
        </div>
      </div>

      <div className="flex md:hidden flex-col  items-center px-4 gap-4 max-w-full relative min-h-[70vh]">
        <Image
          src={eventItems[curIndex].image}
          alt="events image"
          className=" w-full h-auto"
          width={800}
          height={400}
        />
        <p className="text-white text-2xl font-bold mb-2 ">
          {eventItems[curIndex].title}
        </p>
        <p className="text-white text-base  text-center">
          {eventItems[curIndex].desc}
        </p>
        <div className="flex justify-between w-full px-4 absolute bottom-0">
          <FaChevronLeft
            onClick={handlePrev}
            className="text-orange-100 cursor-pointer text-4xl mr-4"
          />
          <FaChevronRight
            onClick={handleNext}
            className="text-orange-100 cursor-pointer text-4xl ml-4"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
