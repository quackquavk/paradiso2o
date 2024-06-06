import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Your GSAP animation code here
  }, []);

  return (
    <section
      className="min-h-screen bg-black py-20 flex flex-col items-center justify-center relative"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-5 md:px-0 gap-10">
        <Image
          src="/images/pizza.jpg"
          height={400}
          width={400}
          alt="Indian cuisine"
          className="rounded-lg shadow-lg aboutimage"
          priority
        />
        <div className="md:max-w-lg text-center md:text-left abouttext">
          <h1 className="text-4xl font-bold text-orange-400 mb-4">
            Best food in town
          </h1>
          <p className="text-white text-lg">
            Paradiso Sports Bar offers the best food in town with a menu that
            blends local Nepali flavors with global cuisine. Located lakeside in
            Pokhara, enjoy dishes like pan-grilled pork belly and Thai pork
            chilly. Live music, exotic cocktails, and stunning views make it an
            unforgettable experience.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl w-full px-5 md:px-0 gap-10 mt-20">
        <Image
          src="/images/galleryImage74.jpg"
          height={400}
          width={400}
          alt="Indian cuisine"
          className="rounded-lg shadow-lg aboutimage1"
          priority
        />
        <div className="md:max-w-lg text-center md:text-left abouttext1">
          <h1 className="text-4xl font-bold text-orange-400 mb-4">
            Best music and fresh environment
          </h1>
          <p className="text-white text-lg">
            Paradiso Sports Bar offers a unique lake-front garden bar in
            Pokhara. Enjoy serene views, an eclectic menu, and live music every
            night. It's perfect for relaxation and entertainment with great
            food, exotic cocktails, and a vibrant atmosphere.
          </p>
        </div>
      </div>
      <Image
        src="/images/musicicon.png"
        width={100}
        height={100}
        alt="Music icon"
        className="absolute left-20 bottom-40 z-40 aboutimage1 hidden md:flex"
      />
    </section>
  );
};

export default About;
