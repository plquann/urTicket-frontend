import React from 'react';
import './TrendingMovie.scss';
import { movieTrending } from 'containers/News/_mocks_/newsData';
import { Rating } from '@material-ui/core';
import { IconCinema } from 'components/Icons';
import PopupTrailer from 'containers/Movie/components/PopupTrailer/PopupTrailer';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NewTrendingMovie(props) {

    const { movieHighlight } = useSelector(state => state.home)
    return (
        <div className="new-trending-movie mt-8">
            <h1 className="new-trending-movie__title">Trending Movie</h1>
            <div className="new-trending-movie__list">
                {movieHighlight.length && movieHighlight.map((item, index) => (
                    <div key={item.id} className="new-trending-movie__list__item ">
                        <div className="new-trending-movie__list__item__thums ">
                            <img
                                src={item.posterUrl.replace('original', 'w150_and_h225_bestv2')}
                                alt="news thumbnails"

                            />
                        </div>
                        <div className="new-trending-movie__list__item__wrapper w-2/3 p-2">
                            <div className="item__wrapper__date ">
                                <IconCinema width={20} height={20} fillColor={'#ffc033'} />
                                <p>{new Date(item.releaseDate).toDateString()}</p>
                            </div>
                            <h5 className="item__wrapper__title ">
                                {item.title}
                            </h5>
                            <div className="mt-4">
                                <Rating name="read-only" precision={0.5} value={item.voteAverage / 2} readOnly />
                            </div>
                            <div className="item__wrapper__btn mt-8">
                                <PopupTrailer
                                    open={<button className="btn__trailer">TRAILER</button>}
                                    idVideo={item.trailerVideoUrl}
                                />
                                <Link to={`/movie/${item.id}`} className="btn__book">BOOK TICKET</Link>
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
