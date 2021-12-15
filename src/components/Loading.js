import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icons';

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.7);
`;

const StyledIcon = styled(Icon)`
  width: 100px;
  height: 100px;
`;

export const Loading = () => {
  return (
    <StyledLoading>
      <StyledIcon name="loading" />
    </StyledLoading>
  );
};
