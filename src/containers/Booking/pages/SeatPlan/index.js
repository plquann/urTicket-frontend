import MovieSummaryBanner from 'containers/Booking/components/MovieSummaryBanner/MovieSummaryBanner'
import Screen from 'containers/Booking/components/Screen'
import React from 'react'

export default function SeatPlan() {
    return (
        <div style={{ backgroundColor: 'var(--color-secondary)' }}>
            <div className="booking max-w-screen-xl mx-auto grid grid-cols-4 gap-2 mt-20">
                <div className="py-8">
                    <MovieSummaryBanner />
                </div>
                <div className="col-span-3">
                    <Screen />
                </div>
            </div>
        </div>
    )
}
