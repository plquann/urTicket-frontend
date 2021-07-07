import ArrowCarousel from "components/ArrowCarousel/ArrowCarousel";
import CustomSlide from "components/CustomSlide/CustomSlide";
import Icons from "components/Icons";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './MovieExplore.scss';


export default function MovieExplore() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'movie-explore',

        nextArrow: <ArrowCarousel
            isCustom={'next'}
            arrowSVG={<Icons name='Next' />}
        />,
        prevArrow: <ArrowCarousel
            isCustom={'prev'}
            arrowSVG={<Icons name='Prev' />}
        />,
        customPaging: i => <div>{i + 1}</div>,
        appendDots: dots => <div><ul> {dots} </ul></div>,
        dotsClass: 'custom-dot',
    };

    return (
        <Slider {...settings}>
            {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                    <CustomSlide key={index} index={index} className={`box-${item}`} />
                )
            })}
        </Slider>
    );

}