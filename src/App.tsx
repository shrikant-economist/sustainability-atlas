import React, { Suspense, lazy } from 'react';
import './App.css';
// import { css } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const Button = lazy(() => import('@mui/material/Button'));
const AtlasImage = lazy(() => import('./components/AtlasImage'));

const theme = createTheme({
  palette: {
    primary: {
      main: process.env.REACT_APP_THEME_COLOR || '#1976d2',
    },
  },
});

function App() {
  const imageUrl = require('./assets/images/Intro 2.svg');
  return (
    <div className="app">
      <div className="app-header">
        <p>Sustainability Atlas</p>
      </div>
      <div className="app-atlas">
        <AtlasImage imageUrl={imageUrl} altText={'intro-atlas'}></AtlasImage>
      </div>
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
          {/* <Button variant="contained" color="primary">
            Hello World
          </Button> */}
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
