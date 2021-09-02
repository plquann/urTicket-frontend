import React from 'react';
import './CustomSlide.scss';
import { ICONS } from 'constants/image';
import { Link } from 'react-router-dom';
import PopupTrailer from 'containers/Movie/components/PopupTrailer/PopupTrailer';
import dateFormat from 'dateformat';

export default function CustomSlide({ movie, ...props }) {

    return (
        <div  {...props} >
            <div className="slide-explore bg-img" style={{ backgroundImage: `url("${movie?.backdropUrl}")` }}>
                <div className="bg w-7/12" />
                <div className="details w-1/2">
                    <h5 className="title">
                        <a href="movie-details.html">{movie?.title}</a>
                    </h5>
                    <p className="duration">{movie?.duration} minutes</p>
                    <p className="movie-summary">{movie?.description}</p>

                    <div className="genres my-3.5">
                        {movie?.genres.map((genre, index) => {
                            return <a key={index} href="#0">{genre?.name}</a>
                        })}
                    </div>

                    <div className="release">
                        <span style={{ color: '#31d7a9' }}>Release Date : </span> <a href="#0">{dateFormat(movie?.releaseDate, 'fullDate')}</a>
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
                    <div className="btn inline-flex space-x-4 mt-2 justify-center">
                        <button>
                            <Link to={`/movie/${movie?.id}`}>SHOW MORE
                            </Link>
                        </button>
                        <PopupTrailer
                            open={<button className="">
                                VIEW TRAILER
                            </button>}
                            idVideo={movie?.trailerVideoUrl}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
