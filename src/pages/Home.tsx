import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import imageUrl from './../assets/images/Intro 2.svg';

const AtlasImage = lazy(() => import('./../components/AtlasImage'));
const AtlasText = lazy(() => import('../components/atlasText/AtlasText'));
const AtlasTextBox = lazy(() => import('../components/atlasTextBox/AtlasTextBox'));
const AtlasTitleText = lazy(() => import('../components/atlasTitleText/AtlasTitleText'));
const AtlasFooterText = lazy(() => import('../components/atlasFooterText/AtlasFooterText'));

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="app-header">
        <p>{t('appHeader')}</p>
      </div>
      <div className="app-atlas">
        <AtlasImage imageUrl={imageUrl} altText={t('altText')} />
      </div>
      <AtlasTitleText
        title={t('title')}
        text={t('text')}
        footer={t('footer')}
      />
    </div>
  );
};

export default Home;
