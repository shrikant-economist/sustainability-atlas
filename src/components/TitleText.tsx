import React from 'react';
import './TitleText.css';

interface TitleTextProps {
    heading: string;
    subHeading?: string;
    footer?: string;
}

const TitleText: React.FC<TitleTextProps> = ({ heading, subHeading, footer }) => {
    return (
        <div className='titleText'>
            <div className='heading'>{heading}</div>
            {subHeading && <div className='subHeading'>{subHeading}</div>}
            {footer && <div className='footer'>{footer}</div>}
        </div>
    );
};

export default TitleText;