import { Global, css } from '@emotion/react';
import { FC } from 'react';

const global_style = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    overflow-x: hidden;
  }
`;

const GlobalStyle: FC = () => {
  return <Global styles={global_style} />;
};

export default GlobalStyle;
