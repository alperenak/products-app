import axios from 'axios';
import { PRODUCTS_PER_PAGE } from '../../../components/Products';
import { TYPES } from '../../types';

export const getProducts =
  ({ selectedPageIndex = 0, itemType, selectedTags, selectedBrands, allTags, allBrands }) =>
  async dispatch => {
    const filteredTags = selectedTags.includes('All') ? [] : selectedTags;
    const filteredBrands = selectedBrands.includes('All')
      ? []
      : allBrands.filter(brand => selectedBrands.includes(brand.name));

    const brandsQuery = filteredBrands.map(brand => `&manufacturer=${brand.slug}`).join('');
    const tagsQuery = filteredTags.map(tag => `&tags_like=${tag}`).join('');

    console.log(selectedTags);

    const { data, headers } = await axios.get(
      `https://marketapp-api.herokuapp.com/items?_page=${
        selectedPageIndex + 1
      }&_limit=16&itemType=${itemType}${tagsQuery}${brandsQuery}`,
    );
    try {
      dispatch({
        payload: data,
        type: TYPES.GET_PRODUCTS,
      });
      dispatch({
        payload: headers['x-total-count'],
        type: TYPES.GET_PRODUCTS_COUNT,
      });

      if (headers['x-total-count'] / PRODUCTS_PER_PAGE <= selectedPageIndex) {
        dispatch({
          payload: 0,
          type: TYPES.SET_PAGIATION_SELECTED_PAGE_INDEX,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
