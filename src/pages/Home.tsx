import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import imageUrl from './../assets/images/Intro 2.svg';
import AtlasCardGallery from '../components/cardGallery/AtlasCardGallery';

const AtlasImage = lazy(() => import('./../components/AtlasImage'));
const AtlasTitleText = lazy(
  () => import('../components/atlasTitleText/AtlasTitleText'),
);

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
        <AtlasTitleText
          title={t('title')}
          text={t('text')}
          footer={t('footer')}
        />
      </div>
      <div className="home-atlas-card-gallery">
        <AtlasCardGallery />
      </div>
    </div>
  );
};

export default Home;
