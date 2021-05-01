import { SEAT } from 'constants/image';
import React from 'react'

export default function SingleSeat(props) {
    const { index, row } = props;
    return (
        <>
            <img src={SEAT.SEAT} alt="seat" />
            <span
                className="inline-block absolute top-1/2 left-1/2 text-sm"
                style={{ transform: 'translate(-50%, -50%)' }}
            >
                {`${row}${index}`}
            </span>
        </>
    )
}
