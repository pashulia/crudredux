import { ProductStateModel } from '../../models/product-state.model';
import { RootState } from '../store';

// функция принимает объект state, представляющий состояние Redux, и возвращает ProductStateModel,
// которая является частью состояния, связанной с продуктами.
// Эта функция фактически выполняет селектор для извлечения объекта ProductStateModel из
// состояния приложения.
const selectProductState = (state: RootState): ProductStateModel => state.product;

// функция принимает state, представляющий состояние Redux, и вызывает selectProductState
// для извлечения ProductStateModel. Затем она извлекает массив продуктов, предполагая,
// что ProductStateModel имеет свойство products, и возвращает этот массив.
export const selectProducts = (state: RootState) => selectProductState(state).products;

// RootState - это тип, который представляет корневой объект состояния приложения в Redux.
// В Redux, состояние приложения может содержать различные срезы состояния (slices),
// каждый из которых управляет различными частями данных в приложении.

// RootState используется для определения структуры и типов всего состояния приложения.
// Он представляет корневой объект, который содержит все срезы состояния,
// предоставляемые различными редюсерами в приложении. Это помогает обеспечить типовую
// безопасность и интеграцию между компонентами и состоянием Redux.

// Обычно RootState определяется в файле, который собирает и объединяет все срезы состояния
// в один корневой объект.