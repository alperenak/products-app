import { TYPES } from '../types';

const initialState = {
  selectedPageIndex: 0,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_PAGIATION_SELECTED_PAGE_INDEX:
      return {
        ...state,
        selectedPageIndex: action.payload,
      };

    default:
      return state;
  }
};
