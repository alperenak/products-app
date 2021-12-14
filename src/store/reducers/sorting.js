import { TYPES } from '../types';

const initialState = {
  sortingType: { value: 'price', type: 'asc' },
};

export const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_SORTING_TYPE:
      return {
        ...state,
        sortingType: action.payload,
      };

    default:
      return state;
  }
};
