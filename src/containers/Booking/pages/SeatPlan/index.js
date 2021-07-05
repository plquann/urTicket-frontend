import BookingSummary from 'containers/Booking/components/BookingSummary'
import Screen from 'containers/Booking/components/Screen'
import React from 'react'

export default function SeatPlan() {
    return (
        <div style={{ backgroundColor: 'var(--color-secondary)' }}>
            <div className="booking max-w-screen-xl mx-auto grid grid-cols-3 gap-4 mt-20">
                <div className="mt-10 place-self-center">
                    <BookingSummary />
                </div>
                <div className="col-span-2">
                    <Screen />
                </div>
            </div>
        </div>
    )
}
