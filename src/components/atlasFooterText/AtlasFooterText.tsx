import React from 'react';
import './AtlasFooterText.css';

interface AtlasFooterTextProps {
    title: string;
    text?: string;
}

const AtlasFooterText: React.FC<AtlasFooterTextProps> = React.memo(({ title = '', text = '' }) => {
    return (
        <div className='aft-comp'>
            <div className='aft-box'>
                {title && <div className='aft-title'>{title}</div>}
                <div className='aft-text-box'>
                    {text && <div className='aft-text'>{text}</div>}
                </div>
            </div>
        </div>
    );
});

export default AtlasFooterText;