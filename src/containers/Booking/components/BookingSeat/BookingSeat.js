import { SCREEN, SEAT } from 'constants/image';
import React, { useEffect, useState } from 'react';
import CoupleSeat from '../CoupleSeat/CoupleSeat';
import SingleSeat from '../SingleSeat/SingleSeat';
import './BookingSeat.scss';


export default function BookingSeat({ tickets, seatSinglePerRow = 12, seatCouplePerRow = 6 }) {
    const [singleSeat, setSingleSeat] = useState([]);
    const [coupleSeat, setCoupleSeat] = useState([]);
    
    useEffect(() => {
        const formatSeat = (tickets) => {
            let single = [];
            let couple = [];
            tickets.forEach((ticket) => {
                if (ticket.seat.type === 'COUPLE') {
                    couple.push(ticket);
                } else {
                    single.push(ticket);
                }
            });

            setSingleSeat(single);
            setCoupleSeat(couple);
        };

        formatSeat(tickets);
    }, [tickets]);

    return (
        <div className="screen">
            <h4 className="screen__area">SCREEN</h4>

            <div className="screen__img">
                <img src={SCREEN} alt="movie" className="w-full" />
            </div>

            <div className="screen__wrapper">
                {singleSeat.reduce((acc, ticket, index) => {
                    if (index % seatSinglePerRow === 0) {
                        acc.push(
                            <div className="screen__wrapper__row" key={index}>
                                <span>{ticket.seat.row}</span>
                                <ul>
                                    {
                                        singleSeat.slice(index, index + seatSinglePerRow).map((item, index) => (
                                            <li key={index} className="relative">
                                                <SingleSeat col={item.seat.column} row={item.seat.row} ticket={item} />
                                            </li>
                                        ))
                                    }
                                </ul>
                                <span>{ticket.seat.row}</span>
                            </div>
                        );
                        return acc;
                    }
                    return acc;
                }, [])
                }
                {/* {alphaBet.map((row, index) => (
                    <div key={index} className="screen__wrapper__row">
                        <span>{row}</span>
                        <ul>
                            {initArr().map((col, index) => (
                                <li key={index} className="relative">
                                    <SingleSeat index={col} row={row} />
                                </li>
                            ))}
                        </ul>
                        <span>{row}</span>
                    </div>
                ))} */}

                <p className="screen__area">COUPLE SEAT</p>
                {coupleSeat.reduce((acc, ticket, index) => {
                    if (index % seatCouplePerRow === 0) {
                        acc.push(
                            <div className="screen__wrapper__row" key={index}>
                                <span>{ticket.seat.row}</span>
                                <ul>
                                    {
                                        coupleSeat.slice(index, index + seatCouplePerRow).map((item, index) => (
                                            <li key={index} className="relative">
                                                <CoupleSeat col={item.seat.column} row={item.seat.row} ticket={item} />
                                            </li>
                                        ))
                                    }
                                </ul>
                                <span>{ticket.seat.row}</span>
                            </div>
                        );
                        return acc;
                    }
                    return acc;
                }, [])
                }

                {/* {['G', 'H'].map((row, index) => (
                    <div key={index} className="screen__wrapper__couple">
                        <span>{row}</span>
                        <ul>
                            {[1, 2, 3, 4, 5, 6].map((col, index) => (
                                <li key={index} className="relative">
                                    <CoupleSeat index={col} row={row} />
                                </li>
                            ))}
                        </ul>
                        <span>{row}</span>
                    </div>
                ))} */}
            </div>

            <div className="screen__seat-info">
                <div className="screen__seat-info__item">
                    <div className="screen__seat-info__item__label">
                        <img src={SEAT.SEAT_AVAILABLE} alt="seat-available" />
                    </div>
                    <span className="font-medium ">Available</span>
                </div>
                <div className="screen__seat-info__item">
                    <div className="screen__seat-info__item__label">
                        <img src={SEAT.SEAT_SELECTED} alt="seat-selected" />
                    </div>
                    <span className="font-medium ">Selected</span>
                </div>
                <div className="screen__seat-info__item">
                    <div className="screen__seat-info__item__label">
                        <img src={SEAT.SEAT_RESERVED} alt="seat-reserved" />
                    </div>
                    <span className="font-medium">Reserved</span>
                </div>
            </div>

        </div>
    )
}
