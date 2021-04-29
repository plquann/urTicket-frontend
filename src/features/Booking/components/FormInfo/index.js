import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormInfo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div>
            <h1>Share your Contact Details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Full Name"
                    {...register("Full Name", { required: true, maxLength: 80 })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                <input
                    type="tel"
                    placeholder="Mobile number"
                    {...register("Mobile number", { required: true, minLength: 6, maxLength: 10 })}
                />
            </form>
        </div>
    );
}