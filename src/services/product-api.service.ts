import axios, { AxiosResponse } from 'axios';

import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModel } from '../models/product.model';

export async function fetchProductsApi(): Promise<AxiosResponse<ProductModel[]>> {
    return await axios.get<ProductModel[]>(PRODUCTS_URL);
}

export async function createProductApi(product: Partial<ProductModel>): Promise<AxiosResponse<ProductModel>> {
    return await axios.post<ProductModel>(PRODUCTS_URL, product);
}
