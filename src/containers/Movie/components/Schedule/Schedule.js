import React, { useEffect } from "react";
import './Schedule.scss';
import ShowtimeItem from "../ShowtimeItem/ShowtimeItem";
import { useDispatch, useSelector } from "react-redux";
import {
    changeCurrentTheater,
    changeCurrentTheaterSystem,
    fetchGroupTheater,
    fetchShowTimeByTheater
} from "containers/Movie/slices/homeSlice";
import MovieClassify from "../MovieClassify/MovieClassify";
import dateFormat from 'dateformat';


export default function Schedule(props) {
    const {
        groupTheater,
        currentTheaterSystem,
        currentListTheaters,
        currentTheater,
        currentShowtime,
    } = useSelector(state => state.home);

    const dispatch = useDispatch();

    const handleChangeGroupTheater = (theatersId) => {
        dispatch(changeCurrentTheaterSystem(theatersId));
    };

    const handleChangeTheater = (theaterId) => {
        dispatch(changeCurrentTheater(theaterId));
    }

    useEffect(() => {
        dispatch(fetchGroupTheater());
    }, [dispatch]);

    useEffect(() => {
        if (currentTheater) {
            dispatch(fetchShowTimeByTheater(currentTheater));
        }
    }, [dispatch, currentTheater]);

    return (
        <div className="schedule-section max-w-screen-lg mx-auto pb-8 mt-4">
            <div className="schedule-section__title mb-12">
                <p className="text-5xl font-bold">SHOWTIME SCHEDULES</p>
                <p>Choose a movie and enjoy our service</p>
            </div>
            <div className="schedule-section__content" >
                <ul className="schedule-section__content__theater ">
                    {groupTheater.length && groupTheater.map((theaters, index) => {
                        let active = theaters?.id === currentTheaterSystem ? "active" : "";
                        return (
                            <li
                                key={index}
                                className={`${active}`}
                                onClick={() => handleChangeGroupTheater(theaters.id)}
                            >
                                <img src={theaters?.logo} alt="movie System" />
                            </li>)
                    })}

                </ul>
                <ul className="schedule-section__content__cinema">
                    {currentListTheaters.length && currentListTheaters.map((theater, index) => {
                        let active = theater.id === currentTheater ? "active" : "";
                        return (
                            <li
                                key={index}
                                className={`${active}`}
                                onClick={() => handleChangeTheater(theater.id)}
                            >
                                <img src={theater?.thumbnail} alt="cinema" />
                                <div className=" cinema-address">
                                    <span className="text-sm font-medium">{theater?.name}</span>
                                    <p className="text-xs line-clamp-3">{theater?.address}</p>
                                </div>
                            </li>)
                    })}
                </ul>
                <div className="schedule-section__content__showtimes">
                    <div className="schedule-section__content__showtimes__movie">
                        {
                            currentShowtime.loading
                                ? <div className="loading-showtime">Loading</div>
                                : currentShowtime.data.length
                                    ? currentShowtime.data.map((movie, index) => (
                                        <div className="schedule-section__content__showtimes__movie__item" key={index + movie?.id}>
                                            <div className="movie__item__wrapper grid grid-cols-5 gap-4">
                                                <div className="showtime-movie-posters">
                                                    <img className="h-full" src={movie?.posterUrl} alt="movie" />
                                                </div>
                                                <div className="showtime-details col-span-4">
                                                    <div className="">
                                                        <div className=" text-xl font-medium -mt-2">
                                                            <span className="mr-3">{movie?.title}</span>
                                                            <MovieClassify classify={movie?.classify} styles={'font-medium'} />
                                                        </div>
                                                        <p className="duration text-sm text-green-400 font-medium">{movie?.duration} minutes</p>
                                                        <p className=" text-sm mt-1 font-medium">Release Date: <span>{dateFormat(movie?.releaseDate, 'fullDate')}</span></p>
                                                    </div>
                                                    <ul className="time mt-6 grid grid-cols-4 gap-4">
                                                        {movie?.showtimes.map((showtime, index) => {
                                                            let startTime = new Date(showtime.startTime);
                                                            let endTime = new Date(showtime.endTime);
                                                            return (
                                                                <ShowtimeItem
                                                                    key={index + showtime?.id}
                                                                    startTime={`${dateFormat(startTime, 'HH:MM')}`}
                                                                    endTime={`~${dateFormat(endTime, 'HH:MM')}`}
                                                                    link={`/booking/${showtime?.id}/seatplan`}
                                                                />
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    : <div className="loading-showtime">No Showtime</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
