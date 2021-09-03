import React, { useEffect } from 'react'
import MovieSummaryBanner from 'containers/Booking/components/MovieSummaryBanner/MovieSummaryBanner'
import BookingSeat from 'containers/Booking/components/BookingSeat/BookingSeat'
import Page from 'components/Page/Page'
import { useSelector, useDispatch } from 'react-redux'
import { checkPickedSeatsShowtime, fetchShowtimeInfo } from 'containers/Booking/slices/bookingSlice'
import { Link, useParams } from 'react-router-dom'
import { ticketAPI } from 'apis'
import { useState } from 'react'
import BookingDirect from 'containers/Booking/components/BookingDirect/BookingDirect'

export default function SeatPlan() {
    const showtimeInfo = useSelector(state => state.booking.showtimeInfo);
    const [tickets, setTickets] = useState([]);

    const dispatch = useDispatch();
    const { showtimeId } = useParams();

    useEffect(() => {
        dispatch(fetchShowtimeInfo(showtimeId));
    }, [dispatch, showtimeId]);

    useEffect(() => {
        dispatch(checkPickedSeatsShowtime(showtimeId));
    }, [dispatch, showtimeId]);

    useEffect(() => {
        const fetchTickets = async (showtimeId) => {
            try {
                const tickets = await ticketAPI.getTicketsByShowtime(showtimeId);
                setTickets(tickets);
            } catch (error) {
                console.log(error);
            }
        }
        fetchTickets(showtimeId);

    }, [showtimeId]);

    return (
        <Page title="Seat Plan | UR-TICKET">
            <div className="mt-16" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <div className="max-w-screen-xl mx-auto ">
                    <BookingDirect />
                </div>
                <div className="booking max-w-screen-xl mx-auto grid grid-cols-4 gap-2 mt-4">
                    <div className="">
                        <MovieSummaryBanner showtime={showtimeInfo} />
                    </div>
                    <div className="col-span-3">
                        <BookingSeat tickets={tickets}/>
                    </div>
                </div>
            </div>
        </Page>
    )
}
