import ArrowCarousel from 'components/ArrowCarousel/ArrowCarousel';
import { ARROW_CAROUSEL } from 'constants/image';
import { fetchMoviesHighlight } from 'containers/Movie/Slice/homeSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import 'reactjs-popup/dist/index.css';
import PopupTrailer from '../PopupTrailer/PopupTrailer';

import './MovieBannerCarousel.scss';

const settings = {
    dots: false,
    lazyLoad: true,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    nextArrow: <ArrowCarousel arrowImg={ARROW_CAROUSEL.NEXT_ARROW} />,
    prevArrow: <ArrowCarousel arrowImg={ARROW_CAROUSEL.PREV_ARROW} />,
}

const id = ['_BggT--yxf0', '0pmfrE1YL4I', 'eg5ciqQzmK0', '1VIZ89FEjYI', 'mYfJxlgR2jw'];

const MovieBannerCarousel = ({ movies }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesHighlight());
    }, []);


    return (
        <section className="carousel max-w-full relative mt-16">
            <Slider {...settings}>
                {movies?.map((movie, index) => {
                    return (
                        <div key={movie?.id} className="carousel-inner w-full relative ">
                            <img
                                src={movie?.backdropUrl} alt="img-carousel"
                                className="w-full mx-auto"
                                style={{ height: '600px', objectFit: 'cover' }}

                            />


                            <PopupTrailer
                                open={<button className="button playTrailer">
                                    <i className="fa fa-play" id="viewTrailer" />
                                </button>}
                                idVideo={id[index]}
                            />
                        </div>
                    )
                })}
            </Slider>

        </section>
    )
}

export default MovieBannerCarousel;
