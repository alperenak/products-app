import axios from 'axios';
import { TYPES } from '../../types';

export const getProducts =
  (pageIndex = 0, itemType) =>
  async dispatch => {
    const { data } = await axios.get(
      `https://marketapp-api.herokuapp.com/items?_page=${pageIndex + 1}&_limit=16&itemType=${itemType}`,
    );
    try {
      dispatch({
        payload: data,
        type: TYPES.GET_PRODUCTS,
      });
    } catch (error) {
      console.error(error);
    }
  };
