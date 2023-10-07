import React from 'react';

import { ProductCard } from './components/product/card/product-card.component';
import { productListData } from './data/product.data';
import { ProductModel } from './models/product.model';

const App: React.FC = () => {
    const product: ProductModel = productListData[0];

    return (
        <div className="App">
            <ProductCard {...product} />
        </div>
    );
};

export default App;
