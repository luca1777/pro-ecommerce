import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    value: {
        cartAmount: number;
    }
}

const initialState: InitialState = {
    value: {
        cartAmount: 0,
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state) => {
            state.value.cartAmount += 1;
        },
        decrement: (state) => {
            state.value.cartAmount -= 1;
        } 
    }
})


export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;