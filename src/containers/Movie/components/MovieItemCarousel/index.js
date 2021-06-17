import React from 'react';
import Slider from 'react-slick';
import './MovieItemCarousel.scss';
import { ARROW_CAROUSEL } from 'constants/image';
import ArrowCarousel from 'components/ArrowCarousel';
import MovieGrid from '../MovieGrid';

export default function MovieItemCarousel() {
    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        autoplay: false,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        pauseOnHover: true,
        slidesPerRow: 2,
        className: "slides",
        nextArrow: <ArrowCarousel isCustom={'next__movie'} arrowImg={ARROW_CAROUSEL.NEXT_ARROW} />,
        prevArrow: <ArrowCarousel isCustom={'prev__movie'} arrowImg={ARROW_CAROUSEL.PREV_ARROW} />,
    }


    return (
        <section className="carousel max-w-full relative">
            <Slider {...settings}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map((index, item) => {
                    return (
                        <MovieGrid key={index} />)
                })}
            </Slider>
        </section>
    )
}
