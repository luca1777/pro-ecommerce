import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/global.css";
import Layout from "@/components/Layout";
import Link from "next/link";

const Store = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const WooCommerce = axios.create({
        baseURL: "https://apollo.code-village.ro/wp-json/wc/v3", // Replace with your store's URL
        auth: {
            username: "ck_3d06586e1a83d260041f72db0404f0ca5102f1f7", // Replace with your consumer key
            password: "cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd", // Replace with your consumer secret
        },
    });

    useEffect(() => {
        WooCommerce.get("/products")
            .then((data) => {
                return setProducts(data.data);
            })
            .catch((error) => {
                return error;
            });
    }, []);

    console.log(products)
    return (
        <Layout>
            <div className="flex justify-center gap-12 ">
                {products.map((product) => {
                    return <div>
                        <h1>{product.name}</h1>
                        <img className="w-80" src={product.images[0].src} alt="No Img Found"/>
                        <div>
                            {product.price}
                        </div>
                        <button>
                            Add to cart
                        </button>
                        <Link href={`/store/${product.id}`}>
                            <button>View Product</button>
                        </Link>
                    </div>;
                })}
            </div>
        </Layout>
    );
};

export default Store;
