import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormInfo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Full Name"
                    {...register("Full Name", { required: true, maxLength: 80 })}
                />
                <input
                    type="text"
                    placeholder="Email"
                    {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                <input
                    type="tel"
                    placeholder="Mobile number"
                    {...register("Mobile number", { required: true, minLength: 6, maxLength: 10 })}
                />
            </form> */}

            <form className="space-y-4 text-gray-700">
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div className="form-group w-full px-2 md:w-1/2 mb-6">
                        <input
                            className="w-full focus:outline-none" type="text"
                            style={{
                                height: '40px',
                                border: 'none',
                                borderBottom: '1px solid #11326f',
                                borderRadius: 0,
                                padding: 0,
                                fontSize: '20px',
                                backgroundColor: 'transparent',
                                color: '#dbe2fb'
                            }}
                            placeholder='Full Name'

                        />
                    </div>
                    <div className="form-group w-full px-2 md:w-1/2 mb-6">
                        <input
                            className="w-full focus:outline-none" type="text"
                            style={{
                                height: '40px',
                                border: 'none',
                                borderBottom: '1px solid #11326f',
                                borderRadius: 0,
                                padding: 0,
                                fontSize: '20px',
                                backgroundColor: 'transparent',
                                color: '#dbe2fb'
                            }}
                            placeholder='Email Address'

                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0 mb-6">
                    <div className="form-group w-full px-2 md:w-1/2">
                        <input
                            className="w-full focus:outline-none" type="text"
                            style={{
                                height: '40px',
                                border: 'none',
                                borderBottom: '1px solid #11326f',
                                borderRadius: 0,
                                padding: 0,
                                fontSize: '20px',
                                backgroundColor: 'transparent',
                                color: '#dbe2fb'
                            }}
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="process w-full  px-2 md:w-1/2 flex items-end">
                        <div className="w-full  h-1 bg-green-500 rounded-full"></div>
                    </div>
                </div>
            </form>
        </>
    );
}