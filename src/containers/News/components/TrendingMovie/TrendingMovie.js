import React from 'react';
import './TrendingMovie.scss';
import { movieTrending } from 'containers/News/_mocks_/newsData';
import { Rating } from '@material-ui/core';
import { IconCinema } from 'components/Icons';

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
                                <IconCinema width={20} height={20} fillColor={'#dbe2fb'} />
                                <p>{item.releaseDate}</p>
                            </div>
                            <h5 className="item__wrapper__title ">
                                {item.title}
                            </h5>
                            <p className="line-clamp-2 text-sm text-gray-400">{item.info}</p>
                            <div className="mt-4">
                                <Rating name="read-only" precision={0.5} value={item.rating} readOnly />
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
