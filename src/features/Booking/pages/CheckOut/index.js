import BookingSummary from 'features/Booking/components/BookingSummary'
import FormPromo from 'features/Booking/components/FormPromo'
import Header from 'features/Booking/components/Header'
import Info from 'features/Booking/components/Info'
import Payment from 'features/Booking/components/Payment'
import React, { Fragment } from 'react'

export default function CheckOut() {
    return (
        <div className="bg-gray-900" style={{ backgroundColor: 'var(--color-secondary)' }}>
            <Header />
            <div className="booking max-w-screen-xl mx-auto grid grid-cols-3 gap-4">
                <div className="mt-16 col-span-2">
                    <Info />
                    <FormPromo />
                    <Payment />
                </div>
                <div className="mt-9">
                    <BookingSummary />
                </div>
            </div>
        </div>
    )
}
