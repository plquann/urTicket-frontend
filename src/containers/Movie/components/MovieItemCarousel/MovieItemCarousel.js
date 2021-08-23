import React from 'react';
import Slider from 'react-slick';
import './MovieItemCarousel.scss';
import { ARROW_CAROUSEL } from 'constants/image';
import ArrowCarousel from 'components/ArrowCarousel/ArrowCarousel';
import MovieCard from '../MovieCard/MovieCard';

const settings = {
    dots: true,
    
    autoplay: false,
    arrows: true,
    pauseOnHover: true,
    infinite: true,
    className: "slides",
    slidesToShow: 2,
    rows: 2,
    slidesPerRow: 2,
    slidesToScroll: 4,
    nextArrow: <ArrowCarousel isCustom={'next__movie'} arrowImg={ARROW_CAROUSEL.NEXT_ARROW} />,
    prevArrow: <ArrowCarousel isCustom={'prev__movie'} arrowImg={ARROW_CAROUSEL.PREV_ARROW} />,
}


export default function MovieItemCarousel(props) {

    const { movies } = props;
    const arr = test();

    return (
        <section className="carousel max-w-full relative">
            <Slider {...settings}>
                {/* {movies?.map((movie, index) => {
                    return (
                        <MovieCard key={index} movie={movie} />
                    )
                })} */}

                {arr.map((movie, index) => {
                    return (
                        <div className="px-2 py-4">
                            <MovieCard key={index} movie={movie} />
                        </div>

                    )
                })}
            </Slider>
        </section>

    )
}
