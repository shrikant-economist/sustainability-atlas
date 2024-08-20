import './AtlasCardGallery.css';
import AtlasCard from '../card/AtlasCard';

const AtlasCardGallery = () => {
  const prompts: { [key: string]: { prompt: any }[] } = {
    PERFORMANCE: [
      {
        prompt: (
          <p>
            Which <span className="card-overlay-text">European</span> countries
            are best prepared to handle{' '}
            <span className="card-overlay-text">floods</span> ?
          </p>
        ),
      },
      // {
      //   prompt: 'Which countries are managing their water most effectively?',
      // },
    ],
    VULNERABILITIES: [
      {
        prompt: (
          <p>
            Which <span className="card-overlay-text">African</span> countries
            are most vulnerable to{' '}
            <span className="card-overlay-text">drought</span> ?
          </p>
        ),
      },
    ],
    // DRIVERS: [
    //   {
    //     prompt: 'What makes countries high performers in sustainability?',
    //   },
    // ],
  };

  return (
    <div className="atlas-card-gallery">
      <div className="main-container">
        {Object.keys(prompts).map((category, categoryIndex) => (
          <div key={category} className="category-section">
            <div className="category-font">{category}</div>
            <div className="category-card-section">
              {prompts[category].map((item, index) => (
                <AtlasCard
                  key={index}
                  isBodyVisible={true}
                  bodyContent={
                    <div className="custom-prompt-class">{item.prompt}</div>
                  }
                  footerCustomButtonText={'Ask'}
                  isFooterWithCustomButtonVisible={true}
                  isFooterCustomButtonIconVisible={false}
                />
              ))}
            </div>
            {categoryIndex < Object.keys(prompts).length - 1 && (
              <div className="vertical-line"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AtlasCardGallery;
