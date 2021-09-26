import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { axiosClient } from "apis";

function usePaymentForm(amountToCharge = 100) {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

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
        console.log('🚀 ~ file: usePaymentForm.js ~ line 25 ~ stripeResponse', stripeResponse);
        console.log('🚀 ~ file: usePaymentForm.js ~ line 28 ~ paymentMethod', paymentMethod);
        console.log('🚀 ~ file: usePaymentForm.js ~ line 28 ~ error', error);


        if (error || !paymentMethod) {
            return;
        }

        const paymentMethodId = paymentMethod.id;
        console.log('axios');

        // const chargeResponse = axiosClient.post(`${process.env.REACT_APP_API_URL}payment`, {
        //     paymentMethodId,
        //     amount: amountToCharge
        // })
        

        // console.log('🚀 ~ file: usePaymentForm.js ~ line 36 ~ res', chargeResponse);
        // if (chargeResponse.status !== 'succeeded') {
        //     const secret = chargeResponse.client_secret;

        //     await stripe?.confirmCardPayment(secret);
        // }


    };

    return {
        handleSubmit
    }
}

export default usePaymentForm;