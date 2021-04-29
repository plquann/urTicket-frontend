import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPromo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h1>Promo Code</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Please enter promo code"
                    {...register("Promo code", { required: false, maxLength: 10 })}
                />
            </form>
        </div>
    );
}