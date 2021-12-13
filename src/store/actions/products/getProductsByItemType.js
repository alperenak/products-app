import { TYPES } from '../../types';

export const getProductsByItemType = (products, itemType) => async dispatch => {
  try {
    dispatch({
      payload: products.filter(product => product.itemType === itemType),
      type: TYPES.GET_PRODUCTS_BY_ITEM_TYPE,
    });
  } catch (error) {
    console.error(error);
  }
};
