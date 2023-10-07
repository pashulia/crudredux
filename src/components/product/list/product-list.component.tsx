import React from 'react';

import { ProductModel } from '../../../models/product.model';

interface ProductListProps {
    products: ProductModel[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;