import React from 'react';
import styled from '@emotion/styled';

interface AtlasImageProps {
  imageUrl: string;
  altText: string;
}

const ParentDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 40rem;
  height: 40rem;
  width: auto;
`;

const StyledImage = styled.img`
  width: 48.75rem;
  height: 48.75rem;
  right: -6.31rem;
  position: absolute;
  top: -8.12rem;

  @media (max-width: 768px) {
    width: 30rem;
    height: 30rem;
    right: -5.2rem;
    top: -5rem;
  }

  @media (max-width: 480px) {
    width: 21.41025rem;
    height: 21.41025rem;
    right: -5.2rem;
    top: -0.3rem;
  }
`;

const AtlasImage: React.FC<AtlasImageProps> = ({ imageUrl, altText }) => {
  return (
    <ParentDiv>
      <StyledImage src={imageUrl} alt={altText} />
    </ParentDiv>
  );
};

export default AtlasImage;
