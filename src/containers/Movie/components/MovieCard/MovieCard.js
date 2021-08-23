import React from 'react';
import './MovieCard.scss';
import { ICONS } from 'constants/image';
import PopupTrailer from '../PopupTrailer/PopupTrailer';

export default function MovieCard({movie}) {
    return (
        <div className="movie__card">
            <div className="movie__card__wrapper">
                <div className="movie__card__img relative">
                    <div href="/details" className="block">
                        <img className="w-full h-full" src={movie?.posterUrl} alt="movie" />
                    </div>
                    <PopupTrailer
                        open={<button className="button movie__card__img__playTrailer">
                            <i className="fa fa-play" id="viewTrailer" />
                        </button>}
                        idVideo={movie?.trailerVideoUrl}
                    />
                </div>
                <div className="movie__card__content">
                    <div className="movie__card__title">
                        <h5 className="line-clamp-2">{movie?.title}</h5>
                    </div>
                    <ul className="movie__card__rating">
                        <li className="card__rating_item">
                            <div className="flex items-center ">
                                <img className="max-w-full" src={ICONS.TOMATO} alt="movie" />
                            </div>
                            <span className="font-semibold text-lg ml-2">88%</span>
                        </li>
                        <li className="card__rating_item">
                            <div className="flex items-center ">
                                <img className="max-w-full" src={ICONS.CAKE} alt="movie" />
                            </div>
                            <span className="font-semibold text-lg ml-2">88%</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
