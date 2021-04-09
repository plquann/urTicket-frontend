import React from 'react';

export default function ArrowCarousel(props) {
    const { className, style, onClick, arrowImg } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src={arrowImg} alt="arrow-carousel" className="w-full" />
        </div>
    );
}
