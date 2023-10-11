import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/global.css";
import Link from "next/link";
import Image from "next/image";

const Store = ({data}) => {
    return (
        <div>
            <div className="flex justify-center gap-12 ">
                {data.map((product) => (
                    <div key={product.id}>
                        <h1>{product.name}</h1>
                        <img className="w-80" src={product.images[0]?.src} alt={product.name} />
                        <div>{product.price}</div>
                        <button>Add to cart</button>
                        <Link href={`/store/${product.id}`}>
                            <button>View Product</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );

};

export async function getServerSideProps() {
    const baseURL = "https://apollo.code-village.ro/wp-json/wc/v3";
    const username = "ck_3d06586e1a83d260041f72db0404f0ca5102f1f7";
    const password = "cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd";
  
    try {
      const response = await axios.get(`${baseURL}/products`, {
        auth: {
          username: username,
          password: password
        }
    });
  
      return {
        props: {
          data: response.data
        }
      };
      
    } catch (error) {
      console.error("There was an error fetching the data", error);
      return {
        props: {
          data: []
        }
      };
    }
  }


export default Store;
