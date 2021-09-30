import React, { useEffect, useState } from 'react';
import './TrendingMovie.scss';
import { Rating } from '@material-ui/core';
import { IconCinema } from 'components/Icons';
import PopupTrailer from 'containers/Movie/components/PopupTrailer/PopupTrailer';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { movieAPI } from 'apis';

export default function NewTrendingMovie(props) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovieTrending = async () => {
            try {
                const res = await movieAPI.getHighlight();
                setMovies(res);
            } catch (error) {
                console.log('🚀 ~ file: TrendingMovie.js ~ line 21 ~ error', error);
            }
        };

        fetchMovieTrending();

    }, []);


    return (
        <div className="new-trending-movie mt-8">
            <h1 className="new-trending-movie__title">Trending Movie</h1>
            <div className="new-trending-movie__list">
                {movies.length && movies.map((item, index) => (
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
                                <p>{dateFormat(item?.releaseDate, 'fullDate')}</p>
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
