"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Earth from "./Earth";

const SecondHero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const parallaxRef = useRef();

  useEffect(() => {
    const headingLetters = headingRef.current.querySelectorAll(".letter");
    gsap.set(headingLetters, {
      x: () => Math.random() * window.innerWidth - window.innerWidth / 2,
      y: () => Math.random() * window.innerHeight - window.innerHeight / 2,
      opacity: 0,
    });

    gsap.to(headingLetters, {
      duration: 2,
      x: 0,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power3.inOut",
    });

    const paragraphLetters = paragraphRef.current.querySelectorAll(".letter");
    gsap.set(paragraphLetters, {
      x: () => Math.random() * window.innerWidth - window.innerWidth / 2,
      y: () => Math.random() * window.innerHeight - window.innerHeight / 2,
      opacity: 0,
    });

    gsap.to(paragraphLetters, {
      duration: 3,
      x: 0,
      y: 0,
      opacity: 1,
      stagger: 0.001,
      ease: "power3.inOut",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = parallaxRef.current;
      const moveX = (clientX / offsetWidth - 0.5) * 20;
      const moveY = (clientY / offsetHeight - 0.5) * 20;
      parallaxRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="letter inline-block ">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };
  return (
    <section
      id="next-section"
      className="md:h-[150vh] px-4 md:px-0 h-fit w-full m-0 bg-black relative overflow-hidden"
    >
      <div className="relative h-fit mt-[20vh] block">
      <Image src='/images/earthrotation.gif'unoptimized width={200} height={200} alt="earth"  className="absolute top-[60vh] right-[20vw]"/>
        
        <Image
          src="/images/cloud1.png"
          height={100}
          width={100}
          alt="cloud"
          className="md:h-[30vh] h-[200px] w-auto cloud1 z-10 absolute top-20 hidden md:block "
        />
        <Image
          src="/images/cloud1.png"
          height={100}
          width={100}
          alt="cloud"
          className="h-[10vh] w-auto cloud2 z-10  relative bottom-[100px]"
        />
        <Image
          src="/images/cloud2.png"
          height={100}
          width={100}
          alt="cloud"
          className="h-[30vh] w-auto cloud3 z-10 top-[-100px]  absolute"
        />
      </div>
      <div className="relative h-[60vh]  w-full flex items-center justify-center parralx-container" ref={parallaxRef}>
        <Image
          src="/images/paradiso_apng_op_gr.png"
          width={100}
          height={100}
          alt="water"
          className="w-auto h-full object-contain absolute"
          unoptimized
        />
        <h1 className="text-6xl md:text-[150px] text-white z-10 relative top-[-10%]">
          PARADISO
        </h1>
      </div>
      <div className="h-[20vh] mt-[10vh] flex items-center text-center w-full justify-center flex-col">
        <h1
          ref={headingRef}
          className="text-[30px] md:text-[100px] text-orange-50"
        >
          {splitText("Your favourite place for fun.")}
        </h1>
        <h3
          ref={paragraphRef}
          className="text-[15px  ] md:text-[25px] wrapper text-orange-50"
        >
          {splitText(
            "Nestled along the serene shores of Fewa Lake in the heart of Lakeside, Pokhara, lies a haven of delight—Paradiso Sports Bar and Grill. This enchanting establishment, true to its celestial name, offers an oasis where the vibrant spirit of Pokhara converges with the tranquil beauty of its natural surroundings. As the sun dips behind the Annapurna range, casting golden hues across the water, Paradiso comes alive with the soulful strains of live music, echoing across the lake. Popular bands grace the stage, their melodies weaving through the evening air, turning ordinary nights into magical experiences."
          )}
        </h3>
      </div>
    </section>
  );
};

export default SecondHero;
