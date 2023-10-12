import axios, { AxiosResponse } from 'axios';

import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModel } from '../models/product.model';

// функция отправляет GET-запрос на URL, определенный в PRODUCTS_URL,
// чтобы получить список продуктов с сервера. Она возвращает объект Promise,
// который ожидает AxiosResponse с массивом продуктов типа ProductModel[].
// Полученный ответ содержит данные о продуктах, и функция оборачивает их в AxiosResponse,
// который может быть далее обработан в коде приложения.
export async function fetchProductsApi(): Promise<AxiosResponse<ProductModel[]>> {
    return await axios.get<ProductModel[]>(PRODUCTS_URL);
}
// функция отправляет POST-запрос на URL PRODUCTS_URL, чтобы создать новый продукт
// на сервере. Она принимает объект product с данными о новом продукте (частичные данные Partial<ProductModel>).
// Затем она возвращает объект Promise, ожидающий AxiosResponse с данными созданного продукта типа ProductModel.
// Ответ от сервера включает созданный продукт, и эта функция также оборачивает его в AxiosResponse,
// чтобы обработать результат в коде приложения.
export async function createProductApi(product: Partial<ProductModel>): Promise<AxiosResponse<ProductModel>> {
    return await axios.post<ProductModel>(PRODUCTS_URL, product);
}

// формат AxiosResponse, содержит информацию о статусе запроса и полученных данных