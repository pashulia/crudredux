import React, {
    useCallback,
    useMemo,
    useState,
} from 'react';

const MAX_LENGTH = 150;

interface DescriptionProps {
    text: string;
    maxLength?: number;
}

const Description: React.FC<DescriptionProps> = ({ text, maxLength = MAX_LENGTH }) => {
    const [showFullText, setShowFullText] = useState(false);

    // Обрезаем текст, если он превышает maxLength
    const truncatedText = useMemo(() => {
        if (text.length > maxLength && !showFullText) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }, [text, maxLength, showFullText]);

    // Функция для переключения режима отображения текста
    const toggleTextVisibility = useCallback(() => {
        setShowFullText((prevShowFullText) => !prevShowFullText);
    }, []);

    return (
        <div>
            {truncatedText}
            {text.length > maxLength && (
                <button onClick={toggleTextVisibility}>
                    {showFullText ? 'Hide Details' : 'Show Details'}
                </button>
            )}
        </div>
    );
};

export default Description;
