import React, { Fragment } from 'react';
import Slider from "react-slick";
import { MOVIE_PHOTO } from 'constants/Image';
import './PhotosPreview.scss';

export default function PhotosPreview() {
    const settings = {
        dots: false,
        arrows: false,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,    
    };

    return (
        <div className="w-full photos__preview mb-14">
            <h3 className="text-2xl font-bold mb-4">PHOTOS</h3>
            
            <Slider {...settings}>
                {MOVIE_PHOTO.map((photo, index) => {
                    return (
                        <div key={index} className="outline-none">
                            <img className=" rounded-md" src={photo} alt="movie details" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}
