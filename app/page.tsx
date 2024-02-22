import React from "react";
import TShirt from "./assets/tricou-tommy.webp";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/app/utils";

const Home = async () => {
  const data = await getProducts();

  return (
    <main>
      {/* Hero section*/}
      <div className="mx-auto grid max-w-screen-2xl gap-4 pb-4 px-4 md:grid-cols-6 md:grid-rows-2">
        <div className="md:col-span-4 md:row-span-2 overflow:hidden">
          <Link href="/" className="relative block aspect-square h-full w-full">
            <div className="h-full w-full overflow-hidden rounded-lg border hover:border-blue-600">
              <Image
                src={TShirt}
                alt="t-shirt"
                className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </Link>
        </div>
        <div className="md:col-span-2 md:row-span-1 overflow:hidden">
          <Link href="/" className="relative block aspect-square h-full w-full">
            <div className="h-full w-full overflow-hidden rounded-lg border hover:border-blue-600">
              <Image
                src={TShirt}
                alt="t-shirt"
                className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </Link>
        </div>
        <div className="md:col-span-2 md:row-span-1 overflow:hidden">
          <Link href="/" className="relative block aspect-square h-full w-full">
            <div className="h-full w-full overflow-hidden rounded-lg border hover:border-blue-600">
              <Image
                src={TShirt}
                alt="t-shirt"
                className="relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
