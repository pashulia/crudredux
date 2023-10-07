import React from 'react';

import { useProducts } from '../../../hooks/products.hook';
import ProductList from './product-list.component';

const ProductListContainer: React.FC = () => {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return <ProductList products={products} />;
};

export default ProductListContainer;
