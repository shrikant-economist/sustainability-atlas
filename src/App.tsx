import React, { useState, Suspense, lazy } from 'react';
import './App.css';
// import { css } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

const Button = lazy(() => import('@mui/material/Button'));
const TitleText = lazy(() => import('./components/TitleText'));
const SearchBox = lazy(() => import('./components/searchBox/SearchBox'));
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
  const [searchValue, setSearchValue] = useState('');
  const [ShowResetBtn, setShowResetBtn] = useState(false);
  const [showHelpText, SetshowHelpText] = useState(true);
  const setSearchVal = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = () => {
    console.log('Search button clicked:  ' + searchValue);
    setShowResetBtn(true);
    SetshowHelpText(false);
  };
  const handleReset = () => {
    setSearchValue('');
    setShowResetBtn(false);
    SetshowHelpText(true);
  };
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
          <TitleText
            heading="The Sustainability Atlas"
            subHeading="Combining 20 indices, over 2,000 indicators, 150 reports and 200 articles from TSP to give you clear business recommendations for your sustainability problems."
            footer="Try asking about…"
          />
          <SearchBox
            value={searchValue}
            onChange={setSearchVal}
            handleSearch={handleSearch}
            ShowResetBtn={ShowResetBtn}
            handleReset={handleReset}
            ShowHelpText={showHelpText}
          />
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
