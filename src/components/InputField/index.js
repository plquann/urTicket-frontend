import React from 'react';
import './InputField.scss';

export default function InputField(props) {
    const { register, name, label, errors, ...rest } = props;

    return (
        <div className="form-group">
            <label htmlFor="">{label}<span> *</span></label>
            <input {...register(name)} {...rest} />
            {errors?.message && <p className="invalid-feedback">{errors?.message}</p>}
        </div>
    )

}
