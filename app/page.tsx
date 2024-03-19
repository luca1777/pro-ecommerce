"use client";
import React from "react";
import WomanImg from "@/app/assets/woman-home.jpg";
import ManImg from "@/app/assets/man-home.jpg";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-8 gap-4">
        <div className="w-full">
          <div className="group flex flex-col relative h-[400px] md:h-[700px]">
            <Link href="/woman">
              <Image
                layout="fill"
                objectFit="cover"
                src={WomanImg}
                alt="woman-img-home"
                className="duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="w-full h-32 flex justify-center items-center">
            <Link href="/woman">
              <button className="text-white border border-black bg-black py-4 px-12 text-2xl tracking-widest font-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
                WOMAN
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="group relative h-[400px] md:h-[700px]">
            <Link href="/man">
              <Image
                layout="fill"
                objectFit="cover"
                src={ManImg}
                alt="man-img-home"
                className="relative duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="w-full h-32 flex justify-center items-center">
            <Link href="/man">
              <button className="text-white border border-black bg-black py-4 px-12 text-2xl tracking-widest font-black transition-colors duration-300 ease-in-out hover:bg-white hover:text-black">
                MAN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
