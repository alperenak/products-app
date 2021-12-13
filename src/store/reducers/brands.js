import { TYPES } from '../types';

const initialState = {
  brands: [],
  selectedBrands: ['All'],
};

export const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };

    case TYPES.INCLUDE_SELECTED_BRANDS:
      return {
        ...state,
        selectedBrands: [...state.selectedBrands, action.payload],
      };

    case TYPES.EXCLUDE_SELECTED_BRANDS:
      return {
        ...state,
        selectedBrands: action.payload !== 'All' ? state.selectedBrands.filter(item => item !== action.payload) : [],
      };

    default:
      return state;
  }
};
