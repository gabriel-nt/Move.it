import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import dark from '../styles/theme/dark';
import light from '../styles/theme/light';
import GlobalStyle from '../styles/global';

import ToggleTheme from 'components/ToggleTheme';
import { UserProvider } from 'hooks/UserContext';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const storage = localStorage.getItem('@move_theme');

    if (storage) {
      setTheme(storage === 'light' ? light : dark);
    }
  }, []);

  const toggleTheme = () => {
    const themeTitle = theme.title === 'light' ? 'dark' : 'light';

    setTheme(theme.title === 'light' ? dark : light);
    localStorage.setItem('@move_theme', themeTitle);
  };

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyle />
        <ToggleTheme toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
