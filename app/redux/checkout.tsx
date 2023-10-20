'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface FormState {
    form: {
        firstName: string,
        lastName:string
    }
}

const initialState: FormState = {
    form: {
        firstName:"alex ",
        lastName:"pistol",
    }
}

export const checkout = createSlice({
    name: 'checkoutForm',
    initialState,
    reducers: {
        updateFirstName: (state,action) => ({ form: {
            ...state.form,
            firstName:action.payload
        } }),
    }
})

export const { updateFirstName } = checkout.actions;

export default checkout.reducer;