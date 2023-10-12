import React, {
    FormEvent,
    useState,
} from 'react';

import { ProductModel } from '../models/product.model';
import Button from './Button';
import Input from './Input';

interface ProductCreationFormProps {
    onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // FormEvent - это событие, которое происходит при отправке формы (например,
    // при нажатии кнопки "Submit" в форме HTML). Он представляет собой событие,
    // связанное с HTML-формой и может быть использовано в React или чистом JavaScript
    // для обработки отправки формы.
    // FormEvent предоставляет информацию о событии отправки формы, такую как:
    // event.target: Ссылка на элемент <form>, к которому применяется событие.
    // event.preventDefault(): Метод, который может быть вызван для предотвращения
    // стандартного поведения отправки формы (например, перезагрузки страницы).
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({ title, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button type="submit">Create</Button>
        </form>
    );
};

export default ProductCreationForm;
