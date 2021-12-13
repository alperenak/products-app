import Proptypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const StyledProductCard = styled.div`
  width: 124px;
  height: 225px;
`;

const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fefefe;
  border: 1.17px solid #f3f0fe;
  border-radius: 12px;
  height: 124px;
  width: 124px;
`;

const StyledImage = styled.img`
  height: 100%;
`;

const StyledProductPrice = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #1ea4ce;
  margin-top: 8px;
  font-weight: 600;
`;

const StyledProductName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  margin-bottom: 8px;
  height: 40px;
`;

const StyledImageInnerWrapper = styled.div`
  width: 92px;
  height: 92px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductCard = ({ price, image, name, ...rest }) => {
  return (
    <StyledProductCard {...rest}>
      <StyledImageWrapper>
        <StyledImageInnerWrapper>
          <StyledImage src={image} />
        </StyledImageInnerWrapper>
      </StyledImageWrapper>
      <StyledProductPrice>₺ {price}</StyledProductPrice>
      <StyledProductName>{name}</StyledProductName>
      <Button>Add</Button>
    </StyledProductCard>
  );
};

ProductCard.propTypes = {
  price: Proptypes.number,
  image: Proptypes.string,
  name: Proptypes.string,
};
