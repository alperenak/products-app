import { TYPES } from '../../types';

export const getProductsCount = products => async dispatch => {
  dispatch({
    payload: products.length,
    type: TYPES.GET_PRODUCTS_COUNT,
  });
};
