import { TYPES } from '../types';

const initialState = {
  allCompanies: [],
};

export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_COMPANIES:
      return {
        ...state,
        allCompanies: action.payload,
      };
    default:
      return state;
  }
};
