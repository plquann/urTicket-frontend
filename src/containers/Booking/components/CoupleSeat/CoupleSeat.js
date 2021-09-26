import { SEAT } from 'constants/image'
import { handlePickedSeats } from 'containers/Booking/slices/bookingSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function CoupleSeat(props) {
    const { col, row, ticket, pickedSeats } = props;
    const [isBooking, setIsBooking] = useState(false);
    const dispatch = useDispatch();
    // console.log('🚀 ~ file: index.js ~ line 7 ~ SingleSeat ~ status', isBooking);

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
                    ? <button className="couple-seat block " disabled>
                        <img src={SEAT.SEAT_COUPLE_RESERVED} alt="seat-reserved" />
                        <span
                            className="inline-block absolute top-1/2 left-1/2 text-sm font-semibold"
                            style={{ transform: 'translate(-50%, -50%)' }}
                        >
                            {`${row}${col}`}
                        </span>
                    </button>
                    : <button className="couple-seat block" onClick={() => handleSeatClick(ticket)}>
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
                            className=" absolute top-1/2 left-1/2 tracking-widest inline-flex space-x-6 font-semibold"
                            style={{ transform: 'translate(-50%, -50%)' }}
                        >
                            <span>{row}</span>
                            <span>{col}</span>
                        </span>
                    </button>
            }
        </>
    )
}
