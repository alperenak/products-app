import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
    -webkit-tap-highlight-color: transparent;
    outline: none !important;
  }

  body {
    background-color: #fafafa;
    overflow: ${({ sidebarIsOpen }) => sidebarIsOpen && 'hidden'}

  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(224, 224, 224);
    border-radius: 4px;
  }
`;

export default GlobalStyle;
