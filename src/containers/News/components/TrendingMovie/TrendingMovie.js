import React from 'react';
import './TrendingMovie.scss';
import { movieTrending } from 'containers/News/_mocks_/newsData';
import { Rating } from '@material-ui/core';
import { IconCinema } from 'components/Icons';
import PopupTrailer from 'containers/Movie/components/PopupTrailer/PopupTrailer';

export default function NewTrendingMovie(props) {
    return (
        <div className="new-trending-movie mt-8">
            <h1 className="new-trending-movie__title">Trending Movie</h1>
            <div className="new-trending-movie__list">
                {movieTrending.map((item, index) => (
                    <div key={item.id} className="new-trending-movie__list__item ">
                        <div className="new-trending-movie__list__item__thums ">
                            <img
                                src={item.img.replace('w600_and_h900', 'w150_and_h225')}
                                alt="news thumbnails"
                                
                            />
                        </div>
                        <div className="new-trending-movie__list__item__wrapper w-2/3 p-2">
                            <div className="item__wrapper__date ">
                                <IconCinema width={20} height={20} fillColor={'#ffc033'} />
                                <p>{item.releaseDate}</p>
                            </div>
                            <h5 className="item__wrapper__title ">
                                {item.title}
                            </h5>
                            <div className="mt-4">
                                <Rating name="read-only" precision={0.5} value={item.rating} readOnly />
                            </div>
                            <div className="item__wrapper__btn mt-8">
                                <PopupTrailer
                                    open={<button className="btn__trailer">TRAILER</button>}
                                    idVideo={item.videoTrailer}
                                />
                                <button className="btn__book">BOOK TICKET</button>
                            </div>
                        </div>
                        <div className="new-trending-movie__list__item__index">
                            {index + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
