import Proptypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { ReactComponent as NextIcon } from '../assets/icons/arrow-right.svg';
import { ReactComponent as PrevIcon } from '../assets/icons/arrow-left.svg';
import { ReactComponent as ThreeDots } from '../assets/icons/threeDots.svg';
import { mediaBreakpointDown } from '../lib/mediaQueries';
import { useDispatch } from 'react-redux';
import { TYPES } from '../store/types';

// TODO break-link height width 100%
// TODO dont use redux in component use outside

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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 40px;

    ${mediaBreakpointDown(500)} {
      display: none;
    }
  }

  .rp-break-link {
    color: #697488;
    line-height: 2.08px;
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

const StyledThreeDots = styled(ThreeDots)`
  fill: #697488;
  cursor: pointer;

  &:hover {
    fill: #1ea4ce;
  }
`;

export const Pagination = ({ pageCount, onChange, ...rest }) => {
  const dispatch = useDispatch();
  const handlePageClick = event => dispatch({ type: TYPES.SET_PAGIATION_SELECTED_PAGE_INDEX, payload: event.selected });

  const getLabel = React.useCallback(({ isNext }) => {
    return (
      <StyledLabel>
        {!isNext && <PrevIcon />}
        <StyledLabelText isNext={isNext}>{isNext ? 'Next' : 'Prev'}</StyledLabelText>
        {isNext && <NextIcon />}
      </StyledLabel>
    );
  }, []);

  return (
    <StyledReactPaginate
      breakLabel={<StyledThreeDots />}
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
      {...rest}
    />
  );
};

Pagination.propTypes = {
  pageCount: Proptypes.number.isRequired,
};
