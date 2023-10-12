import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { ProductModel } from '../../models/product.model';

interface ProductStateModel {
    products: ProductModel[];
}

const initialState: ProductStateModel = {
    products: [],
};
// Создание среза productSlice
const productSlice = createSlice({
    // имя среза 
    name: 'product',
    // начальное состояние среза
    initialState,
    // объект, содержащий действия для изменения состояния
    reducers: {
        // действие принимает текущее состояние state и action, которое содержит массив ProductModel[]
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            // массив продуктов обновляется с использованием action.payload
            state.products = action.payload;
        },
    },
});
// экспортируем действие, которое будет использоваться для обновления состояния
export const { setProductsAction } = productSlice.actions;
// редюсер, который будет объединен в корневом редюсере при настройке хранилища Redux
export default productSlice.reducer;

// Этот срез позволяет вам использовать setProductsAction для обновления состояния Redux
// с новым массивом продуктов. Когда это действие диспетчеризируется, Redux Toolkit
// автоматически обрабатывает обновление состояния, и компоненты, подписанные на изменения
// этого состояния, будут обновлены.