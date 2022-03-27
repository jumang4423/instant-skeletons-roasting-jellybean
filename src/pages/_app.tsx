import NextApp, { AppProps } from 'next/app';
import React, { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: Roboto;
    overflow-x: hidden;
  }
`;

const Main = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default class App extends NextApp {
  render() {
    return <Main {...this.props} />;
  }
}
