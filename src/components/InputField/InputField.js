import React, { useState } from 'react';
import './InputField.scss';

export default function InputField(props) {
    const { register, name, label, errors, ...rest } = props;
    const [showPassword, setShowPassword] = useState(false);

    const handleHidePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="form-group">
            <label htmlFor="">{label}<span> *</span></label>
            <div className="flex justify-center items-center border-b border-gray-500">
                <input {...register(name)} {...rest} type={showPassword ? 'text' : rest.type} />
                {(name === 'password' || name === 'confirmPassword'|| name === 'newPassword' || name === 'confirmNewPassword' || name === 'currentPassword') &&
                    <i
                        className={showPassword ? "fa fa-eye show" : "fa fa-eye-slash show"}
                        onClick={handleHidePassword}>
                    </i>
                }
            </div>
            {errors?.message && <p className="invalid-feedback">{errors?.message}</p>}
        </div>
    )

}
