import axios from "axios";

const baseURL = "https://apollo.code-village.ro/wp-json/wc/v3";
const username = "ck_3d06586e1a83d260041f72db0404f0ca5102f1f7";
const password = "cs_3e7b2d095ecf51ec04a162882e3dd595eaab9cbd";

interface OrderResponse {
    data: {
      id: number;
      // ... other properties
    };
  }

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

export const getProductsByPriceDesc = async (categorySlug) => {
    try {
        const response = await axios.get(`${baseURL}/products/categories`, {
            params: {
                consumer_key: username, 
                consumer_secret: password,
                slug: categorySlug
            }
        });

        if (response.data.length === 0 || !response.data[0].id) {
            console.error("Category not found for the provided slug.");
            return [];
        }
        
        const categoryId = response.data[0].id;

        const productsResponse = await axios.get(`${baseURL}/products`, {
            params: {
                consumer_key: username, 
                consumer_secret: password, 
                category: categoryId,
                orderby: "price",
                order: "desc"
            }
        });


        return productsResponse.data;

    } catch (error) {
        console.error("Eroare la obținerea produselor: ", error);
        return [];
    } 
}

export const getProductsByPriceAsc = async (categorySlug) => {
    try {
        const response = await axios.get(`${baseURL}/products/categories`, {
            params: {
                consumer_key: username, 
                consumer_secret: password,
                slug: categorySlug
            }
        });

        if (response.data.length === 0 || !response.data[0].id) {
            console.error("Category not found for the provided slug.");
            return [];
        }
        
        const categoryId = response.data[0].id;

        const productsResponse = await axios.get(`${baseURL}/products`, {
            params: {
                consumer_key: username, 
                consumer_secret: password, 
                category: categoryId,
                orderby: "price",
                order: "asc"
            }
        });


        return productsResponse.data;

    } catch (error) {
        console.error("Eroare la obținerea produselor: ", error);
        return [];
    } 
}

export const getProductsByDate = async (categorySlug) => {
    try {
        const response = await axios.get (`${baseURL}/products/categories`, {
            params: {
                consumer_key: username, 
                consumer_secret: password,
                slug: categorySlug
            }
        });

        if (response.data.length === 0 || !response.data[0].id) {
            console.error("Category not found for the provided slug.");
            return[];
        }

        const categoryId = response.data[0].id;

        const productsResponse = await axios.get(`${baseURL}/products`, {
            params: {
                consumer_key: username, 
                consumer_secret: password, 
                category: categoryId,
                orderby: "date",
                order: "desc"
            }
        });

        return productsResponse.data;
        
    } catch (error) {
        console.error("Eroare la obținerea produselor: ", error);
        return [];
    }
}

export const getProductsByCategorySlug = async (categorySlug) => {
    try {
        const response = await axios.get(`${baseURL}/products/categories`, {
            params: {
                consumer_key: username, 
                consumer_secret: password,
                slug: categorySlug
            }
        });

        if (response.data.length === 0 || !response.data[0].id) {
            console.error("Category not found for the provided slug.");
            return [];
        }
        
        const categoryId = response.data[0].id;

        const productsResponse = await axios.get(`${baseURL}/products`, {
            params: {
                consumer_key: username, 
                consumer_secret: password, 
                category: categoryId
            }
        });


        return productsResponse.data;

    } catch (error) {
        console.error("Eroare la obținerea produselor: ", error);
        return [];
    }    
};

export const getCategories = async () => {
    try {
        const resData = await axios.get(`${baseURL}/products/categories`,{
            params: {
                consumer_key: username,
                consumer_secret: password,
            }
        })

        return resData.data;
    }catch (error) {
        console.log(error);
        return[];
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

export const createOrder = async (formData, cartItems, totalPrice): Promise<OrderResponse | null> => {

    try {
        const resData = await axios.post(`${baseURL}/orders`, dataOrder(formData, cartItems, totalPrice), {
            params: {
                consumer_key: username,
                consumer_secret: password,
            }

        });

        return resData;

    } catch (error) {
        console.log('There was an error creating the order:', error);
        return null;
    }
}

export const getOrder = async (orderId) => {
    try {
        const resData = await axios.get(`${baseURL}/orders/${orderId}`, {
            params: {
                consumer_key: username,
                consumer_secret: password,
            }
        });
        return resData.data;
    } catch (error) {
        console.log('There was an error with getting the order:', error);
        return [];
    }
}

const dataOrder = (formData, cartItems, totalPrice) => {
    const lineItems = cartItems.map(item => ({
        product_id: item.id,
        quantity: item.quantity
    }));

  return {
    payment_method: formData.paymentMethod === "cash" ? "cod" : "bacs",
    payment_method_title: formData.paymentMethod === "cash" ? "Cash on Delivery" : "Direct Bank Transfer",
    set_paid: formData.paymentMethod === "cash" ? false : true,
    status: formData.paymentMethod === "cash" ? "processing" : "completed",
    billing: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        address_1: formData.addressLine1,
        address_2: formData.addressLine2,
        city: formData.city,
        state: formData.county, 
        postcode: formData.postalCode,
        country: formData.country,
        email: formData.email,
        phone: formData.phone
    },
    shipping: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        address_1: formData.addressLine1,
        address_2: formData.addressLine2,
        city: formData.city,
        state: formData.county,
        postcode: formData.postalCode,
        country: formData.country
    },
    line_items: lineItems,
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: totalPrice >= 300 ? "" : "19.99",
      },
    ],
  };
};