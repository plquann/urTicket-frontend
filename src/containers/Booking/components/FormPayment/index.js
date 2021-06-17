import React from 'react';
import { useForm } from 'react-hook-form';
import './FormPayment.scss';

export default function FormPayment() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <>
            <form className="form__payment" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__payment__field  space-y-4">
                    <div className="cardpayment w-full">
                        <label htmlFor="formGridCode_card">Card Details</label>
                        <input
                            id="formGridCode_card"
                            type="text"
                            {...register("Card Details", { required: true, maxLength: 80 })}
                        />
                    </div>
                </div>

                <div className="form__payment__field  -mx-2 space-y-4 md:space-y-0">
                    <div className="namecard">
                        <label htmlFor="formGridCode_name">Name on the Card</label>
                        <input
                            id="formGridCode_name"
                            type="text"
                            {...register("Name on the Card", { required: true, maxLength: 100 })}
                        />
                    </div>
                </div>

                <div className="form__payment__field -mx-2 space-y-4 md:space-y-0">
                    <div className="w-full px-2 md:w-1/3">
                        <label htmlFor="formGridCode_month">Month</label>
                        <input
                            id=" formGridCode_month"
                            type="text"
                            {...register("month", { required: true, maxLength: 2 })}
                        />
                    </div>
                    <div className="w-full px-2 md:w-1/3">
                        <label htmlFor=" formGridCode_year">Year</label>
                        <input
                            id=" formGridCode_year"
                            type="text"
                            {...register("year", { required: true, maxLength: 4 })}
                        />
                    </div>
                    <div className="w-full px-2 md:w-1/3">
                        <label htmlFor=" formGridCode_cvc">CVC</label>
                        <input
                            id=" formGridCode_cvc"
                            type="text"
                            {...register("CVV", { required: true, maxLength: 12 })}
                        />
                    </div>
                </div>
                <div className="form__payment__field--agree mt-5">
                    <input
                        {...register("agree", { required: true })}
                        type="radio"
                        value="Yes"
                    />
                    <span className="notice">
                        By Clicking "Make Payment" you agree to the <a href="#0">terms and conditions</a>
                    </span>
                </div>
            </form>
        </>
    );
}