import React from "react";
import {getSingleProduct} from "@/app/utils"
import Image from "next/image";
import OrderButton from "@/app/_components/OrderButton"

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

    return (
      <div>
        {dataProduct.name}
        {productId}
        {dataProduct?.attributes[0]?.options}
        <h2>{dataProduct.description.replace(/<\/?p>/g, '')}</h2>
        <Image width={100} height={100} src={dataProduct.images[0].src} alt="img" />
        <OrderButton productId={productId} />        
      </div>
    );
}

export default Product