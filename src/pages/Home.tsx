import React, { lazy, useState } from 'react';
import { useTranslation } from 'react-i18next';
import imageUrl from './../assets/images/Intro 2.svg';

const TitleText = lazy(() => import('./../components/TitleText'));
const AtlasImage = lazy(() => import('./../components/AtlasImage'));
const SearchBox = lazy(() => import('./../components/searchBox/SearchBox'));

const Home = () => {
  const { t } = useTranslation();
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
    <div>
      <div className="app-header">
        <p>{t('appHeader')}</p>
      </div>
      <div className="app-atlas">
        <AtlasImage imageUrl={imageUrl} altText={t('altText')} />
      </div>
      <TitleText
        heading={t('heading')}
        subHeading={t('subHeading')}
        footer={t('footerText')}
      />
      <SearchBox
        value={searchValue}
        onChange={setSearchVal}
        handleSearch={handleSearch}
        ShowResetBtn={ShowResetBtn}
        handleReset={handleReset}
        ShowHelpText={showHelpText}
      />
    </div>
  );
};

export default Home;
