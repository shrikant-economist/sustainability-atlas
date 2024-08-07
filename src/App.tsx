import React, { Suspense, lazy } from 'react';
import './App.css';
// import { css } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const Button = lazy(() => import('@mui/material/Button'));

const theme = createTheme({
  palette: {
    primary: {
      main: process.env.REACT_APP_THEME_COLOR || '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: 'center' }}>
        <Suspense
          fallback={
            <CircularProgress
              style={{
                marginTop: '50vh',
              }}
            />
          }
        >
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
