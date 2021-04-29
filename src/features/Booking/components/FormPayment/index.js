import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPayment() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Card Details" {...register("Card Details", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Name on the Card" {...register("Name on the Card", { required: true, maxLength: 100 })} />
            <input type="datetime-local" placeholder="Expiration" {...register("Expiration", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="text" placeholder="CVV" {...register("CVV", { required: true, maxLength: 12 })} />

            <input {...register("Quick Pay", { required: true })} type="radio" value="Yes" />

            <input {...register("Developer", { required: true })} type="radio" value="Yes" />
            <input {...register("Developer", { required: true })} type="radio" value="No" />

            <input type="submit" />
        </form>
    );
}