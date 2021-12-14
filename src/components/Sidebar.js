import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { mediaBreakpointDown } from '../lib/mediaQueries';
import { filterBrands } from '../store/actions/brands/filterBrands';
import { filterTags } from '../store/actions/tags/filterTags';
import { TYPES } from '../store/types';
import { Card } from './Card';
import { Checkbox } from './Checkbox';
import { Input } from './Input';
import { Radios } from './Radios';

const SORTING_OPTIONS = [
  { id: 'priceLowToHigh', label: 'Price low to high' },
  { id: 'priceHighToLow', label: 'Price high to low' },
  { id: 'newToOld', label: 'New to old' },
  { id: 'oldToNew', label: 'Old to new' },
];

const StyledSidebar = styled.div`
  margin-top: 38.36px;
  transition: ${({ isOpen }) => isOpen && '0.2s opacity'};

  ${mediaBreakpointDown(980)} {
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    position: fixed;
    left: 0;
    top: 0;
    background: #fff;
    height: 100%;
    margin: 76.63px 0;
    z-index: 1;
    padding: 38.36px 10px;
    overflow-y: auto;
    padding-bottom: 100px;
    -webkit-overflow-scrolling: touch;
  }
`;

const StyledCard = styled(Card)`
  margin-bottom: 24px;
`;

const StyledInput = styled(Input)`
  padding: 12px 12px 0; ;
`;

const StyledCheckboxContent = styled.div`
  overflow-y: auto;
  margin-top: 17px;
  padding: 4px 0;
  margin-right: 12px;
  padding-left: 12px;
  height: 131px;
  margin-bottom: 12px;
`;

const StyledCheckbox = styled(Checkbox)`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const StyledRadios = styled(Radios)`
  padding: 12px;
`;

const StyledBackgroundFilter = styled.div`
  ${mediaBreakpointDown(980)} {
    position: fixed;
    background: rgba(30, 164, 206);
    opacity: ${({ isOpen }) => (isOpen ? '0.5' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    left: 296px;
    top: 76.68px;
    height: 100%;
    width: 100%;
    transition: ${({ isOpen }) => isOpen && '0.2s opacity'};
    z-index: 1;
  }
`;

export const Sidebar = () => {
  const { sidebarIsOpen } = useSelector(state => state.sidebar);
  const { selectedBrands } = useSelector(state => state.brands);
  const { brands, allBrands } = useSelector(state => state.brands);
  const { tags, allTags, selectedTags } = useSelector(state => state.tags);
  const { selectedSortingId } = useSelector(state => state.sorting);
  const dispatch = useDispatch();

  const handleOnChangeBrands = (checked, brandName) => {
    if (checked) dispatch({ type: TYPES.INCLUDE_SELECTED_BRANDS, payload: brandName });
    if (!checked) dispatch({ type: TYPES.EXCLUDE_SELECTED_BRANDS, payload: brandName });
  };

  const handleOnChangeTags = (checked, tagsName) => {
    if (checked) dispatch({ type: TYPES.INCLUDE_SELECTED_TAGS, payload: tagsName });
    if (!checked) dispatch({ type: TYPES.EXCLUDE_SELECTED_TAGS, payload: tagsName });
  };

  const handleOnChangeSorting = id => {
    dispatch({ type: TYPES.SET_SELECTED_SORTING_ID, payload: id });
    if (id === 'priceLowToHigh') dispatch({ type: TYPES.SET_SORTING_TYPE, payload: { value: 'price', type: 'asc' } });
    if (id === 'priceHighToLow') dispatch({ type: TYPES.SET_SORTING_TYPE, payload: { value: 'price', type: 'desc' } });
    if (id === 'newToOld') dispatch({ type: TYPES.SET_SORTING_TYPE, payload: { value: 'added', type: 'desc' } });
    if (id === 'oldToNew') dispatch({ type: TYPES.SET_SORTING_TYPE, payload: { value: 'added', type: 'asc' } });
  };

  return (
    <>
      <StyledSidebar isOpen={sidebarIsOpen}>
        <StyledCard title="Sorting" type="sm">
          <StyledRadios data={SORTING_OPTIONS} onChange={handleOnChangeSorting} selectedOptionId={selectedSortingId} />
        </StyledCard>
        <StyledCard title="Brands" type="sm">
          <StyledInput placeholder="Search brands" onChange={e => dispatch(filterBrands(allBrands, e.target.value))} />
          <StyledCheckboxContent>
            {brands.map(brand => (
              <StyledCheckbox
                label={brand.name}
                count={brand.count}
                onChange={checked => handleOnChangeBrands(checked, brand.name)}
                key={brand.name}
                checked={selectedBrands.includes(brand.name)}
              />
            ))}
          </StyledCheckboxContent>
        </StyledCard>
        <StyledCard title="Tags" type="sm">
          <StyledInput placeholder="Search tags" onChange={e => dispatch(filterTags(allTags, e.target.value))} />
          <StyledCheckboxContent>
            {tags.map(tag => {
              return (
                <StyledCheckbox
                  label={tag.name}
                  count={tag.count}
                  onChange={checked => handleOnChangeTags(checked, tag.name)}
                  key={tag.name}
                  checked={selectedTags.includes(tag.name)}
                />
              );
            })}
          </StyledCheckboxContent>
        </StyledCard>
      </StyledSidebar>
      <StyledBackgroundFilter isOpen={sidebarIsOpen} onClick={() => dispatch({ type: TYPES.SET_CLOSE_SIDEBAR })} />
    </>
  );
};
