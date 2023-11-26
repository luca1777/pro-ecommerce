import React from 'react'
import {useAppSelector} from "@/app/_redux/store";

const CartModal = () => {

    // todo fetch products from store ( getCartItems action)

    const cartItems = useAppSelector((state) => state.items);


    // todo display them

    return (
        <div>CartModal</div>
    )
}
export default CartModal
