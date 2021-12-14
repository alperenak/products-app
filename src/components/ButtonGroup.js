import Proptypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled.div`
  height: 30px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isActive }) => (isActive ? '#1EA4CE' : '#F2F0FD')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#1EA4CE')};
  cursor: pointer;
  border-radius: 2px;
  margin-right: 8px;
  font-weight: 600;
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
        // TODO use button component with type SM || MD
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
};
