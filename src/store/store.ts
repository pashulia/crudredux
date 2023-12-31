// настройка хранилища Redux с использованием Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

import productReducer from './product/product.slice';

// создание хранилища Redux с использованием configureStore
// configureStore - это функция, предоставляемая Redux Toolkit, которая упрощает настройку
// и создание Redux-хранилища (store). Она обеспечивает ряд умолчательных настроек и интеграцию
// с другими частями Redux Toolkit, что делает создание и настройку хранилища более удобными.
// configureStore позволяет вам определить следующие параметры:
// reducer: Объект редукторов, созданных с помощью createSlice, createReducer или других инструментов Redux Toolkit.
// middleware: Список middleware, таких как thunk, logger и другие, которые обрабатывают действия перед тем,
// как они достигнут редукторов.
// devTools: Включает интеграцию с браузерными расширениями для разработчиков Redux, такими как Redux DevTools.
// Это позволяет отслеживать состояние хранилища и действий во время разработки.
// preloadedState: Начальное состояние хранилища.
// enhancers: Дополнительные улучшения хранилища, которые могут быть добавлены, например, для интеграции с
// другими инструментами.
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