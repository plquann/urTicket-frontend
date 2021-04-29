import { PAYMENT } from 'constants/image';
import React from 'react';
import FormPayment from '../FormPayment';
import './Payment.scss';


export default function Payment() {
    return (
        <div className=" payment checkout-widget checkout-card mb-0"
            style={{
                padding: '30px',
                marginBottom: '30px',
                background: '#032055',
            }}
        >
            <h5 className="title text-2xl mb-6 font-semibold">Payment Option </h5>
            <ul className="payment-option  flex flex-wrap space-x-6 text-center mb-10">
                <li className="active ">
                    <a href="#0" className="flex flex-wrap justify-center rounded-lg h-full" style={{
                        width: '100px',
                        padding: '20px 10px',
                        border: '1px solid #11326f',
                        borderColor: '#4441e7',
                        borderWidth: '2px',
                        position: 'relative',

                    }}>
                        <img className="max-w-full mt-auto mb-2.5" src={PAYMENT.CARD} alt="payment" />
                        <span className="text-xs">Credit Card</span>
                    </a>
                </li>
                <li>
                    <a href="#0" className="flex flex-wrap justify-center rounded-lg h-full" style={{
                        width: '100px',
                        padding: '20px 10px',
                        border: '1px solid #11326f',
                    }}>
                        <img className="max-w-full mt-auto mb-2.5" src={PAYMENT.CARD} alt="payment" />
                        <span className="text-xs">Debit Card</span>
                    </a>
                </li>
                <li>
                    <a href="#0" className="flex flex-wrap justify-center rounded-lg h-full" style={{
                        width: '100px',
                        padding: '20px 10px',
                        border: '1px solid #11326f',
                    }}>
                        <img className="max-w-full mt-auto mb-2.5" src={PAYMENT.PAYPAL} alt="payment" />
                        <span className="text-xs">paypal</span>
                    </a>
                </li>
            </ul>
            <h6 className="subtitle mb-3.5 text-xl font-semibold">Enter Your Card Details </h6>
            <FormPayment />
            
            <p className="notice">
                By Clicking "Make Payment" you agree to the <a href="#0">terms and conditions</a>
            </p>
        </div>
    )
}
