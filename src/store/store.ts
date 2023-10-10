import { configureStore } from '@reduxjs/toolkit';

import productReducer from './product/product.slice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        // Другие редюсеры, если есть
    },
});

export type RootState = ReturnType<typeof store.getState>;