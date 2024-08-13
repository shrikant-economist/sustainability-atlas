import React from 'react';
import styled from '@emotion/styled';

interface AtlasImageProps {
  imageUrl: string;
  altText: string;
}

const StyledImage = styled.img`
    height: auto;
    width: 100%;
    right: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-image-repeat: stretch;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const AtlasImage: React.FC<AtlasImageProps> = ({ imageUrl, altText }) => {
  return (
    <div>
      <StyledImage
        src={imageUrl}
        alt={altText}
      />
    </div>
  );
};

export default AtlasImage;
