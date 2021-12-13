import { TYPES } from '../../types';

export const getProductsCount = products => async dispatch => {
  try {
    dispatch({
      payload: products.length,
      type: TYPES.GET_PRODUCTS_LENGTH,
    });
  } catch (error) {
    console.error(error);
  }
};
