import { Suspense } from 'react';
import './App.css';
// import { css } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import AppRouter from './Router';

const theme = createTheme({
  palette: {
    primary: {
      main: import.meta.env.VITE_THEME_COLOR || '#1976d2',
    },
  },
});

const App: React.FC = () => {
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
          <AppRouter data-testid="app-router"/>
        </Suspense>
      </ThemeProvider>
    </div>
  );
};

export default App;
