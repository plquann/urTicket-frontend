import React from 'react';

export default function ArrowCarousel(props) {
    const { className, style, onClick, arrowImg, isCustom, arrowSVG } = props;
    console.log("🚀 ~ arrowSVG", arrowSVG);

    return (
        <div
            className={isCustom ? isCustom : className}
            style={{ ...style }}
            onClick={onClick}
        >
            {arrowSVG ? arrowSVG : <img src={arrowImg} alt="arrow-carousel" className="w-full" />}
        </div>
    );
}
