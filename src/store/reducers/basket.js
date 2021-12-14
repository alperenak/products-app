import { TYPES } from '../types';

const initialState = {
  basketIsOpen: 0,
  basketList: [],
  totalPrice: 0,
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_TOGGLE_BASKET:
      return {
        ...state,
        basketIsOpen: !state.basketIsOpen,
      };

    case TYPES.SET_BASKET_LIST:
      return {
        ...state,
        basketList: [...state.basketList, action.payload],
      };

    case TYPES.INCREASE_BASKET_ITEM_QUANTITY:
      return {
        ...state,
        basketList: state.basketList.map(basket => {
          if (basket.name === action.payload) {
            return {
              ...basket,
              count: basket.count + 1,
            };
          }
          return basket;
        }),
      };

    case TYPES.SET_BASKET_ITEM_QUANTITY:
      return {
        ...state,
        basketList: state.basketList.map(basket => {
          if (basket.name === action.payload.name) {
            return {
              ...basket,
              count: action.payload.count,
            };
          }
          return basket;
        }),
      };
    case TYPES.SET_BASKET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    case TYPES.REMOVE_FROM_BASKET_LIST:
      return {
        ...state,
        basketList: state.basketList.filter(basket => basket.name !== action.payload),
      };
    default:
      return state;
  }
};
