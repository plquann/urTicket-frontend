import React from 'react';
import { useForm } from 'react-hook-form';
import './FormPromo.scss'

export default function FormPromo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="form__promo">
            <h1 className="title">Promo Code</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="promo">
                        <input
                            type="text"
                            placeholder="Please enter Promo code"
                            {...register("Promo code", { required: false, maxLength: 10 })}
                        />
                    </div>
                    <div className="process">
                        <div ></div>
                    </div>
                </div>
            </form>
        </div>
    );
}