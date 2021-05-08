import BookingSummary from 'features/Booking/components/BookingSummary'
import Header from 'features/Booking/components/Header'
import Screen from 'features/Booking/components/Screen'
import React, { Fragment } from 'react'

export default function SeatPlan() {
    return (
        <div style={{ backgroundColor: 'var(--color-secondary)' }}>
            <Header />
            <div className="booking max-w-screen-xl mx-auto grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <Screen />
                </div>
                <div className="mt-10 place-self-center">
                    <BookingSummary />
                </div>
            </div>
        </div>
    )
}
