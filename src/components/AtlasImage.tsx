import React from 'react';
import { css } from '@emotion/react';

interface AtlasImageProps {
  imageUrl: string;
  altText: string;
}

const AtlasImage: React.FC<AtlasImageProps> = ({ imageUrl, altText }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt={altText}
        style={{
          height: '640px',
          width: '640px',
          right: '0px',
          position: 'absolute',
          top: '-96px',
        }}
      />
    </div>
  );
};

export default AtlasImage;
