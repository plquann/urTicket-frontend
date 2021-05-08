import BookingSummary from 'features/Booking/components/BookingSummary'
import Food from 'features/Booking/components/Food'
import Header from 'features/Booking/components/Header/'
import React, { Fragment } from 'react'

export default function OrderFood() {
    return (
        <div style={{ backgroundColor: 'var(--color-secondary)' }}>
            <Header />
            <div className="booking max-w-screen-xl mx-auto grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    <Food />
                </div>
                <div className="">
                    <BookingSummary />
                </div>
            </div>
        </div>
    )
}
