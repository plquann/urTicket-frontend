import React, { useEffect } from 'react';
import Page from 'components/Page/Page';
import Food from 'containers/Booking/components/Food/Food'
import MovieSummaryBanner from 'containers/Booking/components/MovieSummaryBanner/MovieSummaryBanner';
import { setStepBooking } from 'containers/Booking/slices/bookingSlice';
import { useDispatch, useSelector } from 'react-redux';
import './OrderFood.scss';

export default function OrderFood() {
    const showtimeInfo = useSelector(state => state.booking.showtimeInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStepBooking('checkout'))
    }, [dispatch]);

    return (
        <Page title="Order Food | UR-TICKET">
            <div className="order-food pb-10 mt-16 max-w-screen-xl mx-auto">
                <div className="order-food__title">
                    <h2>we have food</h2>
                    <p className="text-lg">Pre-order Your Meal and Save More!</p>
                </div>
                <div className="order-food__wrapper  grid grid-cols-4 gap-6">
                    <div className="menu col-span-3">
                        <Food />
                    </div>
                    <div className="py-8">
                        <MovieSummaryBanner showtime={showtimeInfo} />
                    </div>

                </div>
            </div>
        </Page>
    )
}
