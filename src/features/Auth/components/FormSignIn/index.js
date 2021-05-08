import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './FormSignIn.scss';

const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});

export default function FormSignin() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async data => {
        alert(JSON.stringify(data));
    };
    return (
        <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="email">EMAIL<span> *</span></label>
                <input
                    type="text"
                    {...register("email")}
                />
                <p className="invalid-feedback">{errors.email?.message}</p>
            </div>
            <div className="form-group">
                <label htmlFor="pass">PASSWORD<span> *</span></label>
                <input
                    type="password"
                    {...register("password")}
                />
                <p className="invalid-feedback">{errors.password?.message}</p>
            </div>
            <div className="form-group checkgroup">
                <input type="checkbox" {...register("rememberPW", {})} />
                <label htmlFor="bal2">Remember Password</label>
                <a href="#0" className="forget-pass">Forget Password</a>
            </div>
            <div className="btn-submit text-center mb-4">
                <button
                    type="submit"
                    className="bg-btn-gradient px-10 py-3 rounded"
                    onClick={handleSubmit(onSubmit)}
                >SIGN IN</button>
            </div>
        </form>
    );
}