import React from "react";
import { getSingleProduct, getProducts } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/app/_components/AddToCartButton";
import SizeSelectionBtn from "@/app/_components/SizeSelectionBtn";
import BulkProductImg from "@/app/_components/BulkProductImg";
import ProductImg from "@/app/_components/ProductImg";

interface ProductProps {
  params: {
    productId: number;
  };
  searchParams: any;
}

interface ProductData {
  name: string;
  description: string;
  price: string;
  images: {
    id: number;
    src: string;
  }[];
  attributes: {
    options: string[];
  }[];
}

const Product = async ({ params, searchParams }: ProductProps) => {
  const productId = params.productId;
  const dataProduct: ProductData = await getSingleProduct(productId);
  const data = await getProducts();
  const dataSizes = dataProduct.attributes[0]?.options;

  const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>/g, '');
  }

  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col lg:flex-row rounded-lg border bg-white p-8 md:p-12 lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <ProductImg dataProduct={dataProduct} />
            <BulkProductImg dataProduct={dataProduct} productId={productId} />
          </div>
          <div className="basis-full lg:basis-2/6">
            <div className="mb-6 flex flex-col border-b pb-6">
              <h1 className="mb-2 text-3xl font-semibold">
                {dataProduct.name}
              </h1>
              <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-md text-white">
                <p>
                  {dataProduct.price}.00
                  <span className="ml-1 inline">RON</span>
                </p>
              </div>
            </div>
            <div>
              <div className="my-8">
                <div className="mb-4 text-sm uppercase tracking-wide font-semibold">
                  Size:
                </div>
                <SizeSelectionBtn dataSizes={dataSizes} productId={productId} />
              </div>
              <div className="mx-auto font-medium mb-6">
                <p>{removeHtmlTags(dataProduct.description)}</p>
              </div>
              <AddToCartButton product={dataProduct} />
            </div>
          </div>
        </div>
        <div className="py-8">
          <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
          {/* Carousel section */}
          <div className="w-full overflow-x-auto pb-6 pt-1 custom-scrollbar border-b border-gray-300">
            <ul className="flex gap-4">
              {data?.map((product) => (
                <li
                  key={product.id}
                  className="relative max-h-[275px] w-[65%] max-w-[425px] flex-none"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="relative h-full w-full"
                  >
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 relative border-neutral-200">
                      <Image
                        width={900}
                        height={500}
                        src={product.images[0].src}
                        alt="img"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                        <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                          <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                            {product.name}
                          </h3>
                          <p className="flex-none rounded-full bg-blue-500 p-2 text-white">
                            {product.price} RON
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
