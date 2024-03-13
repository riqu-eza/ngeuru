
import React from 'react';

const Box = ({ image, onClick }) => (
    <div
        style={{
            width: '200px',
            height: '200px',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
        }}
        onClick={onClick}
    />
);

export default Box;
