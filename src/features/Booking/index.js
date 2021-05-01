import { BANNER_BG } from 'constants/image';
import React from 'react';
import BookingSummary from './components/BookingSummary';
import Food from './components/Food';
import FormPromo from './components/FormPromo';
import Info from './components/Info';
import Payment from './components/Payment';
import Screen from './components/Screen';


export default function Booking() {
    return (
        <div>
            <section className="details-banner hero-area bg_img seat-plan-banner" style={{ backgroundImage: `url(${BANNER_BG.BANNER_2})` }}>
                <div className="details-banner-wrapper flex justify-center">
                    <div className="details-banner-content text-center ">
                        <h3 className="title text-4xl font-bold">Venus</h3>
                        <div className="tags flex flex-wrap">
                            <a href="#0" className="text-xl font-semibold">CGV Landmark 81 - Room 3</a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="page-title py-8" style={{ backgroundColor: '#032055' }}>
                <div className="page-title-area flex justify-between max-w-screen-lg mx-auto ">
                    <div className="item md-order-1">
                        <a href="movie-ticket-plan.html" className="custom-button back-button">
                            Back
                        </a>
                    </div>
                    <div className="item date-item">
                        <span className="date">Monday, May 28 2021</span>
                        <span>13:00</span>
                    </div>
                    <div className="item">
                        <h5 className="title">05:00</h5>
                        <p>Mins Left</p>
                    </div>
                </div>

            </section>

            <div className="seat-plan-section padding-bottom padding-top">

                <Screen />

                <Food />

                <BookingSummary />
            </div>

            <div className="check__out w-1/2 mx-auto my-5">
                <Info />

                <FormPromo />

                <Payment />

            </div>

        </div>
    )
}
