import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
    return <button className={className} {...rest} />;
};

export default Button;
