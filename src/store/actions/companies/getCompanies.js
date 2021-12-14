import axios from 'axios';
import { TYPES } from '../../types';

export const getCompanies = () => async dispatch => {
  const { data } = await axios.get('https://marketapp-api.herokuapp.com/companies');
  try {
    dispatch({
      payload: data,
      type: TYPES.GET_ALL_COMPANIES,
    });
  } catch (error) {
    console.error(error);
  }
};
