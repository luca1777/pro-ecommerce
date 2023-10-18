import React, {useEffect} from 'react'
import Layout from '@/components/Layout'
import axios from "axios";

const ProductPage = ({productId}) => {


    const WooCommerce = axios.create({
        baseURL: "https://apollo.code-village.ro/wp-json/wc/v3", // Replace with your store's URL
        auth: {
            username: "ck_3d06586e1a83d260041f72db0404f0ca5102f1f7", // Replace with your consumer key
            password: "cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd", // Replace with your consumer secret
        },
    });

    useEffect(() => {
        WooCommerce.get(`/products/${productId}`)
            .then((data) => {
                return console.log(data.data);
            })
            .catch((error) => {
                return error;
            });
    }, []);

    return (
    <Layout>{productId}</Layout>
  )
}

export default ProductPage

export async function getServerSideProps({ params }) {
    return {
        props: {
            productId: params.productId
        }
    };
}