import { TYPES } from '../../types';

export const getBrands =
  ({ filteredProducts, allCompanies }) =>
  async dispatch => {
    let totalCount = 0;
    const brands = allCompanies.map(brand => {
      const itemLength = filteredProducts.filter(item => item.manufacturer === brand.slug).length;
      totalCount += itemLength;

      return {
        count: itemLength,
        name: brand.name,
      };
    });

    dispatch({
      payload: [{ name: 'All', count: totalCount }, ...brands],
      type: TYPES.GET_ALL_BRANDS,
    });
  };
