import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as Basket } from '../assets/icons/basket.svg';
import { ReactComponent as Menu } from '../assets/icons/menu.svg';
import { mediaBreakpointDown } from '../lib/mediaQueries';
import { Dropdown } from './Dropdown';
import { BasketList } from './BasketList';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../store/types';

const StyledHeader = styled.div`
  width: 100%;
  height: 76.64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1ea4ce;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const StyledHeaderInnerWrapper = styled.div`
  width: 1231px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledLogo = styled(Logo)`
  ${mediaBreakpointDown(500)} {
    width: 100px;
  }
`;

const StyledBasket = styled.div`
  width: 129px;
  height: 76.64px;
  background: #147594;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mediaBreakpointDown(1290)} {
    cursor: pointer;
  }
`;

const StyledBasketInnerWrapper = styled.div`
  width: 81px;
  height: 24.53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBasketPrice = styled.div`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.16px;
  color: #ffffff;
  text-align: center;
  height: 18.39px;
  white-space: nowrap;
`;

const StyledBasketWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const StyledBasketList = styled(BasketList)`
  margin-top: 20px;
`;

const StyledMenu = styled(Menu)`
  display: none;

  ${mediaBreakpointDown(980)} {
    display: block;
    position: absolute;
    left: 20px;
    width: 24px;
    color: #fff;
    cursor: pointer;
  }

  ${mediaBreakpointDown('500')} {
    display: block;
    margin-right: 20px;
    width: 24px;
    color: #fff;
    cursor: pointer;
    position: unset;
  }
`;

const StyledMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  ${mediaBreakpointDown(500)} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20px;
  }
`;

export const Header = () => {
  const basketListRef = React.useRef(null);
  const dispatch = useDispatch();
  const { totalPrice } = useSelector(state => state.basket);

  return (
    <StyledHeader>
      <StyledHeaderInnerWrapper>
        <StyledMenuWrapper>
          <StyledMenu onClick={() => dispatch({ type: TYPES.SET_TOGGLE_SIDEBAR })} />
          <StyledLogo />
        </StyledMenuWrapper>
        <StyledBasketWrapper>
          <Dropdown content={<StyledBasketList basketRef={basketListRef} />}>
            <StyledBasket onClick={() => dispatch({ type: TYPES.SET_TOGGLE_BASKET })}>
              <StyledBasketInnerWrapper>
                <Basket />
                <StyledBasketPrice>₺ {totalPrice}</StyledBasketPrice>
              </StyledBasketInnerWrapper>
            </StyledBasket>
          </Dropdown>
        </StyledBasketWrapper>
      </StyledHeaderInnerWrapper>
    </StyledHeader>
  );
};
