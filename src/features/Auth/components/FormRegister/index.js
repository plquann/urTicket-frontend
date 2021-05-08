import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './FormRegister.scss';

const validationSchema = yup.object().shape({
    userName: yup.string()
        .required('First Name is required'),
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: yup.bool()
        .oneOf([true], 'We need you to agree with the terms')
});

export default function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async data => {
        alert(JSON.stringify(data));
    };

    return (
        <form className="register__form" onSubmit={e => e.preventDefault()}>
            <div className="form-group">
                <label >USER NAME<span> *</span></label>
                <input
                    type="text"
                    {...register("userName", { required: true })}
                />
                <p className="invalid-feedback">{errors.userName?.message}</p>
            </div>
            <div className="form-group">
                <label >EMAIL<span> *</span></label>
                <input
                    type="text"
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                <p className="invalid-feedback">{errors.email?.message}</p>
            </div>

            <div className="form-group">
                <label >PASSWORD<span> *</span></label>
                <input
                    name="password"
                    type="password"
                    {...register('password')}
                />
                <p className="invalid-feedback">{errors.password?.message}</p>

            </div>
            <div className="form-group">
                <label >CONFIRM PASSWORD<span> *</span></label>
                <input
                    name="confirmPassword"
                    type="password"
                    {...register('confirmPassword')}
                />
                <p className="invalid-feedback">{errors.confirmPassword?.message}</p>

            </div>
            <div className="form-group checkgroup">
                <input type="checkbox" {...register("acceptTerms", { required: true })} />
                <label >I Agree To The Terms, Privacy Policy And Fees</label>
                <p className="invalid-feedback">{errors.acceptTerms?.message}</p>
            </div>
            <div className="btn-submit text-center mb-4">
                <button
                    type="submit"
                    className="bg-btn-gradient px-10 py-3 rounded"
                    onClick={handleSubmit(onSubmit)}
                >SIGN UP</button>
            </div>
        </form>
    );
}