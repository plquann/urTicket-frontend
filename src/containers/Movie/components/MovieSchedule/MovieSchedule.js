import Icons from "components/Icons";
import React from "react";
import './MovieSchedule.scss';
import { LOGO_PARTNER } from 'constants/image';
import { NavLink } from "react-router-dom";
import { listDay } from "utils/renderDate";
import ShowtimeItem from "../ShowtimeItem/ShowtimeItem";

export default function MovieSchedule(props) {
    // console.log('🚀 ~ file: index.js ~ line 25 ~ Schedule ~ props', props.refProp.current);
    return (
        <>
            <h3 ref={props.refProp} className="uppercase text-2xl font-bold my-4">Movie Schedules</h3>
            <div className="movie-schedule my-10 " >
                <ul className="movie-schedule__theater-list ">
                    <li className="active"><img src={LOGO_PARTNER[19].img} alt="movie System" /><span>cgv cinemas</span></li>
                    <li><img src={LOGO_PARTNER[3].img} alt="movie System" /><span>lotte cinemas</span></li>
                    <li><img src={LOGO_PARTNER[0].img} alt="movie System" /><span>bhd star cineplex</span></li>
                    <li><img src={LOGO_PARTNER[1].img} alt="movie System" /><span>galaxy cinemas</span></li>
                    <li><img src={LOGO_PARTNER[4].img} alt="movie System" /><span>mega gs</span></li>
                    <li><img src={LOGO_PARTNER[5].img} alt="movie System" /><span>beta cinemas</span></li>

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
                        <div className="movie-schedule__showtimes__theater__item">
                            <p><Icons name="Location" /><span>CGV Tran Quang Khai</span></p>
                            <ul className="time">
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
                                <ShowtimeItem link="/seatplan" startTime="09:40" endTime="~11:30" />
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
        </>
    );
}
