import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import imageUrl from './../assets/images/Intro 2.svg';

const AtlasImage = lazy(() => import('./../components/AtlasImage'));
const AtlasTitleText = lazy(() => import('../components/atlasTitleText/AtlasTitleText'));

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