import React from "react";
import './Schedule.scss';
import { LOGO_PARTNER, LOGO, MOVIE_IMG } from 'constants/image';
import ShowtimeItem from "../ShowtimeItem/ShowtimeItem";
import { listDay } from "utils/renderDate";

export default function Schedule(props) {
    // console.log('🚀 ~ file: index.js ~ line 25 ~ Schedule ~ props', props.refProp.current);

    return (
        <div className="schedule-section max-w-screen-lg mx-auto pb-8 mt-4">
            <div className="schedule-section__title mb-12">
                <p className="text-5xl font-bold">SHOWTIME SCHEDULES</p>
                <p>Choose a movie and enjoy our service</p>
            </div>
            <div className="schedule-section__content" >
                <ul className="schedule-section__content__theater ">
                    <li className="active"><img src={LOGO_PARTNER[19].img} alt="movie System" /></li>
                    <li><img src={LOGO_PARTNER[3].img} alt="movie System" /></li>
                    <li><img src={LOGO_PARTNER[0].img} alt="movie System" /></li>
                    <li><img src={LOGO_PARTNER[1].img} alt="movie System" /></li>
                    <li><img src={LOGO_PARTNER[4].img} alt="movie System" /></li>
                    <li><img src={LOGO_PARTNER[5].img} alt="movie System" /></li>

                </ul>
                <ul className="schedule-section__content__cinema">
                    <li className="active">
                        <img src={LOGO.CINEMA_LOGO} alt="cinema" />
                        <div className=" cinema-address">
                            <span className="text-sm font-medium">CGV Crescent Mall</span>
                            <p className="text-xs line-clamp-3">5th Floor, Crescent Mall Nguyen Van Linh Boulevard, Phu My Hung, District 7, HCMC</p>
                        </div>

                    </li>
                    <li className="">
                        <img src={LOGO.CINEMA_LOGO} alt="cinema" />
                        <div className=" cinema-address">
                            <span className="text-sm font-medium">CGV Dong Khoi</span>
                            <p className="text-xs line-clamp-3">3rd floor, Vincom Center Dong Khoi, 72 Le Thanh Ton & 45A Ly Tu Trong, District 1, HCMC</p>
                        </div>

                    </li>
                    <li className="">
                        <img src={LOGO.CINEMA_LOGO} alt="cinema" />
                        <div className=" cinema-address">
                            <span className="text-sm font-medium">CGV Tran Quang Khai</span>
                            <p className="text-xs line-clamp-3">2nd & 3rd Floor, 62 Tran Quang Khai, Tan Dinh, District 1, HCMC</p>
                        </div>

                    </li>
                    <li className="">
                        <img src={LOGO.CINEMA_LOGO} alt="cinema" />
                        <div className=" cinema-address">
                            <span className="text-sm font-medium">CGV Landmark 81</span>
                            <p className="text-xs line-clamp-3">Floor B1, Vincom Center Landmark 81, 772 Dien Bien Phu, Ward 22, Binh Thanh District, HCMC</p>
                        </div>

                    </li>
                    <li className="">
                        <img src={LOGO.CINEMA_LOGO} alt="cinema" />
                        <div className=" cinema-address">
                            <span className="text-sm font-medium">CGV Aaeon Tan Phu</span>
                            <p className="text-xs line-clamp-3">3rd Floor, Aeon Mall 30 Bo Bao Tan Thang, Son Ky Ward, Tan Phu District, HCMC</p>
                        </div>

                    </li>
                    <li className="">
                        <img src={LOGO.CINEMA_LOGO} alt="cinema" />
                        <div className=" cinema-address">
                            <span className="text-sm font-medium">CGV Tran Quang Khai</span>
                            <p className="text-xs line-clamp-3">5th Floor, Crescent Mall Nguyen Van Linh Boulevard, Phu My Hung, District 7, HCMc</p>
                        </div>

                    </li>
                    <li className="">
                        <img src={LOGO.CINEMA_LOGO} alt="cinema" />
                        <div className=" cinema-address">
                            <span className="text-sm font-medium">CGV Tran Quang Khai</span>
                            <p className="text-xs line-clamp-3">5th Floor, Crescent Mall Nguyen Van Linh Boulevard, Phu My Hung, District 7, HCMc</p>
                        </div>

                    </li>
                </ul>
                <div className="schedule-section__content__showtimes">
                    {/* <div className="schedule-section__content__showtimes__date">
                        {listDay().map((item, index) => {
                            return (
                                <div className="item" key={index}>
                                    <p>{new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(item)}</p>
                                    <span className="mr-2">{item.getDate()}</span>
                                    <span>{new Intl.DateTimeFormat('en-US', { month: 'long' }).format(item)}</span>
                                </div>
                            )
                        })}
                    </div> */}

                    <div className="schedule-section__content__showtimes__movie">
                        <div className="schedule-section__content__showtimes__movie__item">
                            <div className="movie__item__wrapper flex flex-wrap items-center h-24">
                                <img className="h-full" src={MOVIE_IMG[2]} alt="movie" />
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
                                <img className="h-full" src={MOVIE_IMG[2]} alt="movie" />
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
                                <img className="h-full" src={MOVIE_IMG[2]} alt="movie" />
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
                                <img className="h-full" src={MOVIE_IMG[2]} alt="movie" />
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
                                <img className="h-full" src={MOVIE_IMG[2]} alt="movie" />
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
