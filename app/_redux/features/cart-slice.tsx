import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    items: []
}

const initialState: InitialState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProdToCart: (state, action) => {

            // todo get proudct to be added to cart
            const prodData= action.payload

            // todo update state with it
            state.items.push(prodData)
        },
        removeProdFromCart: (state, action) => {
            const prodData= action.payload

            // todo create a new list, without the product, and update the state
            const filteredData = state.items.filter( item => item.id !== prodData.id)

            state.items = filteredData
        },
        getCartItems: (state) => {
            return state.items
        }

    }
})


export const { addProdToCart, removeProdFromCart, getCartItems } = cartSlice.actions;
export default cartSlice.reducer;