import React from 'react';
import './BookingSummary.scss';

export default function BookingSummary() {
    return (
        <div className="summary">
            <h3 className="summary__title">BOOKING SUMMARY</h3>

            <ul className="summary__ticket">
                <li className="title"> Captain America: The First Avengers</li>
                <li className="justify-between text-lg">
                    <span className="font-semibold">CGV Landmark 81</span>
                    <span>Room 3</span>
                </li>
                <li className="justify-between">
                    <span className="text-sm" style={{ color: '#9aace5' }}>10 SEP TUE, 11:00 PM</span>
                    <span className="font-semibold text-lg">G8 G9</span>
                </li>
                <li className="total">
                    $55
                </li>
            </ul>

            <ul className="summary__food">
                <li className="title">FOOD & BEVERAGE</li>
                <li className="justify-between text-lg">
                    <span>1 Brown Bears Combo</span>
                    <span className="">$22</span>
                </li>
                <li className="justify-between text-lg">
                    <span>2 Snack Combo</span>
                    <span className="">$24</span>
                </li>
                <li className="total">$46</li>
            </ul>

            <div className="summary__amount" >
                <div className="total">
                    <span>TOTAL</span>
                    <span>$77</span>
                </div>
                <div className="vat">
                    <span>VAT(10%)</span>
                    <span>$7</span>
                </div>
                <div className="payment">
                    <span>AMOUNT PAYABLE</span>
                    <span>$84</span>
                </div>
            </div>

            <div className="summary__button">
                <button className="bg-btn-gradient ">Payment Now</button>
            </div>
        </div>
    )
}
