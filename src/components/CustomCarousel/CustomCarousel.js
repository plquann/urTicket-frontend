import React from 'react';
import { NextArrow, PrevArrow } from 'components/Icons'
import Slider from 'react-slick';
import ArrowCarousel from 'components/ArrowCarousel/ArrowCarousel';
import './CustomCarousel.scss';

export default function CustomCarousel(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        className: "custom__slides",
        nextArrow: <ArrowCarousel
            isCustom={'arrow right__arrow'}
            arrowSVG={<NextArrow />}
        />,
        prevArrow: <ArrowCarousel
            isCustom={'arrow left__arrow'}
            arrowSVG={<PrevArrow />}
        />,
    };

    const { data } = props;
    // console.log('🚀 ~ file: CustomCarousel.js ~ line 26 ~ data', data);

    return (
        <Slider {...settings}>
            {data.map((item, index) => {
                return (
                    <div key={index} className="text-center mr-6">
                        <div className="img"
                            style={{ width: '140px', height: '140px', borderRadius: '50%', border: '1px solid rgba(49, 215, 169, 0.5)', margin: '0 auto', marginBottom: '15px', padding: '10px' }}
                        >
                            <img 
                                src={item?.avatar} alt="person" 
                                style={{ width: '100%', height:'100%', borderRadius: '50%', border: '4px solid #31d7a9', objectFit: 'cover' }} />
                        </div>
                        <div className="info mb-3">
                            <h6 className="text-lg font-semibold mb-1 capitalize line-clamp-1 px-3">{item.fullName}</h6>
                            <span className="block text-sm mb-2 capitalize" style={{ color: '#31d7a9' }}>{item.position}</span>
                            {item.character ? <p style={{ color: '#9aace5' }}><span>as</span><span className="text-sm capitalize ml-1" > {item.character}</span></p> : ''}
                        </div>
                    </div>
                )
            })}
        </Slider>
    );
}
