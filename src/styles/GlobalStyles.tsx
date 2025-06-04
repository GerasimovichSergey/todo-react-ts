import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { Theme } from '../models/theme';


export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${normalize}
  :root {
    --toastify-toast-width: 435px;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
    color: black;
    transition: background-color 0.2s;
  }

  .Toastify__toast {
    justify-content: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;