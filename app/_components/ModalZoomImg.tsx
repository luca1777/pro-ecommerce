"use client";
import Image from "next/image";
import React from "react";
import { IoMdArrowBack, IoMdArrowForward, IoMdClose } from "react-icons/io";

const ModalZoomImg = ({
  closeModal,
  dataProduct,
  currentImgIndex,
  goToPrevImg,
  goToNextImg,
}) => {
  console.log(dataProduct.images[currentImgIndex].src);
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-75">
      <div className="z-50 w-full p-4 flex flex-row-reverse">
        <button onClick={closeModal} className="">
          <IoMdClose className="h-8 w-8 text-white" />
        </button>
      </div>
      <div className="relative w-full h-full z-50 flex mb-10">
        <div className="absolute left-0 ml-2 flex items-center justify-center top-1/2 z-50">
          <button onClick={goToPrevImg}>
            <IoMdArrowBack className="text-gray-300 text-xl bg-zinc-800 w-full h-[40px] hover:text-white transition duration-400 ease-in-out" />
          </button>
        </div>
        <div className="w-full h-full flex">
          <Image
            src={dataProduct.images[currentImgIndex].src}
            alt="Modal image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute right-0 mr-2 flex items-center justify-center top-1/2 z-50">
          <button onClick={goToNextImg}>
            <IoMdArrowForward className="text-gray-300 text-xl bg-zinc-800 w-full h-[40px] hover:text-white transition duration-400 ease-in-out" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalZoomImg;
