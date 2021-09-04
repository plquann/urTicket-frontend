import React, { useEffect } from 'react'
import MovieSummaryBanner from 'containers/Booking/components/MovieSummaryBanner/MovieSummaryBanner'
import BookingSeat from 'containers/Booking/components/BookingSeat/BookingSeat'
import Page from 'components/Page/Page'
import { useSelector, useDispatch } from 'react-redux'
import { checkPickedSeatsShowtime, fetchShowtimeInfo, setStepBooking } from 'containers/Booking/slices/bookingSlice'
import { useParams } from 'react-router-dom'
import { ticketAPI } from 'apis'
import { useState } from 'react'

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
        dispatch(setStepBooking('food'))
    }, [dispatch]);

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
            <div className=" max-w-screen-xl mx-auto mt-16 py-10" >
                <div className="booking grid grid-cols-4 gap-2">
                    <div className="col-span-3">
                        <BookingSeat tickets={tickets} />
                    </div>
                    <div className="">
                        <MovieSummaryBanner showtime={showtimeInfo} />

                    </div>

                </div>
            </div>
        </Page>
    )
}
