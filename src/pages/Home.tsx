import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import imageUrl from './../assets/images/Intro 2.svg';

const TitleText = lazy(() => import('./../components/TitleText'));
const AtlasImage = lazy(() => import('./../components/AtlasImage'));

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
      <TitleText
        heading={t('heading')}
        subHeading={t('subHeading')}
        footer={t('footerText')}
      />
    </div>
  );
};

export default Home;
