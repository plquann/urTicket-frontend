import React from 'react';
import './MovieItem.scss';
import { MOVIE_IMG, ICONS } from 'constants/image';
import { randomGenres } from 'constants/genres';
import { Link } from 'react-router-dom';
import MovieClassify from '../MovieClassify/MovieClassify';

export default function MovieItem({ movie, ...props }) {
    return (
        <div className="movie__item w-full mt-5 mb-10">
            <div className="movie__item__thumb c-thumb">
                <Link to={`/movie/${movie?.id}`} className="w-100" >
                    <img className="w-full h-full bg-img rounded-md" src={movie?.posterUrl} alt="movie" />
                </Link>
            </div>
            <div className="movie__item__content h-100">
                <h5 className="title line-clamp-1">
                    <Link to={`/movie/${movie?.id}`}>{movie?.title}</Link>
                </h5>
                <p className="duration">
                    <MovieClassify classify={movie?.classify} styles={'font-medium'} />
                    <span className="ml-2">{movie?.duration} minutes</span>
                </p>
                <p className="summary line-clamp-3 mt-2">{movie?.description}</p>

                <div className="genres">
                    {movie?.genres.map((genre, index) => {
                        return <span key={genre.id}>{genre.name}</span>
                    })}
                </div>

                <div className="release mt-2">
                    <span style={{ color: '#31d7a9' }}>Release Date : </span> <a href="#0">{new Date(movie?.releaseDate).toDateString()}</a>
                </div>
                <ul className="rating">
                    <li className="item">
                        <div className="flex items-center ">
                            <img className="max-w-full" src={ICONS.TOMATO} alt="movie" />
                        </div>
                        <span className="font-semibold text-lg ml-2">{movie?.voteAverage * 10}%</span>
                    </li>
                    <li className="item">
                        <div className="flex items-center ">
                            <img className="max-w-full" src={ICONS.CAKE} alt="movie" />
                        </div>
                        <span className="font-semibold text-lg ml-2">{movie?.voteAverage / 2}</span>
                    </li>
                </ul>
                <div className="booking">
                    <div className="book-ticket grid grid-cols-4 gap-4">
                        <div className="react-item">
                            <a href="#0">
                                <div className="thumb">
                                    <img src={ICONS.HEART} alt="icons" />
                                </div>
                                <span>Like</span>
                            </a>
                        </div>

                        <div className="react-item">
                            <a href="#0" className="popup-video">
                                <div className="thumb">
                                    <img src={ICONS.PLAY_BTN} alt="icons" />
                                </div>
                                <span>Watch trailer</span>
                            </a>
                        </div>

                        <div className="react-item col-start-4">
                            <a href="/booking">
                                <div className="thumb">
                                    <img src={ICONS.BOOK} alt="icons" />
                                </div>
                                <span>book ticket</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
