import {
    useEffect,
    useState,
} from 'react';

import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';

export function useProducts() {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    async function fetchProducts() {
        try {
            const response = await fetchProductsApi();
            setProducts(response.data);
        } catch (e) {
            setError(`Something went wrong! Error: ${e}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, error };
}
