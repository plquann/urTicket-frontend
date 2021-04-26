import Icons from "components/Icons";
import React from "react";
import './Schedule.scss';
import { LOGO_PARTNER } from 'constants/image';

const listDay = () => {
    const arrDays = [];
    const day = new Date();
    let dayFormat = new Date(day.getFullYear(), day.getMonth(), day.getDate());

    arrDays.push(new Date(dayFormat));

    for (let i = 0; i < 10; i++) {
        dayFormat.setDate(dayFormat.getDate() + 1);
        console.log("🚀 ~ dayFormat", dayFormat);
        arrDays.push(new Date(dayFormat));
    }

    console.table(arrDays);
    return [...arrDays];
};

export default function Schedule(props) {
    return (
        <div className="schedule max-w-screen-md mx-auto my-10 " >
            <ul className="theater-list ">
                <li className="active"><img src={LOGO_PARTNER[20].img} alt="movie System" /><span>cgv cinemas</span></li>
                <li><img src={LOGO_PARTNER[3].img} alt="movie System" /><span>lotte cinemas</span></li>
                <li><img src={LOGO_PARTNER[0].img} alt="movie System" /><span>bhd star cineplex</span></li>
                <li><img src={LOGO_PARTNER[1].img} alt="movie System" /><span>galaxy cinemas</span></li>
                <li><img src={LOGO_PARTNER[4].img} alt="movie System" /><span>mega gs</span></li>
                <li><img src={LOGO_PARTNER[5].img} alt="movie System" /><span>beta cinemas</span></li>

            </ul>
            <div className="showtimes">
                <div className="date ">
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

                <div className="theater">
                    <div className="theater__item">
                        <p><Icons name="Location" /><span>CGV Tran Quang Khai</span></p>
                        <ul className="time">
                            <li className="time__item">09:40<span className="ml-2 text-gray-400 opacity-70 text-sm">~11:30</span></li>
                            <li className="time__item active">13:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~15:25</span></li>
                            <li className="time__item">15:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~17:10</span></li>
                            <li className="time__item">19:50<span className="ml-2 text-gray-400 opacity-70 text-sm">~21:50</span></li>
                            <li className="time__item">21:00<span className="ml-2 text-gray-400 opacity-70 text-sm">~23:15</span></li>
                        </ul>
                    </div>

                    <div className="theater__item">
                        <p><Icons name="Location" /><span>CGV Aeon Tan Phu</span></p>
                        <ul className="time">
                            <li className="time__item">09:40<span className="ml-2 text-gray-400 opacity-70 text-sm">~11:30</span></li>
                            <li className="time__item active">13:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~15:25</span></li>
                            <li className="time__item">15:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~17:10</span></li>
                            <li className="time__item">19:50<span className="ml-2 text-gray-400 opacity-70 text-sm">~21:50</span></li>
                            <li className="time__item">21:00<span className="ml-2 text-gray-400 opacity-70 text-sm">~23:15</span></li>
                        </ul>
                    </div>

                    <div className="theater__item">
                        <p><Icons name="Location" /><span>CGV Landmark 81</span></p>
                        <ul className="time">
                            <li className="time__item">09:40<span className="ml-2 text-gray-400 opacity-70 text-sm">~11:30</span></li>
                            <li className="time__item active">13:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~15:25</span></li>
                            <li className="time__item">15:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~17:10</span></li>
                            <li className="time__item">19:50<span className="ml-2 text-gray-400 opacity-70 text-sm">~21:50</span></li>
                            <li className="time__item">21:00<span className="ml-2 text-gray-400 opacity-70 text-sm">~23:15</span></li>
                        </ul>
                    </div>

                    <div className="theater__item">
                        <p><Icons name="Location" /><span>CGV Van Hanh Mall</span></p>
                        <ul className="time">
                            <li className="time__item">09:40<span className="ml-2 text-gray-400 opacity-70 text-sm">~11:30</span></li>
                            <li className="time__item active">13:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~15:25</span></li>
                            <li className="time__item">15:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~17:10</span></li>
                            <li className="time__item">19:50<span className="ml-2 text-gray-400 opacity-70 text-sm">~21:50</span></li>
                            <li className="time__item">21:00<span className="ml-2 text-gray-400 opacity-70 text-sm">~23:15</span></li>
                        </ul>
                    </div>
                    <div className="theater__item">
                        <p><Icons name="Location" /><span>CGV Van Hanh Mall</span></p>
                        <ul className="time">
                            <li className="time__item">09:40<span className="ml-2 text-gray-400 opacity-70 text-sm">~11:30</span></li>
                            <li className="time__item active">13:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~15:25</span></li>
                            <li className="time__item">15:45<span className="ml-2 text-gray-400 opacity-70 text-sm">~17:10</span></li>
                            <li className="time__item">19:50<span className="ml-2 text-gray-400 opacity-70 text-sm">~21:50</span></li>
                            <li className="time__item">21:00<span className="ml-2 text-gray-400 opacity-70 text-sm">~23:15</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
