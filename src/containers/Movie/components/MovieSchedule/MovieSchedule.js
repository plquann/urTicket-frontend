import React, { useEffect, useState } from "react";
import './MovieSchedule.scss';
import { listDay } from "utils/renderDate";
import ShowtimeItem from "../ShowtimeItem/ShowtimeItem";
import { LocationMarker } from "components/Icons";
import { groupTheaterAPI } from "apis";
import { useSelector } from "react-redux";
import dateFormat from "dateformat";

export default function MovieSchedule(props) {
    const [groupTheater, setGroupTheater] = useState([]);
    const [currentGroup, setCurrentGroup] = useState(null);

    const { data } = useSelector(state => state.movie.movieShowtimes);
    console.log('🚀 ~ file: MovieSchedule.js ~ line 16 ~ movieShowtimes', data);

    useEffect(() => {
        const fetchGroupTheater = async () => {
            try {
                const groupTheater = await groupTheaterAPI.getGroupTheater();
                setGroupTheater(groupTheater);
                setCurrentGroup(groupTheater[0]);
            } catch (error) {
                console.log("🚀 ~ error", error);
            }
        };
        console.log('dispatch fetch group')
        fetchGroupTheater();
    }, []);

    return (
        <>
            <h3 ref={props.refProp} className="uppercase text-2xl font-bold my-4">Movie Schedules</h3>
            <div className="movie-schedule my-10 " >
                <ul className="movie-schedule__theater-list ">
                    {groupTheater.length && groupTheater.map((theaters, index) => {
                        let active = theaters?.id === currentGroup?.id ? "active" : "";
                        return (
                            <li
                                key={index}
                                className={`${active}`}
                                onClick={() => setCurrentGroup(theaters)}
                            >
                                <img src={theaters?.logo} alt="movie System" />
                                <span>{theaters?.name}</span>
                            </li>)
                    })}
                </ul>
                <div className="movie-schedule__showtimes">
                    <div className="movie-schedule__showtimes__date ">
                        {listDay().map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <p>{new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(item)}</p>
                                    <span className="mr-2">{item.getDate()}</span>
                                    <span>{new Intl.DateTimeFormat('en-US', { month: 'long' }).format(item)}</span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="movie-schedule__showtimes__theater">
                        {currentGroup && data.length
                            ? data.findIndex(item => item.id === currentGroup.id) !== -1
                                ? data.find(item => item.id === currentGroup.id)
                                    .theaters.map((theater, index) => {
                                        return (
                                            <div className="movie-schedule__showtimes__theater__item" key={index}>
                                                <p><LocationMarker /><span>{theater?.name}</span></p>
                                                <ul className="time">
                                                    {
                                                        theater?.showtimes.map((showtime, index) => {
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
                                                        })
                                                    }
                                                </ul>

                                            </div>
                                        )
                                    })
                                : <div className="py-2 pl-4 text-xl font-semibold">No Showtime</div>
                            : ''
                        }

                    </div>
                </div>
            </div>
        </>
    );
}
