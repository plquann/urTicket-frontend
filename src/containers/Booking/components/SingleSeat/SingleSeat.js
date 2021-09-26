import { SEAT } from 'constants/image';
import { handlePickedSeats } from 'containers/Booking/slices/bookingSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function SingleSeat(props) {
    const { col, row, ticket, pickedSeats } = props;
    const [isBooking, setIsBooking] = useState(false);
    const dispatch = useDispatch();

    const handleSeatClick = (ticket) => {
        setIsBooking(!isBooking);
        dispatch(handlePickedSeats(ticket))
    }

    useEffect(() => {
        if (pickedSeats.findIndex(item => item.id === ticket.id) !== -1)
            setIsBooking(true);
    }, [pickedSeats, ticket])


    return (
        <>
            {
                ticket.reservationId
                    ? <button className="SingleSea block " disabled>
                        <img src={SEAT.SEAT_RESERVED} alt="seat-reserved" />
                        <span
                            className="inline-block absolute top-1/2 left-1/2 text-sm font-semibold"
                            style={{ transform: 'translate(-50%, -50%)' }}
                        >
                            {`${row}${col}`}
                        </span>
                    </button>
                    : <button className="SingleSea block" onClick={() => handleSeatClick(ticket)}>
                        {isBooking
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
                    </button>
            }
        </>

    )
}
