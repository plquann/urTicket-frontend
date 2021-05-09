import React from 'react';
import './CheckBox.scss';

export default function CheckBox(props) {
    const { register, name, label, ...rest } = props;

    return (
        <div className="form-checkbox">
            <input type="checkbox" id="checkbox" {...register(name)} {...rest} />
            <label htmlFor="checkbox">{label}</label>
        </div>
    )
}
