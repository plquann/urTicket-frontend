import BookingSummary from 'containers/Booking/components/BookingSummary'
import Food from 'containers/Booking/components/Food'
import Header from 'containers/Booking/components/Header/'
import React from 'react';
import './OrderFood.scss';

export default function OrderFood() {
    return (
        <div className="order-food pb-10" style={{ backgroundColor: 'var(--color-secondary)' }}>
            <Header />
            <div className="order-food__title ">
                <h2>we have food</h2>
                <p className="text-lg">Pre-order Your Meal and Save More!</p>
            </div>
            <div className="order-food__wrapper max-w-screen-xl mx-auto grid grid-cols-3 gap-6">
                <div className="">
                    <BookingSummary />
                </div>
                <div className="menu col-span-2 ">
                    <Food />
                </div>
            </div>
        </div>
    )
}
