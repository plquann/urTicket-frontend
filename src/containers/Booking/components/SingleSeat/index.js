import { SEAT } from 'constants/image';
import React, { useState } from 'react'

export default function SingleSeat(props) {
    const { index, row } = props;
    const [isBooking, setIsBooking] = useState(false);
    console.log('🚀 ~ file: index.js ~ line 7 ~ SingleSeat ~ status', isBooking);

    const handleSeatClick = () => {
        setIsBooking(!isBooking);
    }
    return (
        <div className="SingleSeat" onClick={handleSeatClick}>
            {isBooking
                ?
                <img
                    src={SEAT.SEAT_BOOKING}
                    alt="seat"
                />
                :
                <img
                    src={SEAT.SEAT_FREE}
                    alt="seat"
                />
            }
            <span
                className="inline-block absolute top-1/2 left-1/2 text-sm"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                {`${row}${index}`}
            </span>
        </div>
    )
}
