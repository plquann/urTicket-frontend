import React from "react";
import './Schedule.scss';

const listDay = () => {
    const arrDays = [];
    const day = new Date();
    let dayFormat = new Date(day.getFullYear(), day.getMonth(), day.getDate());

    arrDays.push(dayFormat);

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
        <div className="schedule max-w-screen-md mx-auto my-10">
            <ul className="theater-list ">
                <li>cgv cinemas</li>
                <li>lotte cinemas</li>
                <li>bhd star cineplex</li>
                <li>galaxy cinemas</li>
                <li>mega gs</li>
                <li>beta cinemas</li>
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
                        <p>CGV Tran Quang Khai</p>
                        <ul className="time">
                            <li className="time__item">09:40</li>
                            <li className="time__item active">13:45</li>
                            <li className="time__item">15:45</li>
                            <li className="time__item">19:50</li>
                        </ul>
                    </div>

                    <div className="theater__item">
                        <p>CGV Aeon Tan Phu</p>
                        <ul className="time">
                            <li className="time__item">09:40</li>
                            <li className="time__item active">13:45</li>
                            <li className="time__item">15:45</li>
                            <li className="time__item">19:50</li>
                        </ul>
                    </div>

                    <div className="theater__item">
                        <p>CGV Landmark 81</p>
                        <ul className="time">
                            <li className="time__item">09:40</li>
                            <li className="time__item active">13:45</li>
                            <li className="time__item">15:45</li>
                            <li className="time__item">19:50</li>
                        </ul>
                    </div>

                    <div className="theater__item">
                        <p>CGV Van Hanh Mall</p>
                        <ul className="time">
                            <li className="time__item">09:40</li>
                            <li className="time__item active">13:45</li>
                            <li className="time__item">15:45</li>
                            <li className="time__item">19:50</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
