import React from 'react';
import './AtlasText.css';

interface AtlasTextProps {
    text: string;
}

const AtlasText: React.FC<AtlasTextProps> = React.memo(({ text = '' }) => {
    return (
        <div className='at-comp'>
            {text && <div className='at-text'>{text}</div>}
        </div>
    );
});

export default AtlasText;