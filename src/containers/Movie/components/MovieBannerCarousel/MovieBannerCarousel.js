import React from 'react';
import { ARROW_CAROUSEL } from 'constants/image';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'reactjs-popup/dist/index.css';
import PopupTrailer from '../PopupTrailer/PopupTrailer';
import ArrowCarousel from 'components/ArrowCarousel/ArrowCarousel';

import './MovieBannerCarousel.scss';
import { Skeleton } from '@material-ui/core';

const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    // fade: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    nextArrow: <ArrowCarousel arrowImg={ARROW_CAROUSEL.NEXT_ARROW} />,
    prevArrow: <ArrowCarousel arrowImg={ARROW_CAROUSEL.PREV_ARROW} />,
}


const MovieBannerCarousel = () => {
    const { movieHighlight, loading } = useSelector(state => state.home);

    return (
        <section className="carousel max-w-full relative mt-16">
            {loading
                ? <Skeleton animation="wave" variant="rect" width="100%" height={600} style={{ backgroundColor: '#404146' }} />
                : <Slider {...settings}>
                    {movieHighlight.length && movieHighlight?.map((movie, index) => {
                        return (
                            <div key={movie.id || index} className="transition-all duration-300">
                                <div className="carousel-inner w-full relative ">
                                    <img
                                        src={movie?.backdropUrl} alt="img-carousel"
                                        className="w-full mx-auto"
                                        style={{ height: '600px', objectFit: 'cover' }}

                                    />
                                    <PopupTrailer
                                        open={<button className="button playTrailer">
                                            <i className="fa fa-play" id="viewTrailer" />
                                        </button>}
                                        idVideo={movie.trailerVideoUrl}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            }

        </section>
    )
}

export default MovieBannerCarousel;
