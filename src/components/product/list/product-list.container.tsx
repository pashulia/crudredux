import React from 'react';

import { useSelector } from 'react-redux';

import { selectProducts } from '../../../store/product/product.selectors';
import ProductList from './product-list.component';

const ProductListContainer: React.FC = () => {
    const productList = useSelector(selectProducts);

    return <ProductList products={productList} />;
};

export default ProductListContainer;
