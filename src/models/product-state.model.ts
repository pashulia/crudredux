import { ProductModel } from './product.model'; // Импортируйте модель продукта, если она не была импортирована ранее

export interface ProductStateModel {
  products: ProductModel[]; // Массив продуктов
  // Другие поля состояния, если необходимо
}

export default ProductStateModel;
