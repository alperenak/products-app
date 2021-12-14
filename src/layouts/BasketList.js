import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { TYPES } from '../store/types';
import { Counter } from '../components/Counter';

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
  outline: none;
`;

const StyledBasketInnerWrapper = styled.div`
  background: #ffffff;
  border-radius: 2px;
  height: 321.9px;
  width: 280px;
  border-radius: 2px;
  padding: 26.27px 8px 16.66px;
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
  overflow-y: scroll;
  padding: 0 8px;
  color: #191919;
`;

export const BasketList = ({ className, basketRef }) => {
  const { basketList, totalPrice } = useSelector(state => state.basket);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const total = basketList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);

    dispatch({ type: TYPES.SET_BASKET_TOTAL_PRICE, payload: total.toFixed(2) });
  }, [basketList, dispatch]);

  const handleOnChange = (name, count) => {
    if (count === 0) dispatch({ type: TYPES.REMOVE_FROM_BASKET_LIST, payload: name });
    else dispatch({ type: TYPES.SET_BASKET_ITEM_QUANTITY, payload: { name, count } });
  };

  return (
    <StyledBasketList className={className} ref={basketRef}>
      <StyledBasketInnerWrapper>
        <StyledCounterWrapper>
          {basketList.length !== 0
            ? basketList.map(item => (
                <Counter
                  key={item.name}
                  price={item.price}
                  name={item.name}
                  itemCount={item.count}
                  onChangeCount={count => handleOnChange(item.name, count)}
                />
              ))
            : 'No items in basket'}
        </StyledCounterWrapper>
        <StyledBasketTotalPrice>₺{totalPrice}</StyledBasketTotalPrice>
      </StyledBasketInnerWrapper>
    </StyledBasketList>
  );
};
