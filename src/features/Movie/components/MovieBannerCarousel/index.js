import ArrowCarousel from 'components/ArrowCarousel';
import { ARROW_CAROUSEL } from 'constants/image';
import React from 'react';
import Slider from 'react-slick';
import 'reactjs-popup/dist/index.css';
import PopupTrailer from '../PopupTrailer';

import './MovieBannerCarousel.scss';

const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    nextArrow: <ArrowCarousel arrowImg={ARROW_CAROUSEL.NEXT_ARROW} />,
    prevArrow: <ArrowCarousel arrowImg={ARROW_CAROUSEL.PREV_ARROW} />,
}

const photos = [
    {
        name: 'Photo 1',
        url: 'https://s3img.vcdn.vn/123phim/2021/04/kieu-16177820111751.jpg',
        link: 'https://www.youtube.com/watch?v=-BQPKD7eozY'
    },
    {
        name: 'Photo 2',
        url: 'https://s3img.vcdn.vn/123phim/2021/04/mortal-kombat-16177818818286.png',
        link: 'https://www.youtube.com/watch?v=-BQPKD7eozY'
    },
    {
        name: 'Photo 3',
        url: 'https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png',
        link: 'https://www.youtube.com/watch?v=-BQPKD7eozY'
    },
    {
        name: 'Photo 4',
        url: 'https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png',
        link: 'https://www.youtube.com/watch?v=-BQPKD7eozY'
    }
];

export default function MovieBannerCarousel() {
    return (
        <section className="carousel max-w-full relative">
            <Slider {...settings}>
                {photos.map((photo, index) => {
                    return (
                        <div key={index} className="carousel-inner w-full relative ">
                            <img src={photo.url} alt="img-carousel" className="w-full mx-auto" />

                            <PopupTrailer
                                open={<button className="button playTrailer">
                                    <i className="fa fa-play" id="viewTrailer" />
                                </button>}
                                idVideo={`pRfmrE0ToTo`}
                            />
                        </div>
                    )
                })}
            </Slider>

        </section>
    )
}
