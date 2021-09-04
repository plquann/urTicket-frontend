import React from 'react';
import './MovieSummaryBanner.scss';
import dateFormat from 'dateformat';
import { useSelector } from 'react-redux';
import BookingDirect from '../BookingDirect/BookingDirect';

export default function MovieSummaryBanner({ showtime }) {
    const pickedSeats = useSelector(state => state.booking.pickedSeats);
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
                <p className=" text-center">{movie?.duration} minutes</p>
                <div className="movie-summary-banner__content__theater mt-4">
                    <div className="flex justify-between items-center font-medium text-lg">
                        <span className="flex items-center">{theater?.name}</span>
                        <span>Room {showtime?.room}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Schedule</span>
                        <span className="font-medium text-green-500">{dateFormat(showtime?.startTime, "mmmm d, yyyy")}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Showtime</span>
                        <span className="font-medium text-green-500">{`${dateFormat(showtime?.startTime, "HH:MM")} - ${dateFormat(showtime?.endTime, "HH:MM")}`}</span>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span>Picked Seat</span>
                        <div className="text-lg text-green-500 font-medium ml-1">
                            {pickedSeats.length && pickedSeats.map((ticket, index) => {
                                return (
                                    <span key={index} className="ml-1">
                                        {`${ticket.seat.row}${ticket.seat.column}`}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex justify-between items-center ">
                        <span>Price</span>
                        <div className="text-lg text-green-500 font-medium">
                            <span>$ </span>
                            {pickedSeats.length && pickedSeats.reduce((total, ticket) => {
                                return total + ticket.price
                            }, 0)
                            }
                        </div>
                    </div>
                </div>
                <BookingDirect />
            </div>
        </div>
    )
}
