"use client";
import {useEffect} from "react";

const Product = ({ params , searchParams}) => {

    const productId = params.productId;



    return <div>
        product page

        <button></button>
        {productId}
    </div>
}

export default Product