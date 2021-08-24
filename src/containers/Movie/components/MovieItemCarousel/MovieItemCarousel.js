import React from 'react';
import Slider from 'react-slick';
import './MovieItemCarousel.scss';
import { ARROW_CAROUSEL } from 'constants/image';
import ArrowCarousel from 'components/ArrowCarousel/ArrowCarousel';
import MovieCard from '../MovieCard/MovieCard';
import { Skeleton } from '@material-ui/core';
import { useSelector } from 'react-redux';

const settings = {
    dots: false,
    autoplay: false,
    arrows: true,
    pauseOnHover: true,
    lazyLoad: true,
    infinite: true,
    className: "slides",
    slidesToShow: 2,
    rows: 2,
    slidesPerRow: 2,
    // slidesToScroll: 4,
    nextArrow: <ArrowCarousel isCustom={'next__movie'} arrowImg={ARROW_CAROUSEL.NEXT_ARROW} />,
    prevArrow: <ArrowCarousel isCustom={'prev__movie'} arrowImg={ARROW_CAROUSEL.PREV_ARROW} />,
}


export default function MovieItemCarousel(props) {
    const { loading } = useSelector(state => state.home)
    const { movies } = props;

    return (
        <section className="carousel max-w-full relative">
            {loading
                ? <Skeleton variant="rect" animation="wave" width="100%" height={1080}  />
                : <Slider {...settings}>
                    {movies.length && movies.slice(0, 16)?.map((movie, index) => {
                        return (
                            <div className="px-2 py-4" key={index} >
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })}
                </Slider>
            }
        </section>

    )
}
