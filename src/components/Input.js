import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const StyledInput = styled.input`
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  padding: 12px 16px;
  height: 48px;
  outline: none;
  width: 100%;
  font-family: 'Inter', sans-serif;

  &::placeholder {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
`;

export const Input = ({ placeholder, onChange, ...rest }) => {
  return (
    <div {...rest}>
      <StyledInput placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

Input.propTypes = {
  placeholder: Proptypes.string.isRequired,
  onChange: Proptypes.func,
};
