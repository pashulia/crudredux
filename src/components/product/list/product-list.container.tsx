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
    const productList = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchProductsApi();
                dispatch(setProductsAction(response.data));
            } catch (error) {
                console.error('Error loading products:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div>
            <ProductList products={productList} />
            <ProductCreationContainer/>
        </div>
        
    );
};

export default ProductListContainer;
