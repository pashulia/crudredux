// настройка хранилища Redux с использованием Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

import productReducer from './product/product.slice';

// создание хранилища Redux с использованием configureStore
export const store = configureStore({
    // передается объект, где ключ product связывается с редюсером productReducer.
    // Это означает, что состояние продуктов будет управляться этим редюсером.
    reducer: {
        product: productReducer,
    },
});
// RootState экспортируется с использованием ReturnType<typeof store.getState>.
// Этот тип представляет корневой состояния Redux и может быть использован для
// аннотации типов в компонентах и селекторах Redux.
export type RootState = ReturnType<typeof store.getState>;

// создано хранилище Redux, которое будет использоваться для хранения состояния продуктов
// и любых других состояний, если они будут добавлены в будущем. Это хранилище будет
// доступно для использования во всем приложении