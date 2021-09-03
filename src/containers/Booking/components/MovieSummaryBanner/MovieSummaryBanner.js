import React from 'react';
import './MovieSummaryBanner.scss';
import dateFormat from 'dateformat';

export default function MovieSummaryBanner({ showtime }) {
    const { movie, theater } = showtime;
    return (
        <div className="movie-summary-banner">
            <div className="movie-summary-banner__img">
                <img src={movie?.posterUrl} alt="movie" />
            </div>
            <div className="movie-summary-banner__content">
                <h4 className="movie-summary-banner__content__title">
                    {movie?.title}
                </h4>
                <p className="movie-summary-banner__content__duration">{movie?.duration} minutes</p>
                <div className="movie-summary-banner__content__theater mt-3">
                    <p className="flex justify-between items-center font-medium text-lg">
                        <span className="flex items-center">{theater?.name}</span>
                        <span>Room {showtime?.room}</span>
                    </p>
                    <p className="flex justify-between items-center mt-2">
                        <span>{dateFormat(showtime?.startTime, "mmmm d, yyyy")}</span>
                        <span>{`${dateFormat(showtime?.startTime, "HH:MM")}~${dateFormat(showtime?.endTime, "HH:MM")}`}</span>
                    </p>
                </div>
                </div>
            </div>
            )
}
