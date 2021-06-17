import { SEAT } from 'constants/image'
import React from 'react'

export default function CoupleSeat(props) {
    const { index, row } = props;
    return (
        <>
            <img src={SEAT.SEAT_COUPLE} alt="seat couple" />
            <span
                className=" absolute top-1/2 left-1/2 tracking-widest inline-flex space-x-6"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                <span>{row}</span>
                <span>{index}</span>
            </span>
        </>
    )
}
