import React from 'react';
import './MovieSummaryBanner.scss';
import { MOVIE_IMG } from 'constants/image';

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

                
            </div>
        </div>
    )
}
