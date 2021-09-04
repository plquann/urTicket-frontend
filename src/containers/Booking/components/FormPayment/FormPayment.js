import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import './FormPayment.scss';
import usePaymentForm from 'hooks/usePaymentForm';

export default function FormPayment() {
    const { handleSubmit } = usePaymentForm(200);

    return (
        <>
            <form className="form__payment" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                                fontWeight: 600,
                                color: '#34D399',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#d01515',
                            },
                        },
                    }}
                />

                <div className="summary__button">
                    <button type="submit" className="bg-btn-gradient">Payment Now</button>
                </div>
            </form>
        </>
    );
}