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
        
        // console.log("util : " + resData.data.id)
        return resData.data;
    }catch (e) {
        // console.log(e);
        return [];
    }


} 

export const getProductsByCategory = async (categoryId) => {
    try {
        const response = await axios.get(`${baseURL}/products`, {
            auth: {
                username: username,
                password: password
            },
            params: {
                category: categoryId
            }
        });
        return response.data;

    } catch (error) {
        console.error("Eroare la obținerea produselor: ", error);
        return [];
    }    
};

export const getSingleProduct = async (prodId: number) => {
    try{
        const resData = await axios.get(`${baseURL}/products/${prodId}`,{
            params: {
                consumer_key: username,
                consumer_secret: password,
            }
        })

        console.log(resData.data)

        return resData.data;

    }catch (error) {
        console.log(error);
        return[];
    }

}

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(username + ":" + password)}`
    }
};

export const createOrder = async (prodId: number) => {

    console.log("action -> create order")

    const baseURL = "https://apollo.code-village.ro/wp-json/wc/v3";
    const username = "ck_3d06586e1a83d260041f72db0404f0ca5102f1f7";
    const password = "cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd";

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(username + ":" + password)}`
        }
    };


    try {
        const resData = await axios.post(`${baseURL}/orders`, getData(prodId), config);
        console.log("Order created", resData.data)
        return resData;
    } catch (error) {
        console.log('There was an error creating the order:', error);
        return [];
    }
}


const getData = (productId: number) => {
  return {
    payment_method: "bacs",
    payment_method_title: "Direct Bank Transfer",
    set_paid: true,
    status: "completed",
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
      phone: "(555) 555-5555",
    },
    shipping: {
      first_name: "John",
      last_name: "Doe",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
    },
    line_items: [
      {
        product_id: productId,
        quantity: 1,
      },
    ],
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "10.00",
      },
    ],
  };
};