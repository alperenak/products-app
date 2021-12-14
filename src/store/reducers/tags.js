import { TYPES } from '../types';

const initialState = {
  allTags: [],
  tags: [],
  selectedTags: ['All'],
};

export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ALL_TAGS:
      return {
        ...state,
        allTags: action.payload,
        tags: action.payload,
      };

    case TYPES.INCLUDE_SELECTED_TAGS:
      return {
        ...state,
        selectedTags:
          state.selectedTags.length > 0 && state.selectedTags.includes('All')
            ? [...state.selectedTags, action.payload].filter(tag => tag !== 'All')
            : action.payload === 'All'
            ? ['All']
            : [...state.selectedTags, action.payload],
      };

    case TYPES.EXCLUDE_SELECTED_TAGS:
      return {
        ...state,
        selectedTags: state.selectedTags.filter(item => item !== action.payload),
      };
    case TYPES.FILTER_TAGS:
      return {
        ...state,
        tags: action.payload,
      };

    default:
      return state;
  }
};
