import axios from "axios";

const baseURL = "https://apollo.code-village.ro/wp-json/wc/v3";
const username = "ck_3d06586e1a83d260041f72db0404f0ca5102f1f7";
const password = "cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd";


export const getProducts = async () => {

    try{
        const resData = await axios.get(`${baseURL}/products`,{
            params: {
                consumer_key: username,
                consumer_secret: password,
            }
        })

        console.log("util : " + resData.data)

        return resData.data;
    }catch (e) {
        console.log(e);
        return [];
    }


}


const getSingleProduct = async () => {


}
const createOrder = async (prodId) => {

}


const data = {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    status:"completed",
    billing: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US",
        email: "john.doe@example.com",
        phone: "(555) 555-5555"
    },
    shipping: {
        first_name: "John",
        last_name: "Doe",
        address_1: "969 Market",
        address_2: "",
        city: "San Francisco",
        state: "CA",
        postcode: "94103",
        country: "US"
    },
    line_items: [
        {
            product_id: 61, // To be changed
            quantity: 1
        }
    ],
    shipping_lines: [
        {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: "10.00"
        }
    ]
};
