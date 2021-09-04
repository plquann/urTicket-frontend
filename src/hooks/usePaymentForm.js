import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { axiosClient } from "apis";

function usePaymentForm(amount) {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const amountToCharge = 100;

        const cardElement = elements?.getElement(CardElement);
        console.log('🚀 ~ file: usePaymentForm.js ~ line 17 ~ CardElement', CardElement);

        if (!stripe || !elements || !cardElement) {
           console.log('Stripe.js has not yet loaded.');
            return;
        }

        const stripeResponse = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        });

        const { error, paymentMethod } = stripeResponse;
        console.log('🚀 ~ file: usePaymentForm.js ~ line 28 ~ paymentMethod', paymentMethod);
        console.log('🚀 ~ file: usePaymentForm.js ~ line 28 ~ error', error);
        
        
        if (error || !paymentMethod) {
            return;
        }

        const paymentMethodId = paymentMethod.id;
        console.log('axios');

        const res = axiosClient.post(`${process.env.REACT_APP_API_URL}payment`, {
            paymentMethodId,
            amount: amountToCharge
        })

        console.log('🚀 ~ file: usePaymentForm.js ~ line 36 ~ res', res);

        // fetch(`${process.env.REACT_APP_API_URL}/charge`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         paymentMethodId,
        //         amount: amountToCharge
        //     }),
        //     credentials: 'include',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
    };

    return {
        handleSubmit
    }
}

export default usePaymentForm;