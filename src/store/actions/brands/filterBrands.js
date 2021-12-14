import { TYPES } from '../../types';

export const filterBrands = (allBrands, keyword) => async dispatch => {
  const filteredBrands = allBrands.filter(brand => brand.name.toLowerCase().includes(keyword.toLowerCase()));

  dispatch({
    payload: filteredBrands,
    type: TYPES.FILTER_BRANDS,
  });
};
