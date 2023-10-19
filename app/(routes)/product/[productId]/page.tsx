"use client";
import React from "react";
import {getSingleProduct, createOrder} from "@/app/utils"
import Image from "next/image";

interface ProductProps {
    params: {
      productId: number;
    };
    searchParams: any;  
};

interface ProductData {
    name: string;
    description: string;
    price: string;
    images: {
        src: string;
    }[];
    attributes: {
        options: string;
    }[];

}

const Product = async ({ params, searchParams}: ProductProps) => {
    const productId = params.productId;
    const dataProduct: ProductData = await getSingleProduct(productId);

    const handleOrder = async (prodId) => {
        await createOrder(prodId)
    }




    return (
      <div>
        {dataProduct.name}
        {productId}
        {dataProduct?.attributes[0]?.options}
         <h2>{dataProduct.description.replace(/<\/?p>/g, '')}</h2>
        <Image width={100} height={100} src={dataProduct.images[0].src} alt="img" />
        <button onClick={() => handleOrder(productId)}>Create Order</button>
      </div>
    );
}


export default Product