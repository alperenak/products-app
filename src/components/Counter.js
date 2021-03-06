import Proptypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icons';

const StyledCounterWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1.02px solid #f4f4f4;
  height: 76.64px;
  padding-top: 17.35px;

  &:first-child {
    height: 59.29px;
    padding: 0;
  }
`;

const StyledProduct = styled.div`
  padding-left: 6px;
  width: 160px;
`;

const StyledProductName = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #191919;
`;

const StyledProductPrice = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #1ea4ce;
  line-break: break-word;
`;

const StyledCounter = styled.div`
  display: flex;
  width: 74px;
  height: 32.7px;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  margin-right: 7px;
`;

const StyledCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 37px;
  background: #1ea4ce;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: #ffffff;
  letter-spacing: 0px;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  width: ${({ name }) => (name === 'minus' ? '10px' : '12px')};
  height: ${({ name }) => (name === 'minus' ? '3px' : '12px')};
`;

export const Counter = ({ name, price, itemCount, onChangeCount }) => {
  const [count, setCount] = React.useState(itemCount);

  React.useEffect(() => setCount(itemCount), [itemCount]);

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      if (onChangeCount) onChangeCount(count - 1);
    }
  };

  const handleIncreaseCount = () => {
    setCount(count + 1);
    if (onChangeCount) onChangeCount(count + 1);
  };

  return (
    <StyledCounterWrapper>
      <StyledProduct>
        <StyledProductName>{name}</StyledProductName>
        <StyledProductPrice>₺{price}</StyledProductPrice>
      </StyledProduct>
      <StyledCounter>
        <StyledIcon name="minus" onClick={handleDecreaseCount} color="#1ea5c3" />
        <StyledCount>{count}</StyledCount>
        <StyledIcon name="plus" onClick={handleIncreaseCount} color="#1ea5c3" />
      </StyledCounter>
    </StyledCounterWrapper>
  );
};

Counter.propTypes = {
  name: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
  itemCount: Proptypes.number.isRequired,
  onChangeCount: Proptypes.func.isRequired,
};
