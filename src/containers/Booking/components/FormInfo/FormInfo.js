import React from 'react';
import { useForm } from 'react-hook-form';
import './FormInfo.scss';

export default function FormInfo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <>
            <form className="form__info" onSubmit={handleSubmit(onSubmit)}>
                <div className="name__email">
                    <div className="name">
                        <input
                            type="text"
                            placeholder="Full Name"
                            {...register("Full Name", { required: true, maxLength: 80 })}
                        />
                    </div>
                    <div className="email">
                        <input
                            type="text"
                            placeholder="Email"
                            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                        />
                    </div>
                </div>
                <div className="phone__process">
                    <div className="phone">
                        <input
                            type="tel"
                            placeholder="Mobile number"
                            {...register("Mobile number", { required: true, minLength: 6, maxLength: 10 })}
                        />
                    </div>
                    <div className="process">
                        <div></div>
                    </div>
                </div>
            </form>
        </>
    );
}