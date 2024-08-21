import React, { lazy, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
// import imageUrl from './../assets/images/Intro 2.svg';
import AtlasCardGallery from '../components/cardGallery/AtlasCardGallery';
import atlasimage from './../assets/images/globe.png'
const AtlasImage = lazy(() => import('./../components/AtlasImage'));
const AtlasSearchBox = lazy(() => import('../components/searchBox/AtlasSearchBox'));
const AtlasTitleText = lazy(
  () => import('../components/atlasTitleText/AtlasTitleText'),
);


const Home: React.FC = () => {
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
      {/* <div className="app-header">
        <p>{t('appHeader')}</p>
      </div> */}
      <div className="app-atlas">
        <AtlasImage imageUrl={atlasimage} altText={t('altText')} />
      </div>
      <div>
        <AtlasTitleText
          title={t('title')}
          text={t('text')}
          footer={t('footer')}
        />
      </div>
      <div className="home-atlas-card-gallery">
        <AtlasCardGallery />
      </div>
      <AtlasSearchBox
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
