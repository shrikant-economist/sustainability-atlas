import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import imageUrl from './../assets/images/Intro 2.svg';
import AtlasCardGallery from '../components/cardGallery/AtlasCardGallery';

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
      <div>
        <TitleText
          heading={t('heading')}
          subHeading={t('subHeading')}
          footer={t('footerText')}
        />
      </div>
      <div className="home-atlas-card-gallery">
        <AtlasCardGallery />
      </div>
    </div>
  );
};

export default Home;
