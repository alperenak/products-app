import { TYPES } from '../types';

const initialState = {
  sidebarIsOpen: false,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarIsOpen: !state.sidebarIsOpen,
      };
    case TYPES.SET_CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarIsOpen: false,
      };

    default:
      return state;
  }
};
