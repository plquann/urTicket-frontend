import { SEAT } from 'constants/image'
import React, { useState } from 'react'

export default function CoupleSeat(props) {
    const { index, row } = props;
    const [isBooking, setIsBooking] = useState(false);
    // console.log('🚀 ~ file: index.js ~ line 7 ~ SingleSeat ~ status', isBooking);

    const handleSeatClick = () => {
        setIsBooking(!isBooking);
    }
    return (
        <div className="couple-seat" onClick={handleSeatClick}>
            {isBooking
                ?
                <img
                    src={SEAT.SEAT_COUPLE_SELECTED}
                    alt="seat-selected"
                />
                :
                <img
                    src={SEAT.SEAT_COUPLE_AVAILABLE}
                    alt="seat-available"
                />
            }
            <span
                className=" absolute top-1/2 left-1/2 tracking-widest inline-flex space-x-6"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <span>{row}</span>
                <span>{index}</span>
            </span>
        </div>
    )
}
