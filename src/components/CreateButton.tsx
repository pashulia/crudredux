import React from 'react';

import styled from 'styled-components';

const ButtonWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

const CreateButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <ButtonWrapper>
            <button onClick={onClick}>+</button>
        </ButtonWrapper>
    );
};

export default CreateButton;
