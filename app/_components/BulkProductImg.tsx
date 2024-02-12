"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const BulkProductImg = ({dataProduct, productId}) => {
    const router = useRouter();
    const imgId = useSearchParams();
    const selectedImgId = imgId.get('imgId');

    const handleImgClick = (imgId) => {
        router.push(`/product/${productId}?imgId=${imgId}`);
    }

  return (
    <div className="my-12 flex items-center justify-center gap-2 py-1 lg:mb-0">
    <ul className="flex flex-wrap justify-center gap-2">
      {dataProduct.images.map((img) => (
        <button key={img.id} onClick={() => handleImgClick(img.id)}>
          <li
            key={img.id}
            className={`group h-[10rem] w-[8rem] sm:w-[10rem] flex items-center justify-center overflow-hidden rounded-lg ${img.id.toString() === selectedImgId ? "border-[3px] border-blue-600" : "" } bg-white hover:border-blue-600 border-[2px]`}
          >
            <Image
              className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
              width={1000}
              height={100}
              src={img.src}
              alt="img"
            />
          </li>
        </button>
      ))}
    </ul>
  </div>
  )
}

export default BulkProductImg