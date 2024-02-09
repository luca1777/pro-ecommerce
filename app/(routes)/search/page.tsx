"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getProductsByQuery } from "@/app/utils";
import Link from "next/link";
import Image from "next/image";
import LoadingSpinner from "@/app/_components/LoadingSpinner";

interface Products {
  id: number;
  name: string;
  description: string;
  price: string;
  images: {
    src: string;
  }[];
  attributes: {
    options: string[];
  }[];
}

const SearchResultsPage = () => {
  const search = useSearchParams();
  const [products, setProducts] = useState<Products[]>([]);
  const router = useRouter();
  const searchQuery = search ? search.get("q") : null;
  const [isLoading, setIsLoading] = useState(!!searchQuery);

  useEffect(() => {
    if (!searchQuery) {
      router.push("/");
      console.log("No search query provided");
      return;
    }

    const fetchProducts = async () => {
        try {
          const filteredProducts = await getProductsByQuery(searchQuery);
          setProducts(filteredProducts);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        } finally {
          setIsLoading(false); 
        }
      };

    fetchProducts();
  }, [search, router, searchQuery]);

  return (
    <div className="mx-auto max-w-screen-2xl p-4 border-y border-gray-300">
      <div className="py-4 w-full">
        {isLoading ? (
          <div className="w-full h-[500px] flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : products.length > 0 ? (
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl"><span className="font-bold">{products.length}</span> results found for <span className="font-bold">„{searchQuery}”</span></p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products?.map((product) => (
                <li
                  key={product.id}
                  className="relative flex flex-col items-center justify-center pb-10"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="relative h-full w-full"
                  >
                    <div className="group flex h-full w-full items-center justify-center overflow-hidden">
                      <Image
                        src={product.images[0].src}
                        alt={product.name}
                        width={200}
                        height={500}
                        layout="responsive"
                        objectFit="fill"
                        className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p>{product.name} - M</p>
                      <p className="font-semibold">{product.price} lei</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="w-full h-[500px] flex justify-center items-center">
            <p className="text-2xl">
              Sorry, we did not find any results for{" "}
              <span className="font-bold">{`''${searchQuery}''`}</span>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
