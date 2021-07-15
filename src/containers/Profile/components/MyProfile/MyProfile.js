import React, { useState } from 'react';
import './MyProfile.scss';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function MyProfile(props) {
    const { me } = props;
    const { register, handleSubmit, control } = useForm({
        defaultValues: { ...me }
    });
    const [editInfo, setEditInfo] = useState(false);


    const onSubmit = (data) => {
        console.log(data);
        setEditInfo(false);
    }

    const handleClickEdit = () => {
        setEditInfo(!editInfo);
    }

    return (
        <div className="form-profile w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="username mb-4">
                    <label htmlFor="userName">Username</label><br></br>
                    <input
                        id="userName"
                        type="text"
                        {...register('userName', { maxLength: 15 })}
                        disabled
                    />
                </div>
                <div className="fullname mb-4">
                    <label htmlFor="fullName">Fullname</label><br></br>
                    <input
                        id="fullName"
                        type="text"
                        {...register('fullName', { maxLength: 80 })}
                        disabled={!editInfo}
                        className={editInfo ? 'border border-yellow-500' : ''}
                    />
                </div>
                <div className="gender mb-4">
                    <label htmlFor="gender">Gender</label><br></br>
                    <select
                        id="gender"
                        {...register('gender')}
                        disabled={!editInfo}
                        className={editInfo ? 'border border-yellow-500' : ''}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="another">Another</option>
                    </select>
                </div>
                <div className="email mb-4">
                    <label htmlFor="email">Email</label><br></br>
                    <input
                        id="email"
                        type="text"
                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        disabled
                    />
                </div>
                <div className="phoneNumber mb-4">
                    <label htmlFor="phoneNumber">Phone Number</label><br></br>
                    <input
                        id="phoneNumber"
                        type="tel"
                        {...register('phoneNumber', { minLength: 6, maxLength: 30 })}
                        disabled={!editInfo}
                        className={editInfo ? 'border border-yellow-500' : ''}
                    />
                </div>
                <div className="birthday mb-4">
                    <label htmlFor="birthday">D.O.B</label><br></br>
                    <Controller
                        control={control}
                        name="birthday"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <DatePicker
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                onChange={onChange}
                                onBlur={onBlur}
                                selected={value}
                                disabled={!editInfo}
                                className={editInfo ? 'border border-yellow-500' : ''}
                            />
                        )}
                    />
                </div>
                <div className="address mb-4">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        {...register('address', {})}
                        disabled={!editInfo}
                        className={editInfo ? 'border border-yellow-500' : ''}
                    />
                </div>
                <div className="button-edit text-center">
                    {editInfo
                        ? (
                            <>
                                <button className="btn-edit-profile mr-3" type="submit">Submit</button>
                                <span className="btn-edit-profile" onClick={handleClickEdit}>Cancel</span>
                            </>
                        )
                        : <span className="btn-edit-profile mr-4" onClick={handleClickEdit}>Edit Profile</span>
                    }
                </div>
            </form>
        </div>
    );
}