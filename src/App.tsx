import { Suspense } from 'react';
import './App.css';
// import { css } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import AppRouter from './Router';

const theme = createTheme({
  palette: {
    primary: {
      main: import.meta.env.REACT_APP_THEME_COLOR || '#1976d2',
    },
  },
});

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Suspense
          fallback={
            <CircularProgress
              style={{
                marginTop: '50vh',
              }}
            />
          }
        >
          <AppRouter />
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
