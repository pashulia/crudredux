import React, { useEffect } from 'react';

import {
    useDispatch,
    useSelector,
} from 'react-redux';

//useDispatch - это хук, предоставляемый библиотекой Redux, который позволяет компонентам
// React отправлять (dispatch) действия в Redux-хранилище. Этот хук дает компонентам
// доступ к функции dispatch, которая используется для отправки действий,
// что в свою очередь приводит к изменению состояния в Redux.
// useDispatch удобен для компонентов, которым нужно взаимодействовать с глобальным состоянием
// в Redux. Вместе с useSelector (для чтения состояния) и другими хуками Redux,
// он делает работу с Redux более удобной и декларативной в функциональных компонентах.
//
// useSelector - это еще один хук, предоставляемый библиотекой Redux,
// который позволяет компонентам React получать доступ к данным из
// глобального состояния (store) и подписываться на их изменения.
// Он используется для чтения данных из Redux-хранилища и вызывается внутри
// функциональных компонентов. useSelector автоматически обновляет компонент
// при изменении данных в Redux-хранилище, если данные, на которые подписан компонент,
// изменяются.
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
