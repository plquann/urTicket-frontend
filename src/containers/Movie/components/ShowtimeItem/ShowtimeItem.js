import React from 'react'
import { NavLink } from "react-router-dom";
import "./ShowtimeItem.scss"

export default function ShowtimeItem(props) {
    const {link, startTime, endTime} = props;

    return (
        <NavLink
            to={link}
            className="showtime-item"
        >
            {startTime}
            <span className="ml-2 text-gray-400 opacity-70 text-sm">{endTime}</span>
        </NavLink>
    )
}
