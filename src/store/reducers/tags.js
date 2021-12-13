import { TYPES } from '../types';

const initialState = {
  tags: [],
  selectedTags: ['All'],
};

export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_TAGS:
      return {
        ...state,
        tags: action.payload,
      };

    case TYPES.INCLUDE_SELECTED_TAGS:
      return {
        ...state,
        selectedTags: [...state.selectedTags, action.payload],
      };

    case TYPES.EXCLUDE_SELECTED_TAGS:
      return {
        ...state,
        selectedTags: action.payload !== 'All' ? state.selectedTags.filter(item => item !== action.payload) : [],
      };

    default:
      return state;
  }
};
