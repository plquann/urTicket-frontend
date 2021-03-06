import React from 'react'
import { Link } from "react-router-dom";
import "./ShowtimeItem.scss"

export default function ShowtimeItem(props) {
    const {link, startTime, endTime} = props;

    return (
        <Link
            to={link}
            className="showtime-item"
        >
            {startTime}
            <span className="ml-2 text-gray-400 opacity-70 text-sm">{endTime}</span>
        </Link>
    )
}
