import { SEAT } from 'constants/image';
import { handlePickedSeats } from 'containers/Booking/slices/bookingSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function SingleSeat(props) {
    const { col, row, ticket, pickedSeats } = props;
    const [isBooking, setIsBooking] = useState(false);
    const dispatch = useDispatch();

    const handleSeatClick = (ticket) => {
        setIsBooking(!isBooking);
        dispatch(handlePickedSeats(ticket))
    }

    return (
        <div className="SingleSeat" onClick={() => handleSeatClick(ticket)}>
            {ticket.reservationId
                ? <img src={SEAT.SEAT_RESERVED} alt="seat-reserved" />
                : pickedSeats.findIndex(item => item.id === ticket.id) !== -1
                    ? <img src={SEAT.SEAT_SELECTED} alt="seat-selected" />
                    : isBooking
                        ?
                        <img
                            src={SEAT.SEAT_SELECTED}
                            alt="seat-selected"
                        />
                        :
                        <img
                            src={SEAT.SEAT_AVAILABLE}
                            alt="seat-available"
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
