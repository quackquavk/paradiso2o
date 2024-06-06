import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="md:min-h-[95vh] flex items-center justify-center py-[10vh] bg-black    text-white ">
        <div className="bg-gray-900  w-full md:py-5  flex md:flex-row flex-col items-center justify-center gap-10  my-auto contactsection ">
          <Image
            src="/images/galleryImage77.jpg"
            width={600}
            height={600}
            alt="contact image"
            className="contactimage"
          />
          <div className="bg-red h-fit flex flex-col items-center justify-center gap-5">
            <h1 className="h1-bold text-start  cursor-pointer">Contact</h1>
            <div className="border-t border-white border-1 min-w-[80%] "></div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="h1-bold leading-relaxed">PARADISO</h1>

              <p className="text-start hover:text-orange-300 text-[20px]">
                <Link href="tel:+977061-451675">061-451675</Link>
              </p>
            </div>
            <div className="">
              <p className="text-center text-[20px]">
                We don't make online reservations <br /> to enter you have to
                sign up for the virtual queue <br /> that is accessed by a QR at
                the Paradiso door
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[20px]">General information</p>
              <p className="hover:text-orange-300">
                <Link href="mailto:info@paradiso.com"> info@paradiso.com</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
