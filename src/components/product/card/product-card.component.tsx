import React, {
    FC,
    memo,
} from 'react';

import styled from 'styled-components';

import { ProductModel } from '../../../models/product.model';
import Description from '../../Description';

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const ProductImage = styled.img`
    max-width: 100px;
    max-height: 100px;
    object-fit: contain;
    margin-right: 16px;
`;

const ProductInfo = styled.div`
    flex: 1;
`;

const ProductTitle = styled.h2`
    font-size: 18px;
`;

const ProductPrice = styled.div`
    font-size: 16px;
`;

type ProductCardProps = ProductModel;

export const ProductCard: FC<ProductCardProps> = ({ title, image, price, description }) => {
    return (
        <CardContainer>
            <ProductImage src={image} alt={title} />
            <ProductInfo>
                <ProductTitle>{title}</ProductTitle>
                <Description text={description} maxLength={150} />
            </ProductInfo>
            <ProductPrice>${price}</ProductPrice>
        </CardContainer>
    );
};

export default memo(ProductCard);
