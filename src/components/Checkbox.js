import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from './Icons';

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
  color: #525252;
`;

const StyledCheckboxCount = styled.span`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.16px;
  color: #a8a8a8;
  margin-left: 4px;
`;

const StyledIcon = styled(Icon)`
  width: 10.67px;
  height: 7.33px;
  stroke: #fff;
`;

export const Checkbox = ({ checked = false, label, onChange, count, ...rest }) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <StyledCheckboxWrapper onClick={handleClick} {...rest}>
      <StyledCheckbox isChecked={isChecked}>{isChecked && <StyledIcon name="vector" />}</StyledCheckbox>
      <StyledCheckboxLabel title={`${label} (${count})`}>
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
