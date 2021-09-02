import BookingInfo from 'containers/Booking/components/BookingInfo/BookingInfo'
import BookingReference from 'containers/Booking/components/BookingReference/BookingReference'
import MovieSummaryBanner from 'containers/Booking/components/MovieSummaryBanner/MovieSummaryBanner'
import Screen from 'containers/Booking/components/BookingSeat/BookingSeat'
import React from 'react'
import Page from 'components/Page/Page'

export default function SeatPlan() {
    return (
        <Page title="Seat Plan | UR-TICKET">
            <div style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="booking max-w-screen-xl mx-auto grid grid-cols-4 gap-2 mt-16">
                    <div className="py-8">
                        <MovieSummaryBanner />
                    </div>
                    <div className="col-span-3">
                        <BookingInfo />
                        <Screen />
                    </div>
                </div>
            </div>
        </Page>
    )
}

// #1A202C