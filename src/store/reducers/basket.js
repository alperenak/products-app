import { TYPES } from '../types';

const initialState = {
  basketIsOpen: 0,
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_TOGGLE_BASKET:
      return {
        ...state,
        basketIsOpen: !state.basketIsOpen,
      };

    default:
      return state;
  }
};
