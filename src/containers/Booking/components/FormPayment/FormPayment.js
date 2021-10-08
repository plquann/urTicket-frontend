import React, { useEffect } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import './FormPayment.scss';
import usePaymentForm from 'hooks/usePaymentForm';
import Notify from 'components/Notify/Notify';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { emptyBookingState } from 'containers/Booking/slices/bookingSlice';

export default function FormPayment({ payment }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const { handleSubmit, status, setStatus } = usePaymentForm();

    useEffect(() => {
        if (status.success) {
            setStatus({
                success: true,
                message: 'Reservations were sent to your email.'
            })
            dispatch(emptyBookingState());
            setTimeout(() => {
                history.push('/');
            }, 5000);
        }
    }, [status, history, dispatch]);

    return (
        <div>
            <form className="form__payment" onSubmit={e => handleSubmit(e, payment)}>
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
            <Notify status={status} />
        </div>
    );
}