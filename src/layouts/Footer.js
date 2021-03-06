import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const StyledLink = styled.a`
  font-size: 13px;
  line-height: 23px;
  color: #1ea4ce;
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  text-decoration: none;
`;

const StyledDot = styled.div`
  margin: 0 16px;
  color: #1ea4ce;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink href="">©2019 Market</StyledLink>
      <StyledDot>•</StyledDot>
      <StyledLink href="">Privacy Policy</StyledLink>
    </StyledFooter>
  );
};
