import React, { useEffect } from 'react';

import {
    useDispatch,
    useSelector,
} from 'react-redux';

import { fetchProductsApi } from '../../../services/product-api.service';
import { selectProducts } from '../../../store/product/product.selectors';
import { setProductsAction } from '../../../store/product/product.slice';
import ProductCreationContainer from '../../ProductCreationContainer';
import ProductList from './product-list.component';

const ProductListContainer: React.FC = () => {
    //используем хук useSelector из библиотеки react-redux,
    // чтобы получить список продуктов из Redux-стейта.
    const productList = useSelector(selectProducts);
    // используем хук useDispatch для получения объекта dispatch,
    // который позволяет диспатчить(отправлять) действия к Redux-стору
    const dispatch = useDispatch();

    useEffect(() => {
        // выполняем асинхронный запрос к серверу с помощью fetchProductsApi
        // для загрузки списка продуктов.
        const fetchData = async () => {
            try {
                const response = await fetchProductsApi();
                // при успешной загрузки данных, диспатчим действие setProductsAction
                // с данными о продуктах, которые обновят состояние Redux
                // с новым списком продуктов.
                dispatch(setProductsAction(response.data));
            } catch (error) {
                // отлавливаем ошибки и логируем в консоль
                console.error('Error loading products:', error);
            }
        };

        fetchData();
    }, [dispatch]);
    // после загрузки данных (либо успешной, либо с ошибкой),
    // список продуктов в Redux-стейте будет обновлен

    return (
        <div>
            <ProductList products={productList} />
            <ProductCreationContainer/>
        </div>
        
    );
};

export default ProductListContainer;
