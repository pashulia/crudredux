import React from 'react';

import { ProductModel } from '../../../models/product.model';
import { ProductCard } from '../card/product-card.component';

interface ProductListProps {
    products: ProductModel[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <ProductCard {...product}/>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
