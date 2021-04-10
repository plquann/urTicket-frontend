import React from 'react';

export default function ArrowCarousel(props) {
    const { className, style, onClick, arrowImg, isCustom } = props;

    return (
        <div
            className={isCustom ? isCustom : className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src={arrowImg} alt="arrow-carousel" className="w-full" />
        </div>
    );
}
