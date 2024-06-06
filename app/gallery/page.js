"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const images = [];
  for (let i = 4; i <= 77; i++) {
    images.push(`/images/galleryImage${i}.jpg`);
  }

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const openDialog = (index) => {
    setCurrentImageIndex(index);
    setCurrentImage(images[index]);
    setIsDialogOpen(true);
    console.log(index)
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setCurrentImage(null);
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    ); 
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header />
      <section className="bg-black h-fit py-10 m-0 w-full">
        <h1 className="text-center h1-bold text-white pt-20 pb-10">Gallery</h1>
        <div className="body1">
          <div className="parent-container flex-col md:flex-row w-[100vw] md:w-fit  px-4 md:px-0">
            <div className="child-container gap-5 md:gap-30" id="one">
              {images.slice(2, 24).map((src, index) => (
                <div
                  key={index}
                  className="image-wrapper"
                  ref={(el) => (imageRefs.current[index] = el)}
                  onClick={() => openDialog(index +2)}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 2}`}
                    width={100}
                    height={100}
                    style={{ width: "100%", height: "auto" }}
                    priority
                    quality={100}
                    unoptimized
                    className="galleryimage "
                  />
                </div>
              ))}
            </div>
            <div className="child-container" id="two">
              {images.slice(24, 44).map((src, index) => (
                <div
                  key={index}
                  className="image-wrapper"
                  ref={(el) => (imageRefs.current[index + 26] = el)}
                  onClick={() => openDialog(index + 24)}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 28}`}
                    width={100}
                    height={100}
                    style={{ width: "100%", height: "auto" }}
                    priority
                    quality={100}
                    unoptimized
                    className="galleryimage"
                  />
                </div>
              ))}
            </div>
            <div className="child-container" id="three">
              {images.slice(45, images.length - 1).map((src, index) => (
                <div
                  key={index}
                  className="image-wrapper"
                  ref={(el) => (imageRefs.current[index + 52] = el)}
                  onClick={() => openDialog(index+45)}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 54}`}
                    width={100}
                    height={100}
                    style={{ width: "100%", height: "auto" }}
                    priority
                    quality={100}
                    unoptimized
                    className="galleryimage"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isDialogOpen && (
  <div className="dialog-overlay" onClick={closeDialog}>
    <div className=" bg-black" onClick={(e) => e.stopPropagation()}>
        {images.map((src, index) => (
          <div key={index} className="image-wrapper" style={{ display: index === currentImageIndex ? 'block' : 'none' }}>
            <Image
              src={currentImage}
              alt={`Gallery Image ${index}`}
              objectFit="contain"
              layout="fill"
              className="gallery-image img min-w-[100%]"
              unoptimized
            />
          </div>
        ))}
     
      <IoMdClose className="close-icon" color="white" onClick={closeDialog} />
    </div>
  </div>
)}

      <Footer />
    </>
  );
};

export default Gallery;
