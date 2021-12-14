import { TYPES } from '../../types';

export const filterTags = (allTags, keyword) => async dispatch => {
  const filteredBrands = allTags.filter(brand => brand.name.toLowerCase().includes(keyword.toLowerCase()));

  dispatch({
    payload: filteredBrands,
    type: TYPES.FILTER_TAGS,
  });
};
