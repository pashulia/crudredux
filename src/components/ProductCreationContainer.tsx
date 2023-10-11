import React, { useState } from 'react';

import {
    useDispatch,
    useSelector,
} from 'react-redux';

import { ProductModel } from '../models/product.model';
import { createProductApi } from '../services/product-api.service';
import { selectProducts } from '../store/product/product.selectors';
import { setProductsAction } from '../store/product/product.slice';
import CreateButton from './CreateButton';
import Modal from './Modal';
import ProductCreationForm from './ProductCreationForm';

const ProductCreationContainer: React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const productList = useSelector(selectProducts);
    const dispatch = useDispatch();

    const handleCreateButtonClick = () => {
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const handleSubmit = async (product: Partial<ProductModel>) => {
        try {
            const response = await createProductApi(product);
            // Если создание продукта успешно, обновляем глобальное Redux-состояние
            dispatch(setProductsAction([response.data, ...productList])); // Используем dispatch
        } catch (error) {
            console.error('Error creating product:', error);
        } finally {
            // Закрываем модальное окно независимо от результата запроса.
            handleModalClose();
        }
    };

    return (
        <>
            <CreateButton onClick={handleCreateButtonClick} />
            <Modal title="Create Product" visible={modalVisible} onClose={handleModalClose}>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
        </>
    );
};

export default ProductCreationContainer;
