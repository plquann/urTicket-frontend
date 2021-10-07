import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { reservationsAPI } from 'apis'

function usePaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: null
    });

    const handleSubmit = async (event, data) => {
        // console.log('🚀 ~ file: usePaymentForm.js ~ line 8 ~ data', data);
        event.preventDefault();

        const cardElement = elements?.getElement(CardElement);

        if (!stripe || !elements || !cardElement) {
            // console.log('Stripe.js has not yet loaded.');
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: 'Stripe.js has not yet loaded.'
            });
            return;
        }

        const stripeResponse = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        });

        const { error, paymentMethod } = stripeResponse;
        // console.log('🚀 ~ file: usePaymentForm.js ~ line 25 ~ stripeResponse', stripeResponse);
        // console.log('🚀 ~ file: usePaymentForm.js ~ line 28 ~ paymentMethod', paymentMethod);
        // console.log('🚀 ~ file: usePaymentForm.js ~ line 28 ~ error', error);


        if (error || !paymentMethod) {
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: error?.message
            });
            return;
        }

        const paymentMethodId = paymentMethod.id;
        // console.log('🚀 ~ file: usePaymentForm.js ~ line 34 ~ paymentMethodId', paymentMethodId);

        try {
            setStatus({
                loading: true,
                success: false,
                error: false,
                message: null
            });
            const response = await reservationsAPI.createReservation({
                paymentMethodId,
                ...data
            });

            console.log('🚀 ~ file: usePaymentForm.js ~ line 42 ~ response', response);
            setStatus({
                loading: false,
                success: true,
                error: false,
                message: `You have successfully reservation!<br> Check out your email.`
            });
        } catch (error) {
            setStatus({
                loading: false,
                success: false,
                error: true,
                message: error?.message
            });
        }
    };

    return {
        handleSubmit,
        status
    }
}

export default usePaymentForm;