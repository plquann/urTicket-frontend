import React from 'react';
import './BookingDirectional.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function BookingDirect() {

    const {pickedSeats,steps, showtimeInfo} = useSelector(state => state.booking);

    return (
        <div className="booking-directional pt-4" >
            <div className="flex justify-end">
                <button className="item md-order-1">
                    <Link to={`/booking/${showtimeInfo.id}/food`} className="text-2xl font-semibold">
                        NEXT
                    </Link>
                </button>
            </div>
        </div>
    )
}
