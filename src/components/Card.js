import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const CARD_TYPES = {
  SMALL: 'sm',
  LARGE: 'lg',
};

const getWidthByType = type => {
  switch (type) {
    case CARD_TYPES.SMALL:
      return '296px';
    case CARD_TYPES.LARGE:
      return '608px';
    default:
      return '100%';
  }
};

const StyledCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 12px;
  width: ${({ type }) => getWidthByType(type)};
`;

const StyledCardTitle = styled.div`
  margin-bottom: 12px;
  color: #697488;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
`;

export const Card = ({ children, title, type, ...rest }) => {
  return (
    <div {...rest}>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCard type={type}>{children}</StyledCard>
    </div>
  );
};

Card.propTypes = {
  title: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
};
