import {
    useEffect,
    useState,
} from 'react';

import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';

export function useProducts() {
    // Создаются три состояния с помощью хука useState:
    // products: массив, который будет содержать загруженные продукты.
    const [products, setProducts] = useState<ProductModel[]>([]);
    // loading: булевое значение, которое указывает на состояние загрузки (истина, когда данные загружаются, иначе ложь).
    const [loading, setLoading] = useState<boolean>(true);
    // error: строка, которая будет содержать сообщение об ошибке, если запрос не удался.
    const [error, setError] = useState<string>('');

    // Определяем асинхронная функция fetchProducts, которая будет выполнять запрос на загрузку данных
    // с использованием функции fetchProductsApi.
    async function fetchProducts() {
        // Если запрос выполнен успешно, то данные продуктов из ответа записываются
        // в состояние products с помощью setProducts
        try {
            const response = await fetchProductsApi();
            setProducts(response.data);
        // Если происходит ошибка, то текст ошибки записывается в состояние error
        } catch (e) {
            setError(`Something went wrong! Error: ${e}`);
        // Независимо от того, был ли запрос успешным или возникла ошибка,
        // состояние loading устанавливается в false, чтобы указать, что загрузка завершена.
        } finally {
            setLoading(false);
        }
    }

    // эффект выполняется при монтировании компонента (пустой массив зависимостей [] указывает,
    // что он выполняется только при монтировании). Внутри этого эффекта вызывается
    // функция fetchProducts, что инициирует загрузку данных после монтирования компонента.
    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, loading, error };
}
