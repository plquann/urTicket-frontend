import React, { useEffect } from 'react'
import BookingInfo from 'containers/Booking/components/BookingInfo/BookingInfo'
import MovieSummaryBanner from 'containers/Booking/components/MovieSummaryBanner/MovieSummaryBanner'
import Screen from 'containers/Booking/components/BookingSeat/BookingSeat'
import Page from 'components/Page/Page'
import { useSelector, useDispatch } from 'react-redux'
import { fetchShowtimeInfo } from 'containers/Booking/slices/bookingSlice'
import { useParams } from 'react-router-dom'

export default function SeatPlan() {
    const showtimeInfo = useSelector(state => state.booking.showtimeInfo);
    const dispatch = useDispatch();
    const { showtimeId } = useParams();


    useEffect(() => {
        dispatch(fetchShowtimeInfo(showtimeId));
    }, [dispatch, showtimeId]);



    return (
        <Page title="Seat Plan | UR-TICKET">
            <div style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="booking max-w-screen-xl mx-auto grid grid-cols-4 gap-2 mt-16">
                    <div className="py-8">
                        <MovieSummaryBanner showtime={showtimeInfo}/>
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