import React from 'react';
import './MovieSummaryBanner.scss';
import { ICONS, MOVIE_IMG } from 'constants/image';

export default function MovieSummaryBanner() {
    return (
        <div className="movie-summary-banner">
            <div className="movie-summary-banner__img">
                <img src={MOVIE_IMG[7]} alt="movie" />
            </div>
            <div className="movie-summary-banner__content">
                <h4 className="movie-summary-banner__content__title">
                    Captain America: The First Avengers
                </h4>
                <p className="movie-summary-banner__content__duration">2hrs 50 min</p>
                <div className="movie-summary-banner__content__release">
                    <span>Release Date : </span> <a href="#0"> November 8 , 2020</a>
                </div>
                <ul className="movie-summary-banner__content__rating">
                    <li className="movie-summary-banner__content__rating__item">
                        <div className="flex items-center ">
                            <img className="max-w-full" src={ICONS.TOMATO} alt="movie" />
                        </div>
                        <span className="font-semibold text-lg ml-2">88%</span>
                    </li>
                    <li className="movie-summary-banner__content__rating__item">
                        <div className="flex items-center ">
                            <img className="max-w-full" src={ICONS.CAKE} alt="movie" />
                        </div>
                        <span className="font-semibold text-lg ml-2">88%</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
