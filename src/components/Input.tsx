import React, {
    ChangeEvent,
    useState,
} from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
    const [innerValue, setInnerValue] = useState(rest.value || '');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value);
        if (rest.onChange) {
            rest.onChange(e);
        }
    };

    return <input value={innerValue} onChange={handleChange} className={className} {...rest} />;
};

export default Input;
