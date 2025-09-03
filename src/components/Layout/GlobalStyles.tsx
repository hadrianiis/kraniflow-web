import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --Background: #F1F1F1;
    --white: #fff;
    --light-gray: #dcdcdc;
    --link-color: #333333;
    --green: #2b892e;
    --emerald: #48d64c;
    --gradient-start: #F2BCBB;
    --gradient-end: #469F9D;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: #333333;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--link-color);
        border-radius: 0.5rem;
      }

      &-track {
        background: #F1F1F1;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .not_complete {
    display: none;
  }

  .complete {
  }
`;
