import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from './Icons';

const StyledRadiosContent = styled.div``;

const StyledRadioWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const StyledRadio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid ${({ isActive }) => (isActive ? '#1ea4ce' : '#dfdee2')};
  transition: 0.2s all;
`;

const StyledRadioLabel = styled.div`
  letter-spacing: 0.16px;
  font-size: 14px;
  line-height: 18px;
  margin-left: 12px;
  color: #525252;
`;

const StyledIcon = styled(Icon)`
  width: 10px;
  height: 7px;
  stroke: #1ea4ce;
`;

export const Radios = ({ data, onChange, selectedOptionId, ...rest }) => {
  const [selectedRadioId, setSelectedRadioId] = React.useState(selectedOptionId);

  const handleClick = id => {
    setSelectedRadioId(id);
    if (onChange) onChange(id);
  };

  return (
    <StyledRadiosContent {...rest}>
      {data.map(item => (
        <StyledRadioWrapper onClick={() => handleClick(item.id)} key={item.id}>
          <StyledRadio isActive={item.id === selectedRadioId}>
            {item.id === selectedRadioId && <StyledIcon name="vector" />}
          </StyledRadio>
          <StyledRadioLabel>{item.label}</StyledRadioLabel>
        </StyledRadioWrapper>
      ))}
    </StyledRadiosContent>
  );
};

Radios.propTypes = {
  data: Proptypes.array.isRequired,
  onChange: Proptypes.func.isRequired,
  selectedOptionId: Proptypes.string,
};
