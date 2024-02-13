"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { useSearchParams, useRouter } from "next/navigation";
import ModalZoomImg from "./ModalZoomImg";

const ProductImg = ({ dataProduct }) => {
  const imgId = useSearchParams();
  const selectedImgId = imgId.get("imgId");
  const router = useRouter();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedImgId) {
      const imgIndex = dataProduct.images.findIndex(
        (img) => img.id.toString() === selectedImgId
      );
      setCurrentImgIndex(imgIndex >= 0 ? imgIndex : 0);
    }
  }, [selectedImgId, dataProduct.images]);

  const goToPrevImg = () => {
    const newIndex =
      currentImgIndex - 1 >= 0
        ? currentImgIndex - 1
        : dataProduct.images.length - 1;
    router.push(
      `/product/${dataProduct.id}?imgId=${dataProduct.images[newIndex].id}`
    );
  };

  const goToNextImg = () => {
    const newIndex =
      currentImgIndex + 1 < dataProduct.images.length ? currentImgIndex + 1 : 0;
    router.push(
      `/product/${dataProduct.id}?imgId=${dataProduct.images[newIndex].id}`
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
      <button onClick={openModal} className="h-full w-full object-contain">
        <Image
          className="h-full w-full object-contain"
          width={1000}
          height={1000}
          src={dataProduct.images[currentImgIndex].src}
          alt="Selected image"
        />
      </button>
      <div className="absolute bottom-[10%] flex w-full justify-center">
        <div className="mx-aut flex h-11 items-center rounded-full border bg-neutral-50/70 text-neutral-500 backdrop-blur gap-8">
          <button
            onClick={goToPrevImg}
            className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black flex items-center justify-center"
          >
            <IoMdArrowBack className="h-8 w-8" />
          </button>
          <div className="mx-1 h-6 w-px bg-neutral-500"></div>
          <button
            onClick={goToNextImg}
            className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black flex items-center justify-center"
          >
            <IoMdArrowForward className="h-8 w-8" />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <ModalZoomImg
          closeModal={closeModal}
          dataProduct={dataProduct}
          currentImgIndex={currentImgIndex}
          goToPrevImg={goToPrevImg}
          goToNextImg={goToNextImg}
        />
      )}
    </div>
  );
};

export default ProductImg;
