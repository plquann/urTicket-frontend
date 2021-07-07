import { SCREEN, SEAT } from 'constants/image';
import React from 'react';
import CoupleSeat from '../CoupleSeat/CoupleSeat';
import SingleSeat from '../SingleSeat/SingleSeat';
import './BookingSeat.scss';
import { initArr } from 'utils/renderSeat';

const alphaBet = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function BookingSeat() {
    return (
        <div className="screen">
            <h4 className="screen__area">SCREEN</h4>

            <div className="screen__img">
                <img src={SCREEN} alt="movie" className="w-full" />
            </div>

            <div className="screen__wrapper">
                {alphaBet.map((row, index) => (
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
                ))}

                <p className="screen__area">COUPLE SEAT</p>

                {['G', 'H'].map((row, index) => (
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
                ))}
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
