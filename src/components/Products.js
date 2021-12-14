import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { mediaBreakpointDown } from '../lib/mediaQueries';
import { getBrands } from '../store/actions/brands/getBrands';
import { getAllCompanies } from '../store/actions/companies/getAllCompanies';
import { getAllProducts } from '../store/actions/products/getAllProducts';
import { getProducts } from '../store/actions/products/getProducts';
import { getProductsByItemType } from '../store/actions/products/getProductsByItemType';
import { getAllTags } from '../store/actions/tags/getAllTags';
import { TYPES } from '../store/types';
import { ButtonGroup } from './ButtonGroup';
import { Loading } from './Loading';
import { Pagination } from './Pagination';
import { ProductCard } from './ProductCard';

const ITEM_TYPES = [
  { id: 'mug', value: 'mug' },
  { id: 'shirt', value: 'shirt' },
];

export const PRODUCTS_PER_PAGE = 16;

const StyledProducts = styled.div`
  margin: 36.38px 16px 0;

  ${mediaBreakpointDown(1290)} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const StyledProductTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.25px;
  color: #6f6f6f;
`;

const StyledButtonGroup = styled(ButtonGroup)`
  margin: 16px 0;
`;

const StyledProductContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: 12px 8px;
  width: 608px;
  height: 1008px;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  position: relative;

  ${mediaBreakpointDown('tablet')} {
    width: 95%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

const StyledProductCard = styled(ProductCard)`
  margin: 10px 12px;

  ${mediaBreakpointDown('tablet')} {
    margin: 10px 12px;
  }
`;

const StyledPagination = styled(Pagination)`
  margin-top: 34px;
  margin-bottom: 136px;
`;

export const Products = () => {
  const dispatch = useDispatch();
  const { products, allProducts, productsCount, itemType, filteredProducts, productsLoading } = useSelector(
    state => state.products,
  );
  const { allBrands, selectedBrands } = useSelector(state => state.brands);
  const { selectedTags } = useSelector(state => state.tags);
  const { selectedPageIndex } = useSelector(state => state.pagination);
  const { allCompanies } = useSelector(state => state.companies);
  const { sortingType } = useSelector(state => state.sorting);
  const { basketList } = useSelector(state => state.basket);

  const handleOnClick = product => {
    if (basketList.length > 0) {
      basketList.forEach(item => {
        if (item.name === product.name) {
          dispatch({ type: TYPES.INCREASE_BASKET_ITEM_QUANTITY, payload: product.name });
        }
      });
    }
    if (!basketList.map(item => item.name).includes(product.name)) {
      dispatch({
        type: TYPES.SET_BASKET_LIST,
        payload: { name: product.name, price: product.price, count: 1 },
      });
    }
  };

  React.useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCompanies());
  }, [dispatch]);

  React.useEffect(() => {
    if (allCompanies.length !== 0 && filteredProducts.length !== 0) {
      dispatch(getBrands({ allCompanies, filteredProducts }));
    }
  }, [dispatch, allCompanies, filteredProducts]);

  React.useEffect(() => {
    if (filteredProducts.length !== 0) dispatch(getAllTags(filteredProducts));
  }, [dispatch, filteredProducts]);

  React.useEffect(() => {
    dispatch(getProducts({ selectedPageIndex, itemType, selectedTags, selectedBrands, allBrands, sortingType }));
  }, [dispatch, selectedPageIndex, itemType, selectedTags, selectedBrands, sortingType, allBrands]);

  React.useEffect(() => dispatch(getProductsByItemType(allProducts, itemType)), [dispatch, allProducts, itemType]);

  console.log(productsLoading);

  return (
    <StyledProducts>
      <StyledProductTitle>Products</StyledProductTitle>
      <StyledButtonGroup
        data={ITEM_TYPES}
        onChange={({ value }) => {
          dispatch({ type: TYPES.SET_PRODUCTS_ITEM_TYPE, payload: value });
        }}
        selectedButtonId={itemType}
      />
      <StyledProductContent>
        {products.map(product => (
          <StyledProductCard
            key={product.added}
            name={product.name}
            price={product.price}
            image="https://picsum.photos/200/200"
            onClick={() => handleOnClick(product)}
          />
        ))}

        {productsLoading && <Loading />}
      </StyledProductContent>
      <StyledPagination
        pageCount={Math.ceil(productsCount / PRODUCTS_PER_PAGE)}
        selectedPageIndex={selectedPageIndex}
        onChange={pageIndex => dispatch({ type: TYPES.SET_PAGIATION_SELECTED_PAGE_INDEX, payload: pageIndex })}
      />
    </StyledProducts>
  );
};
