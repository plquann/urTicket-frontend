import React, { useEffect } from "react";
import './Schedule.scss';
import ShowtimeItem from "../ShowtimeItem/ShowtimeItem";
import { useDispatch, useSelector } from "react-redux";
import {
    changeCurrentTheater,
    changeCurrentTheaterSystem,
    fetchGroupTheater
} from "containers/Movie/slices/homeSlice";

export default function Schedule(props) {
    const {
        groupTheater,
        currentTheaterSystem,
        currentListTheaters,
        currentTheater
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

    }, [dispatch])

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
                    {/*  */}
                </ul>
                <div className="schedule-section__content__showtimes">
                    <div className="schedule-section__content__showtimes__movie">
                        <div className="schedule-section__content__showtimes__movie__item">
                            <div className="movie__item__wrapper flex flex-wrap items-center h-24">
                                <img className="h-full" src={''} alt="movie" />
                                <div className="h-full ml-4">
                                    <p className=" text-lg font-medium">
                                        <span className="inline-block p-1 bg-green-500 rounded-md mr-2 text-sm">PG-13</span>
                                        Caption America
                                    </p>
                                    <p className="duration">2hrs 50 min</p>
                                    <p className="-mt-1">Release Date : November 8 , 2020</p>
                                </div>
                            </div>
                            <ul className="time mt-4">
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                            </ul>
                        </div>
                        <div className="schedule-section__content__showtimes__movie__item">
                            <div className="movie__item__wrapper flex flex-wrap items-center h-24">
                                <img className="h-full" src={''} alt="movie" />
                                <div className="h-full ml-4">
                                    <p className=" text-lg font-medium">
                                        <span className="inline-block p-1 bg-green-500 rounded-md mr-2 text-sm">PG-13</span>
                                        Caption America
                                    </p>
                                    <p className="duration">2hrs 50 min</p>
                                    <p className="-mt-1">Release Date : November 8 , 2020</p>
                                </div>
                            </div>
                            <ul className="time mt-4">
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                            </ul>
                        </div>
                        <div className="schedule-section__content__showtimes__movie__item">
                            <div className="movie__item__wrapper flex flex-wrap items-center h-24">
                                <img className="h-full" src={''} alt="movie" />
                                <div className="h-full ml-4">
                                    <p className=" text-lg font-medium">
                                        <span className="inline-block p-1 bg-green-500 rounded-md mr-2 text-sm">PG-13</span>
                                        Caption America
                                    </p>
                                    <p className="duration">2hrs 50 min</p>
                                    <p className="-mt-1">Release Date : November 8 , 2020</p>
                                </div>
                            </div>
                            <ul className="time mt-4">
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                            </ul>
                        </div>
                        <div className="schedule-section__content__showtimes__movie__item">
                            <div className="movie__item__wrapper flex flex-wrap items-center h-24">
                                <img className="h-full" src={''} alt="movie" />
                                <div className="h-full ml-4">
                                    <p className=" text-lg font-medium">
                                        <span className="inline-block p-1 bg-green-500 rounded-md mr-2 text-sm">PG-13</span>
                                        Caption America
                                    </p>
                                    <p className="duration">2hrs 50 min</p>
                                    <p className="-mt-1">Release Date : November 8 , 2020</p>
                                </div>
                            </div>
                            <ul className="time mt-4">
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                            </ul>
                        </div>
                        <div className="schedule-section__content__showtimes__movie__item">
                            <div className="movie__item__wrapper flex flex-wrap items-center h-24">
                                <img className="h-full" src={''} alt="movie" />
                                <div className="h-full ml-4">
                                    <p className=" text-lg font-medium">
                                        <span className="inline-block p-1 bg-green-500 rounded-md mr-2 text-sm">PG-13</span>
                                        Caption America
                                    </p>
                                    <p className="duration">2hrs 50 min</p>
                                    <p className="-mt-1">Release Date : November 8 , 2020</p>
                                </div>
                            </div>
                            <ul className="time mt-4">
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
