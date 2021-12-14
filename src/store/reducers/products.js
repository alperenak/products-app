import { TYPES } from '../types';

const initialState = {
  allProducts: [],
  products: [],
  filteredProducts: [],
  productsCount: 0,
  itemType: 'mug',
  allBrands: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case TYPES.GET_PRODUCTS_COUNT:
      return { ...state, productsCount: action.payload };
    case TYPES.SET_PRODUCTS_ITEM_TYPE:
      return { ...state, itemType: action.payload };
    case TYPES.GET_ALL_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case TYPES.GET_PRODUCTS_BY_ITEM_TYPE:
      return { ...state, filteredProducts: action.payload };
    default:
      return state;
  }
};
