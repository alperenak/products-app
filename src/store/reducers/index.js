import { combineReducers } from 'redux';
import { basketReducer } from './basket';
import { brandsReducer } from './brands';
import { companiesReducer } from './companies';
import { paginationReducer } from './pagination';
import { productsReducer } from './products';
import { sidebarReducer } from './sidebar';
import { tagsReducer } from './tags';

export default combineReducers({
  sidebar: sidebarReducer,
  products: productsReducer,
  pagination: paginationReducer,
  basket: basketReducer,
  brands: brandsReducer,
  companies: companiesReducer,
  tags: tagsReducer,
});
