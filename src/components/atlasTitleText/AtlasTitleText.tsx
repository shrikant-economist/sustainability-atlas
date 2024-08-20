import React from 'react';
import './AtlasTitleText.css';

interface AtlasTitleTextProps {
    title: string;
    text?: string;
    footer?: string;
}

const AtlasTitleText: React.FC<AtlasTitleTextProps> = React.memo(({ title = '', text = '', footer = '' }) => {
    return (
        <div className='att-comp'>
            {title && <div className='att-title'>{title}</div>}
            {text && <div className='att-text'>{text}</div>}
            {footer && <div className='att-foot'>{footer}</div>}
        </div>
    );
});

export default AtlasTitleText;