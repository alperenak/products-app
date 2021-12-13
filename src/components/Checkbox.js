import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as Check } from '../assets/icons/vector.svg';

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isChecked }) => (isChecked ? '#1ea4ce' : '#ffffff')};
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
  border-radius: 2px;
  height: 22px;
  width: 22px;
  transition: all 0.2s;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer; ;
`;

const StyledCheckboxLabel = styled.div`
  margin-left: 8px;
  display: flex;
  width: 200px;
`;

const StyledCheckboxLabelText = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
`;

const StyledCheckboxCount = styled.span`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #a8a8a8;
  margin-left: 4px;
`;

export const Checkbox = ({ checked, label, onChange, count, ...rest }) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };

  React.useEffect(() => {
    if (checked) setIsChecked(checked);
  }, [checked]);

  return (
    <StyledCheckboxWrapper onClick={handleClick} {...rest}>
      <StyledCheckbox isChecked={isChecked}>
        {isChecked && <Check width={10.67} height={7.33} stroke="#fff" />}
      </StyledCheckbox>
      <StyledCheckboxLabel>
        <StyledCheckboxLabelText>{label}</StyledCheckboxLabelText>
        <StyledCheckboxCount> ({count})</StyledCheckboxCount>
      </StyledCheckboxLabel>
    </StyledCheckboxWrapper>
  );
};

Checkbox.propTypes = {
  checked: Proptypes.bool.isRequired,
  label: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  count: Proptypes.number.isRequired,
};
