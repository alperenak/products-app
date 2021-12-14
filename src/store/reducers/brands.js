import { TYPES } from '../types';

const initialState = {
  allBrands: [],
  brands: [],
  selectedBrands: ['All'],
};

export const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_BRANDS:
      return {
        ...state,
        allBrands: action.payload,
        brands: action.payload,
      };

    case TYPES.INCLUDE_SELECTED_BRANDS:
      return {
        ...state,
        selectedBrands:
          state.selectedBrands.length > 0 && state.selectedBrands.includes('All')
            ? [...state.selectedBrands, action.payload].filter(tag => tag !== 'All')
            : action.payload === 'All'
            ? ['All']
            : [...state.selectedBrands, action.payload],
      };

    case TYPES.EXCLUDE_SELECTED_BRANDS:
      return {
        ...state,
        selectedBrands: state.selectedBrands.filter(item => item !== action.payload),
      };

    case TYPES.FILTER_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };

    default:
      return state;
  }
};
