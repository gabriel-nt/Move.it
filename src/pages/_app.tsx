import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme/light';
import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;
