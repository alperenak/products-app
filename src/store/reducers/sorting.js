import { TYPES } from '../types';

const initialState = {
  sortingType: { value: 'price', type: 'asc' },
  selectedSortingId: 'priceLowToHigh',
};

export const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_SORTING_TYPE:
      return {
        ...state,
        sortingType: action.payload,
      };
    case TYPES.SET_SELECTED_SORTING_ID:
      return {
        ...state,
        selectedSortingId: action.payload,
      };
    default:
      return state;
  }
};
