import Proptypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  height: 30px;
  padding: 0 16px;
  background: ${({ isActive }) => (isActive ? '#1EA4CE' : '#F2F0FD')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#1EA4CE')};
  margin-right: 8px;
  font-size: 13px;
  line-height: 18px;
`;

export const ButtonGroup = ({ data, onChange, selectedButtonId, ...rest }) => {
  const [activeButtonId, setActiveButtonId] = React.useState(selectedButtonId ?? data[0].id);
  const handleOnClick = (id, value) => {
    setActiveButtonId(id);
    if (onChange) onChange({ id, value });
  };

  return (
    <StyledButtonGroup {...rest}>
      {data.map(button => (
        <StyledButton
          onClick={() => handleOnClick(button.id, button.value)}
          isActive={activeButtonId === button.id}
          key={button.id}
        >
          {button.value}
        </StyledButton>
      ))}
    </StyledButtonGroup>
  );
};

ButtonGroup.propTypes = {
  data: Proptypes.array.isRequired,
  onChange: Proptypes.func.isRequired,
  selectedButtonId: Proptypes.string,
};
