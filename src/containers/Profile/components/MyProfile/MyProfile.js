import React, { useState } from 'react';
import './MyProfile.scss';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyProfile(props) {
    const { me } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [editInfo, setEditInfo] = useState(false);
    const [date, setDate] = useState(new Date());

    console.log('render')
    const onSubmit = (data) => {
        console.log(data);
        setEditInfo(false);
    }

    console.log(errors);

    const handleClick = () => {
        setEditInfo(true);
    }
    return (
        <div className="form-profile w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="fullname mb-4">
                    <label htmlFor="fullName">Fullname</label><br></br>
                    <input

                        id="fullName"
                        type="text"
                        value={me.fullName}
                        {...register("Fullname", { maxLength: 80 })}
                    />
                </div>
                <div className="username mb-4">
                    <label htmlFor="userName">Username</label><br></br>
                    <input
                        disabled
                        id="userName"
                        type="text"
                        value={me.userName}
                        {...register("Username", {})}

                    />
                </div>
                <div className="genre mb-4">
                    <label htmlFor="userName">Genre</label><br></br>
                    <select {...register} disabled={!editInfo}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Another">Another</option>
                    </select>
                </div>
                <div className="email mb-4">
                    <label htmlFor="email">Email</label><br></br>
                    <input
                        disabled
                        type="text"
                        value={me.email}
                        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}

                    />
                </div>
                <div className="phoneNumber mb-4">
                    <label htmlFor="phoneNumber">Phone Number</label><br></br>
                    <input
                        disabled={!editInfo}
                        type="tel"
                        value={me.phoneNumber}
                        {...register("Mobile number", { minLength: 6, maxLength: 30 })}

                    />
                </div>
                <div className="birthday mb-4">
                    <label htmlFor="birthday">DOB</label><br></br>
                    <DatePicker
                        disabled={!editInfo}
                        selected={date}
                        onChange={(date) => setDate(date)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                    />
                </div>
                <div className="address mb-4">
                    <label htmlFor="address">Address</label>
                    <textarea disabled={!editInfo} value={me.address} {...register("Address", {})} />
                </div>
                <div className="button-edit text-center">
                    {editInfo
                        ? <button className="btn-edit-profile" type="submit">Submit</button>
                        : <span className="btn-edit-profile mr-4" onClick={handleClick}>Edit Profile</span>
                    }
                </div>

            </form>
        </div>
    );
}