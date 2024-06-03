import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const musicIconRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image1 = imageRef1.current;
    const image2 = imageRef2.current;
    const text1 = textRef1.current;
    const text2 = textRef2.current;
    const musicIcon = musicIconRef.current;

    // GSAP animation for the music icon
    if (musicIcon) {
      gsap.fromTo(
        musicIcon,
        { opacity: 0, x: -1000, rotation: -45 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: musicIcon,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reset',
            repeat: -1,
          },
        }
      );
    }

    if (window.innerWidth >= 600) {
      gsap.fromTo(
        image1,
        { x: -800, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.fromTo(
        text1,
        { x: 800, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.fromTo(  
        image2,
        { x: 1200, opacity: 0 },
        {
          x: 0,
          duration: 2,
          opacity: 1,
          scrollTrigger: {
            trigger: image1,
            start: "top center",
            toggleActions: "play none none reset",
          },
        }
      );

      gsap.fromTo(
        text2,
        { x: -1200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: image1,
            start: "top center",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[100vh] max-h-[100vh] bg-black m-0 py-20 flex flex-col items-center justify-center aboutsection relative"
      id="about"
    >
      <div className="flex flex-col mt-10 max-w-full md:max-w-6xl md:flex-row md:gap-[10vw] px-3 md:px-0 gap-[5] w-full justify-between">
        <Image
          ref={imageRef1}
          src="/images/pizza.jpg"
          height={100}
          width={100}
          alt="indian cuisine"
          className="h-[30vh] w-auto"
          priority
        />
        <div ref={textRef1} className="">
          <h1 className="md:h3-bold text-orange-400 text-end ">
            Best food in town
          </h1>
          <p className="mt-4 text-white text-[20px]  text-justify">
            Paradiso Sports Bar offers the best food in town with a menu that
            blends local Nepali flavors with global cuisine. Located lakeside in
            Pokhara, enjoy dishes like pan-grilled pork belly and Thai pork
            chilly. Live music, exotic cocktails, and stunning views make
          </p>
        </div>
      </div>
      <div className="flex mt-10 max-w-5.5xl md:max-w-6xl flex-row gap-[10vw]">
        <div className="flex mt-10 wrapper flex-row gap-[10vw]">
          <div ref={textRef2} className="">
            <h1 className="h3-bold text-orange-400">
              Best music and fresh environment
            </h1>
            <p className="mt-4 text-white text-[20px] text-justify">
              Paradiso Sports Bar offers a unique lake-front garden bar in
              Pokhara. Enjoy serene views, an eclectic menu, and live music
              every night. Its perfect for relaxation and entertainment with
              great food, exotic cocktails, and a vibrant atmosphere.
            </p>
          </div>
        </div>

        <Image
          ref={imageRef2}
          src="/images/pizza.jpg"
          height={100}
          width={100}
          alt="indian cuisine"
          className="h-[30svh] w-auto"
          priority
        />
      </div>
      {/* Animation for the music icon */}
      <Image
        ref={musicIconRef}
        src="/images/musicicon.png"
        width={100}
        height={100}
        alt="music icon"
        className="absolute left-20 bottom-40 z-40 music-icon"
      />
    </section>
  );
};

export default About;
