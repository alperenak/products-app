import axios from 'axios';
import { TYPES } from '../../types';

export const getAllProducts = () => async dispatch => {
  const { data } = await axios.get('https://marketapp-api.herokuapp.com/items');
  try {
    dispatch({
      payload: data,
      type: TYPES.GET_ALL_PRODUCTS,
    });
  } catch (error) {
    console.error(error);
  }
};
