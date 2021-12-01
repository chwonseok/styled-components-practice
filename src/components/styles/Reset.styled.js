import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-size: 1.15em;
    margin: 0;
  }

  p {
    opacity: .6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`;

export default ResetStyles;
