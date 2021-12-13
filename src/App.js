import { Header } from './components/Header';
import GlobalStyle from './lib/globalStyles';
import styled from 'styled-components';
import { Sidebar } from './components/Sidebar';
import { Products } from './components/Products';
import { BasketList } from './components/BasketList';
import { Footer } from './components/Footer';
import { mediaBreakpointDown } from './lib/mediaQueries';

// TODO Create Loading component

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
  return (
    <>
      <GlobalStyle />
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
