import Proptypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
  background: #1ea4ce;
  color: #fff;
  cursor: pointer;
  border-radius: 2px;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
`;

export const Button = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: Proptypes.func,
  children: Proptypes.node,
};
