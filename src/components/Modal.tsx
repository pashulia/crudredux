import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { ReactComponent as CloseIcon } from '../assets/icons/cross.svg';

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 29, 29, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 400px;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const ModalTitle = styled.h2`
    font-size: 18px;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`;

interface ModalProps {
    title: string;
    visible: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, visible, onClose, children }) => {
    if (!visible) {
        return null;
    }

    return (
        <ModalBackdrop>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <CloseButton onClick={onClose}>
                        <CloseIcon />
                    </CloseButton>
                </ModalHeader>
                {children}
            </ModalContent>
        </ModalBackdrop>
    );
};

export default Modal;
