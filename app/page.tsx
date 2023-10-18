import React from 'react'
import TShirt from "./assets/tricou-tommy.webp"
import Link from 'next/link'
import Image from 'next/image'
import { DateTime } from "luxon";


const getData = async () => {
  const currentTime = DateTime.now().toFormat("yyyy-mm-ddThh:mm:ssZ")
  const baseURL = "https://apollo.code-village.ro/wp-json/wc/v3";
  const username = "ck_3d06586e1a83d260041f72db0404f0ca5102f1f7";
  const password = "cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd";
  
  
  try {
    const res = await fetch(`${baseURL}/products?${currentTime}`, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${btoa(username + ":" + password)}`
    }
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return await res.json();
    
  } catch (error) {
    console.error("There was an error fetching the data", error);
    return [];
  }
}



const Home = async () => {
  const data = await getData();
  console.log(data);
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
      {/* Carousel section */}
      <div className="w-full overflow-x-auto pb-6 pt-1 custom-scrollbar">
        <ul className='flex animate-carousel gap-4'>
          {data.map((product) => (
            <li key={product.id} className='relative max-h-[275px] w-[65%] max-w-[425px] flex-none'>
              <Link href="/" className='relative h-full w-full'>
                <div className='group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 relative border-neutral-200'>
                  <Image
                    width={900}
                    height={500}
                    src={product.images[0].src}
                    alt="img"
                    className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                  />
                  <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                    <div className='flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
                    <h3 className='mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight'>{product.name}</h3>
                    <p className='flex-none rounded-full bg-blue-500 p-2 text-white'>{product.price} RON</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home