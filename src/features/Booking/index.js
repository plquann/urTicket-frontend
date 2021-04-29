import { COMBO_FOOD } from 'constants/food';
import { BANNER_BG, SCREEN, SEAT } from 'constants/image'
import React from 'react';
import './Booking.scss';

const initArr = () => {
    const arr = [];
    for (let i = 0; i < 14; i++) {
        arr.push(i + 1);
    }

    return [...arr];
}

const alphaBet = ['A', 'B', 'C', 'D', 'E', 'F'];

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

                <div className="screen-area">
                    <h4
                        className="screen text-4xl text-center w-2/12 mx-auto my-5 py-4"
                        style={{ borderTop: '1px solid #213a69', borderBottom: '1px solid #213a69' }}
                    >
                        SCREEN
                    </h4>

                    <div className="screen-thumb max-w-xl mx-auto my-8">
                        <img src={SCREEN} alt="movie" className="w-full" />
                    </div>

                    <div className="screen-wrapper  max-w-screen-lg mx-auto pt-10">
                        {alphaBet.map((item, index) => (
                            <div key={index} className="flex space-x-10 mb-8 justify-center items-center">
                                <span>{item}</span>
                                <ul className="flex flex-wrap space-x-4">
                                    {initArr().map((num, index) => (
                                        <li key={index} className="relative">
                                            <img src={SEAT.SEAT} alt="seat" />
                                            <span className="inline-block absolute top-1/2 left-1/2 text-sm"
                                                style={{ transform: 'translate(-50%, -50%)' }}
                                            >
                                                {`${item}${num}`}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <span>{item}</span>
                            </div>
                        ))}
                        <p
                            className=" text-center text-2xl font-semibold w-2/12 mx-auto my-5 py-4"
                            style={{ borderTop: '1px solid #213a69', borderBottom: '1px solid #213a69' }}
                        >
                            COUPLE SEAT
                        </p>
                        {['G', 'H'].map((item, index) => (
                            <div key={index} className="seat-couple flex space-x-6 mb-5 justify-center items-center">
                                <span>{item}</span>
                                <ul className="flex flex-wrap space-x-9">
                                    {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
                                        <li key={index} className="relative">
                                            <img src={SEAT.SEAT_COUPLE} alt="seat couple" />
                                            <span className=" absolute top-1/2 left-1/2 tracking-widest inline-flex space-x-6"
                                                style={{ transform: 'translate(-50%, -50%)' }}
                                            >
                                                <span>{item}</span>
                                                <span>{num}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <span>{item}</span>
                            </div>
                        ))}

                    </div>

                </div>


                <div className="food max-w-screen-lg mx-auto mt-8">
                    <div class="section-header-3 text-center mb-6">
                        <h2 class="title text-5xl font-bold uppercase mb-3">we have food</h2>
                        <p className="text-lg">Pre-order Your Meal and Save More!</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {COMBO_FOOD.map((food, index) => (
                            <div key={index} className="food__item rounded-xl"
                                style={{ background: '#032055', padding: '2px', border: '1px solid #213a69' }}
                            >
                                <div className="img rounded-t-lg h-3/5 relative" style={{ background: '#011a48', }}>
                                    <img src={food.img} alt="food combo" className="w-full h-full" />
                                    <div className="price w-12 h-16 text-2xl font-bold flex justify-center items-start absolute top-0.5 left-3"
                                        style={{ background: '#31d7a9', clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 50% 75%, 0 100%, 0 0)' }}
                                    >
                                        {food.price}
                                    </div>
                                    <div className="sale w-16 h-16 text-xl font-bold flex justify-center absolute top-8 right-3 rounded-full text-center"
                                        style={{ background: '#eb1436' }}
                                    >
                                        {`${food.sale}% OFF`}
                                    </div>
                                </div>
                                <div className="wrapper text-center h-2/5 px-10">
                                    <h5 className="text-2xl font-semibold mt-1 h-14 mb-1 overflow-hidden">{food.label}</h5>
                                    <p className="h-14 -mt-2" style={{ borderColor: '#11326f' }}>{food.description}</p>
                                    <div className="order h-10 mt-4 grid grid-cols-4 w-4/6 mx-auto text-xl text-center  "

                                    >
                                        <button className="border py-2 focus:outline-none rounded-l-full flex justify-center items-center" style={{ borderColor: '#11326f' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <span className="col-span-2 border py-2 " style={{ borderColor: '#11326f' }}>0</span>
                                        <button className="border focus:outline-none rounded-r-full flex justify-center items-center" style={{ borderColor: '#11326f' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

                <div className="summary w-3/12 mx-auto p-8 pb-5"
                    style={{ background: '#032055', border: '1px solid #11326f' }}
                >
                    <h3 className="text-2xl pb-5 mb-5 font-semibold text-center" style={{ borderBottom: '1px dashed #11326f' }}>BOOKING SUMMARY</h3>
                    <ul className="ticket__info pb-4" style={{ borderBottom: '1px dashed #11326f' }}>
                        <li className="uppercase text-xl font-semibold my-4">Captain America: The First Avengers</li>
                        <li className="flex flex-wrap justify-between text-lg">
                            <span className="font-semibold">CGV Landmark 81</span>
                            <span>Room 3</span>
                        </li>
                        <li className="flex flex-wrap justify-between">
                            <span className="text-sm" style={{ color: '#9aace5' }}>10 SEP TUE, 11:00 PM</span>
                            <span className="font-semibold text-lg">G8 G9</span>
                        </li>
                        <li className="flex flex-wrap justify-between text-lg font-semibold mt-5">
                            <span>TICKETS PRICE</span>
                            <span className="text-xl">$55</span>
                        </li>
                    </ul>
                    <ul className="food_info pb-4" style={{ borderBottom: '1px dashed #11326f' }}>
                        <li className="uppercase text-xl font-semibold my-4">FOOD & BEVERAGE</li>
                        <li className="flex flex-wrap justify-between text-lg">
                            <span>1 Brown Bears Combo</span>
                            <span className="">$22</span>
                        </li>
                        <li className="flex flex-wrap justify-between text-lg">
                            <span>2 Snack Combo</span>
                            <span className="">$24</span>
                        </li>
                        <li className="text-right font-semibold text-xl mt-2">$46</li>
                    </ul>
                    <div className="amount my-4" style={{ borderBottom: '1px dashed #11326f' }}>
                        <div className="total flex flex-wrap justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span>$77</span>
                        </div>
                        <div className="vat flex flex-wrap justify-between text-sm" style={{ color: '#9aace5' }}>
                            <span>VAT(10%)</span>
                            <span>$7</span>
                        </div>
                        <div className="payment total flex flex-wrap justify-between text-xl font-semibold my-4">
                            <span>AMOUNT PAYABLE</span>
                            <span>$84</span>
                        </div>
                    </div>
                    <div className="btn-payment text-center mt-2 pt-4">
                        <button className="bg-btn-gradient p-2 rounded-full uppercase font-bold">Payment Now</button>
                    </div>
                </div>
            </div>

            <div className="check__out w-1/2 mx-auto my-5">
                <div className="checkout-widget checkout-contact">
                    <h5 className="title">Share your Contact  Details </h5>
                    <form className="checkout-contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Enter your Mail" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Enter your Phone Number " />
                        </div>
                        <div className="form-group">
                            <input type="submit" defaultValue="Continue" className="custom-button" />
                        </div>
                    </form>
                </div>

                <div className="promo checkout-widget checkout-contact">
                    <h5 className="title">Promo Code </h5>
                    <form className="checkout-contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Please enter promo code" />
                        </div>
                        <div className="form-group">
                            <input type="submit" defaultValue="Verify" className="custom-button" />
                        </div>
                    </form>
                </div>

                <div className=" payment checkout-widget checkout-card mb-0">
                    <h5 className="title">Payment Option </h5>
                    <ul className="payment-option">
                        <li className="active">
                            <a href="#0">
                                <img src="./assets/images/payment/card.png" alt="payment" />
                                <span>Credit Card</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <img src="./assets/images/payment/card.png" alt="payment" />
                                <span>Debit Card</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <img src="./assets/images/payment/paypal.png" alt="payment" />
                                <span>paypal</span>
                            </a>
                        </li>
                    </ul>
                    <h6 className="subtitle">Enter Your Card Details </h6>
                    <form className="payment-card-form">
                        <div className="form-group w-100">
                            <label htmlFor="card1">Card Details</label>
                            <input type="text" id="card1" />
                            <div className="right-icon">
                                <i className="flaticon-lock" />
                            </div>
                        </div>
                        <div className="form-group w-100">
                            <label htmlFor="card2"> Name on the Card</label>
                            <input type="text" id="card2" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="card3">Expiration</label>
                            <input type="text" id="card3" placeholder="MM/YY" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="card4">CVV</label>
                            <input type="text" id="card4" placeholder="CVV" />
                        </div>
                        <div className="form-group check-group">
                            <input id="card5" type="checkbox" defaultChecked />
                            <label htmlFor="card5">
                                <span className="title">QuickPay</span>
                                <span className="info">Save this card information to my Boleto  account and make faster payments.</span>
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="custom-button" defaultValue="make payment" />
                        </div>
                    </form>
                    <p className="notice">
                        By Clicking "Make Payment" you agree to the <a href="#0">terms and conditions</a>
                    </p>
                </div>

            </div>

        </div>
    )
}
