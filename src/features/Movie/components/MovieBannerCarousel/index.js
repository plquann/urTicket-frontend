import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './MovieBannerCarousel.scss';
import { ARROW_CAROUSEL } from 'constants/Image';
import ArrowCarousel from 'components/ArrowCarousel';
import TrailerModal from '../TrailerModal';


export default function MovieBannerCarousel() {
    const settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        autoplay: false,
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
            link: 'https://www.youtube.com/watch?v=XRm1P7oGpMQ&ab_channel=CJEntertainmentVietnam'
        },
        {
            name: 'Photo 2',
            url: 'https://s3img.vcdn.vn/123phim/2021/04/mortal-kombat-16177818818286.png',
            link: 'https://www.youtube.com/watch?v=VAvF3VBxOac&feature=emb_logo'
        },
        {
            name: 'Photo 3',
            url: 'https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png',
            link: 'https://www.youtube.com/watch?v=x3ggvoYbcLo&ab_channel=CGVCinemasVietnam'
        },
        {
            name: 'Photo 4',
            url: 'https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png',
            link: 'https://www.youtube.com/watch?v=Vgb1uUmpQNU&feature=emb_logo&ab_channel=LotteCinemaVietNam'
        }
    ]
    const [isOpen, setIsOpen] = useState(false);
    const handleClickClose = () => {
        setIsOpen(true);
    }

    return (
        <section className="carousel max-w-full relative">
            <Slider {...settings}>
                {photos.map((photo, index) => {
                    return (
                        <div key={index} className="carousel-inner w-full ">
                            <img src={photo.url} alt="img-carousel" className="w-full mx-auto" />
                            <div className="playTrailer" onClick={() => setIsOpen(true)}>
                                <i className="fa fa-play" id="viewTrailer" />
                            </div>
                            {isOpen ? <TrailerModal /> : ''}
                        </div>
                    )
                })}
            </Slider>
        </section>
    )
}
