'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './checkout';

export const store:any = configureStore({
    reducer: {
        checkout: counterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;