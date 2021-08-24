import React from "react";
import ArrowCarousel from "components/ArrowCarousel/ArrowCarousel";
import CustomSlide from "components/CustomSlide/CustomSlide";
import { Next, Prev } from "components/Icons";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './MovieHighlight.scss';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'movie-explore',

    nextArrow: <ArrowCarousel
        isCustom={'next'}
        arrowSVG={<Next />}
    />,
    prevArrow: <ArrowCarousel
        isCustom={'prev'}
        arrowSVG={<Prev />}
    />,
    customPaging: i => <div>{i + 1}</div>,
    appendDots: dots => <div><ul> {dots} </ul></div>,
    dotsClass: 'custom-dot',
};

export default function MovieHighlight() {
    const {movieHighlight} = useSelector(state => state.home)

    return (
        <Slider {...settings}>
            {movieHighlight.length && movieHighlight.map((movie, index) => {
                return (
                    <CustomSlide key={index} index={index} className={`box-${index}`} movie={movie} />
                )
            })}
        </Slider>
    );

}