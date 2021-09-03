import { SEAT } from 'constants/image';
import React, { useState } from 'react'

export default function SingleSeat(props) {
    const { col, row, ticket } = props;
    const [isBooking, setIsBooking] = useState(false);

    const handleSeatClick = () => {
        setIsBooking(!isBooking);
    }
    return (
        <div className="SingleSeat" onClick={handleSeatClick}>
            {isBooking
                ?
                <img
                    src={SEAT.SEAT_SELECTED}
                    alt="seat"
                />
                :
                <img
                    src={SEAT.SEAT_AVAILABLE}
                    alt="seat"
                />
            }
            <span
                className="inline-block absolute top-1/2 left-1/2 text-sm font-semibold"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                {`${row}${col}`}
            </span>
        </div>
    )
}
