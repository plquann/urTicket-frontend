import React from 'react';
import { PAYMENT } from 'constants/image';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import FormPayment from '../FormPayment/FormPayment';
import './Payment.scss';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export default function Payment({paymentData}) {
    return (
        <div className="payment checkout-widget checkout-card mb-0 border rounded-xl "
            style={{
                padding: '30px',
                marginBottom: '30px',
                backgroundColor: '#1A222A',
                borderColor: '#11326f'
            }}
        >
            <h5 className="title text-2xl mb-6 font-semibold">Payment Option </h5>
            <ul className="payment-option  flex flex-wrap space-x-6 text-center mb-10">
                <li className="active ">
                    <button className="flex flex-col justify-center  items-center rounded-lg h-full" style={{
                        width: '100px',
                        padding: '20px 10px',
                        border: '1px solid #11326f',
                        borderColor: '#4441e7',
                        borderWidth: '2px',
                        position: 'relative',

                    }}>
                        <img className="max-w-full mt-auto mb-2.5" src={PAYMENT.CARD} alt="payment" />
                        <span className="text-xs"> Card</span>
                    </button>
                </li>
                <li>
                    <button disabled className="flex flex-col justify-center  items-center rounded-lg h-full" style={{
                        width: '100px',
                        padding: '20px 10px',
                        border: '1px solid #11326f',
                    }}>
                        <img className="max-w-full mt-auto mb-2.5" src={PAYMENT.PAYPAL} alt="payment" />
                        <span className="text-xs">Paypal</span>
                    </button>
                </li>
            </ul>
            <h6 className="subtitle mb-3.5 text-xl font-semibold">Enter Your Card Details </h6>
            <Elements stripe={stripePromise}>
                <FormPayment payment={paymentData}/>
            </Elements>
        </div>
    )
}
