import { Header } from './layouts/Header';
import GlobalStyle from './lib/globalStyles';
import styled from 'styled-components';
import { Sidebar } from './layouts/Sidebar';
import { Products } from './layouts/Products';
import { BasketList } from './layouts/BasketList';
import { Footer } from './layouts/Footer';
import { mediaBreakpointDown } from './lib/mediaQueries';
import { useSelector } from 'react-redux';

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 76.68px;
`;

const StyledBasketList = styled(BasketList)`
  ${mediaBreakpointDown(1290)} {
    display: none;
  }
`;

function App() {
  const { sidebarIsOpen } = useSelector(state => state.sidebar);
  return (
    <>
      <GlobalStyle sidebarIsOpen={sidebarIsOpen} />
      <Header />
      <StyledMainWrapper>
        <Sidebar />
        <Products />
        <StyledBasketList />
      </StyledMainWrapper>
      <Footer />
    </>
  );
}

export default App;
