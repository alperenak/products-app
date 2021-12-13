import React from 'react';
import styled from 'styled-components';
import { Counter } from './Counter';

const StyledBasketList = styled.div`
  background: #1ea4ce;
  border-radius: 2px;
  height: 338.25px;
  width: 296px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40.88px;
`;

const StyledBasketInnerWrapper = styled.div`
  background: #ffffff;
  border-radius: 2px;
  height: 321.9px;
  width: 280px;
  border-radius: 2px;
  padding: 26.27px 16px 16.66px;
  position: relative;
`;

const StyledBasketTotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 16.66px;
  right: 16px;
  height: 51.1px;
  width: 92px;
  border-radius: 2px;
  border: 2px solid #1ea4ce;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #1ea4ce;
`;

const StyledCounterWrapper = styled.div`
  height: calc(100% - 65px);
  overflow-y: auto;
`;

export const BasketList = ({ ref, ...rest }) => {
  return (
    <StyledBasketList ref={ref} {...rest}>
      <StyledBasketInnerWrapper>
        <StyledCounterWrapper>
          <Counter price={14.99} name="Example Product" itemCount={1} />
          <Counter price={14.99} name="Example Product" itemCount={1} />
          <Counter price={14.99} name="Example Product" itemCount={1} />
          <Counter price={14.99} name="Example Product" itemCount={1} />
          <Counter price={14.99} name="Example Product" itemCount={1} />
          <Counter price={14.99} name="Example Product" itemCount={1} />
        </StyledCounterWrapper>
        <StyledBasketTotalPrice>₺39,97</StyledBasketTotalPrice>
      </StyledBasketInnerWrapper>
    </StyledBasketList>
  );
};
