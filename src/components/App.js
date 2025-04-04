import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LanguageSwitcher from './LanguageSwitcher';
import ChatInterface from './ChatInterface';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <LanguageSwitcher />
        <ChatInterface />
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </Container>
    </ThemeProvider>
  );
};

export default App; 