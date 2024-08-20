import React from 'react';
import './AtlasCard.css';
import { Button } from '@mui/material';

type AtlasCardProps = {
  isHeaderVisible?: boolean;
  headerContent?: React.ReactNode;
  isBodyVisible?: boolean;
  bodyContent?: React.ReactNode;
  isFooterWithCustomButtonVisible?: boolean;
  footerCustomButtonText?: string;
  isFooterCustomButtonIconVisible?: boolean;
  footerCustomButtonIcon?: React.ReactNode;
  isCustomFooterVisible?: boolean;
  customFooterContent?: React.ReactNode;
};

// AtlasCard component
// This component is a simple card structure with header, body, and footer.
// It can be used to display data or content in a structured manner.
// It accepts the following props:
// - isHeaderVisible: A boolean prop to show/hide the header of the card.
// - headerContent: A ReactNode prop to render the content of the header.
// - isBodyVisible: A boolean prop to show/hide the body of the card.
// - bodyContent: A ReactNode prop to render the content of the body.
// - isFooterWithCustomButtonVisible: A boolean prop to show/hide the footer with a custom button.
// - footerCustomButtonText: A string prop to set the text of the custom button in the footer.
// - isFooterCustomButtonIconVisible: A boolean prop to show/hide the icon of the custom button in the footer.
// - footerCustomButtonIcon: A ReactNode prop to render the icon of the custom button in the footer.
// - isCustomFooterVisible: A boolean prop to show/hide the custom footer content.
// - customFooterContent: A ReactNode prop to render the custom footer content.

const AtlasCard = ({
  isHeaderVisible,
  headerContent,
  isBodyVisible,
  bodyContent,
  isFooterWithCustomButtonVisible,
  footerCustomButtonText,
  isFooterCustomButtonIconVisible,
  footerCustomButtonIcon,
  isCustomFooterVisible,
  customFooterContent,
}: AtlasCardProps) => {
  return (
    <div className="card-stucture">
      {isHeaderVisible && headerContent && (
        <div className="card-header">{headerContent}</div>
      )}
      {isBodyVisible && bodyContent && (
        <div className="card-body">{bodyContent}</div>
      )}
      {isFooterWithCustomButtonVisible && (
        <div className="footer-with-custom-button">
          <div className="default-button-allignment">
            <Button variant="contained" className="default-button-css">
              {footerCustomButtonText}{' '}
              {isFooterCustomButtonIconVisible && (
                <span className="footer-custom-button-icon">
                  {footerCustomButtonIcon}
                </span>
              )}
            </Button>
          </div>
        </div>
      )}
      {isCustomFooterVisible && customFooterContent && (
        <div className="card-custom-footer">{customFooterContent}</div>
      )}
    </div>
  );
};

export default AtlasCard;
