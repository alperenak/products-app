import React from 'react';
import styled from 'styled-components';
import { mediaBreakpointDown } from '../lib/mediaQueries';
import { Dropdown } from '../components/Dropdown';
import { BasketList } from './BasketList';
import { useDispatch, useSelector } from 'react-redux';
import { TYPES } from '../store/types';
import { Icon } from '../components/Icons';

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

const StyledLogoIcon = styled(Icon)`
  width: 142px;
  height: 41px;

  ${mediaBreakpointDown(500)} {
    width: 100px;
  }
`;

const StyledBasketIcon = styled(Icon)`
  width: 24px;
  height: 26px;
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
  display: none;

  ${mediaBreakpointDown(1290)} {
    display: flex;
    margin-top: 20px;
  }
`;

const StyledIcon = styled(Icon)`
  display: none;

  ${mediaBreakpointDown(980)} {
    display: block;
    position: absolute;
    left: 20px;
    stroke: #fff;
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
  const { sidebarIsOpen } = useSelector(state => state.sidebar);

  return (
    <StyledHeader>
      <StyledHeaderInnerWrapper>
        <StyledMenuWrapper>
          {sidebarIsOpen ? (
            <StyledIcon name="close" size={24} onClick={() => dispatch({ type: TYPES.SET_TOGGLE_SIDEBAR })} />
          ) : (
            <StyledIcon name="menu" size={24} onClick={() => dispatch({ type: TYPES.SET_TOGGLE_SIDEBAR })} />
          )}
          <StyledLogoIcon name="logo" />
        </StyledMenuWrapper>
        <StyledBasketWrapper>
          <Dropdown content={<StyledBasketList basketRef={basketListRef} />}>
            <StyledBasket onClick={() => dispatch({ type: TYPES.SET_TOGGLE_BASKET })}>
              <StyledBasketInnerWrapper>
                <StyledBasketIcon name="basket" />
                <StyledBasketPrice>??? {totalPrice}</StyledBasketPrice>
              </StyledBasketInnerWrapper>
            </StyledBasket>
          </Dropdown>
        </StyledBasketWrapper>
      </StyledHeaderInnerWrapper>
    </StyledHeader>
  );
};
