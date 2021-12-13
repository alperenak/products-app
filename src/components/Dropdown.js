import React from 'react';
import styled from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { mediaBreakpointUp } from '../lib/mediaQueries';
import Proptypes from 'prop-types';

const StyledDropdownContent = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  display: none;

  ${mediaBreakpointUp(1290)} {
    display: none;
  }
`;

const StyledDropdown = styled.div`
  position: relative;

  &:focus-within ${StyledDropdownContent} {
    display: block;
  }
`;

const StyledChildrenWrapper = styled.div``;

export const Dropdown = ({ children, content }) => {
  const dropdownRef = React.useRef(null);
  const isClickedOutside = useOutsideClick(dropdownRef);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isClickedOutside) setIsOpen(false);
  }, [isClickedOutside]);

  return (
    <StyledDropdown tabIndex={0}>
      <StyledChildrenWrapper onClick={() => setIsOpen(!isOpen)}>{children}</StyledChildrenWrapper>
      <StyledDropdownContent tabIndex={0} ref={dropdownRef}>
        {content}
      </StyledDropdownContent>
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  children: Proptypes.node.isRequired,
  content: Proptypes.node.isRequired,
};
