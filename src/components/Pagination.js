import Proptypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { mediaBreakpointDown } from '../lib/mediaQueries';
import { Icon } from './Icons';

const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #697488;
  cursor: pointer;

  svg {
    fill: #697488;
  }

  &:hover {
    color: #1ea4ce;

    svg {
      fill: #1ea4ce;
    }
  }
`;

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  list-style-type: none;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;

  .previous {
    position: absolute;
    left: 36px;

    ${mediaBreakpointDown('mobile')} {
      left: 0;
    }
  }
  .next {
    position: absolute;
    right: 36px;

    ${mediaBreakpointDown('mobile')} {
      right: 0;
    }
  }

  .rp-page {
    list-style-type: none;
    cursor: pointer;
    color: #697488;
    transition: background 0.2s;
    border-radius: 2px;

    ${mediaBreakpointDown(500)} {
      display: none;
    }
  }

  .rp-link {
    height: 100%;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0px;

    &:hover {
      color: #1ea4ce;
    }
  }

  .rp-break {
    width: 32px;
    height: 40px;
    cursor: pointer;

    &:hover svg {
      fill: #1ea4ce;
    }

    ${mediaBreakpointDown(500)} {
      display: none;
    }
  }

  .rp-break-link {
    color: #697488;
    line-height: 2.08px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .selected {
    background-color: #1ea4ce;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    ${mediaBreakpointDown(500)} {
      display: none;
    }

    .rp-link:hover {
      color: #fff;
    }
  }

  .disabled {
    ${StyledLabel} {
      cursor: not-allowed;

      &:hover {
        color: #697488;

        svg {
          fill: #697488;
        }
      }
    }
  }
`;

const StyledLabelText = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin: 0 7px;
`;

const StyledThreeDotsIcon = styled(Icon)`
  fill: #697488;
  cursor: pointer;
  height: 3px;
  width: 10px;

  &:hover {
    fill: #1ea4ce;
  }
`;

export const Pagination = ({ pageCount, onChange, selectedPageIndex = 0, ...rest }) => {
  const handlePageClick = event => onChange(event.selected);

  const getLabel = React.useCallback(({ isNext }) => {
    return (
      <StyledLabel>
        {!isNext && <Icon name="arrowLeft" size={14} />}
        <StyledLabelText isNext={isNext}>{isNext ? 'Next' : 'Prev'}</StyledLabelText>
        {isNext && <Icon name="arrowRight" size={14} />}
      </StyledLabel>
    );
  }, []);

  return (
    <StyledReactPaginate
      breakLabel={<StyledThreeDotsIcon name="threeDots" />}
      nextLabel={getLabel({ isNext: true })}
      breakLinkClassName="rp-break-link"
      pageClassName="rp-page"
      breakClassName="rp-break"
      onPageChange={handlePageClick}
      selectedPageRel="active"
      pageRangeDisplayed={3}
      pageLinkClassName="rp-link"
      pageCount={pageCount}
      previousLabel={getLabel({ isNext: false })}
      renderOnZeroPageCount={null}
      forcePage={selectedPageIndex}
      {...rest}
    />
  );
};

Pagination.propTypes = {
  pageCount: Proptypes.number.isRequired,
  selectedPageIndex: Proptypes.number.isRequired,
  onChange: Proptypes.func.isRequired,
};
