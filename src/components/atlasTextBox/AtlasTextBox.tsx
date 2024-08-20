import React from 'react';
import './AtlasTextBox.css';

interface AtlasTextBoxProps {
    text: string;
}

const AtlasTextBox: React.FC<AtlasTextBoxProps> = React.memo(({ text = '' }) => {
    return (
        <div className='atb-comp'>
            {text && <div className='atb-text'>{text}</div>}
        </div>
    );
});

export default AtlasTextBox;