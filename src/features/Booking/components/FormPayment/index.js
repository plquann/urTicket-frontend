import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPayment() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Card Details" {...register("Card Details", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Name on the Card" {...register("Name on the Card", { required: true, maxLength: 100 })} />
                <input type="datetime-local" placeholder="Expiration" {...register("Expiration", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="text" placeholder="CVV" {...register("CVV", { required: true, maxLength: 12 })} />
                <input type="submit" />
            </form> */}

            <form className="space-y-4 ">
                <div
                    className="form-group flex flex-wrap"

                >

                    <div className="w-full">
                        <label
                            className="inline-block mb-2 text-lg" htmlFor="formGridCode_card"
                            style={{
                                color: '#dbe2fb',
                            }}
                        >Card number</label>
                        <input
                            className="w-full h-10 px-3 text-lg placeholder-gray-200 placeholder-opacity-20 border rounded-lg focus:outline-none" type="text" id="formGridCode_card"
                            style={{
                                border: '1px solid #11326f',
                                color: '#dbe2fb',
                                borderRadius: '10px',
                                height: '60px',
                                fontSize: '20px',
                                backgroundColor: 'transparent',
                            }}

                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div
                        className="form-group w-full px-2 md:w-1/2"

                    >

                        <label
                            className="inline-block mb-2 text-lg" htmlFor="formGridCode_name"
                            style={{
                                color: '#dbe2fb',
                            }}>First name</label>
                        <input
                            className="w-full h-10 px-3 text-lg placeholder-gray-200 placeholder-opacity-20 border rounded-lg focus:outline-none" type="text" id="formGridCode_name"
                            style={{
                                border: '1px solid #11326f',
                                color: '#dbe2fb',
                                borderRadius: '10px',
                                height: '60px',
                                fontSize: '20px',
                                backgroundColor: 'transparent',
                            }}

                        />
                    </div>
                    <div
                        className="form-group w-full px-2 md:w-1/2"

                    >

                        <label
                            className="inline-block mb-2 text-lg" htmlFor=" formGridCode_last"
                            style={{
                                color: '#dbe2fb',
                            }}>Last name</label>
                        <input
                            className="w-full h-10 px-3 text-lg placeholder-gray-200 placeholder-opacity-20 border rounded-lg focus:outline-none" type="text" id="formGridCode_last"
                            style={{
                                border: '1px solid #11326f',
                                color: '#dbe2fb',
                                borderRadius: '10px',
                                height: '60px',
                                fontSize: '20px',
                                backgroundColor: 'transparent',
                            }}

                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
                    <div
                        className="form-group w-full px-2 md:w-1/3"

                    >

                        <label
                            className="inline-block mb-2 text-lg" htmlFor=" formGridCode_month"
                            style={{
                                color: '#dbe2fb',
                            }}>Month</label>
                        <input
                            className="w-full h-10 px-3 text-lg placeholder-gray-200 placeholder-opacity-20 border rounded-lg focus:outline-none" type="text" id="formGridCode_month"
                            style={{
                                border: '1px solid #11326f',
                                color: '#dbe2fb',
                                borderRadius: '10px',
                                height: '60px',
                                fontSize: '20px',
                                backgroundColor: 'transparent',
                            }}

                        />
                    </div>
                    <div
                        className="form-group w-full px-2 md:w-1/3"

                    >

                        <label
                            className="inline-block mb-2 text-lg" htmlFor=" formGridCode_year"
                            style={{
                                color: '#dbe2fb',
                            }}>Year</label>
                        <input
                            className="w-full h-10 px-3 text-lg placeholder-gray-200 placeholder-opacity-20 border rounded-lg focus:outline-none" type="text" id="formGridCode_year"
                            style={{
                                border: '1px solid #11326f',
                                color: '#dbe2fb',
                                borderRadius: '10px',
                                height: '60px',
                                fontSize: '20px',
                                backgroundColor: 'transparent',
                            }}

                        />
                    </div>
                    <div
                        className="form-group w-full px-2 md:w-1/3"

                    >

                        <label
                            className="inline-block mb-2 text-lg" htmlFor=" formGridCode_cvc"
                            style={{
                                color: '#dbe2fb',
                            }}>CVC</label>
                        <input
                            className="w-full h-10 px-3 text-lg placeholder-gray-200 placeholder-opacity-20 border rounded-lg focus:outline-none" type="text" id="formGridCode_cvc"
                            style={{
                                border: '1px solid #11326f',
                                color: '#dbe2fb',
                                borderRadius: '10px',
                                height: '60px',
                                fontSize: '20px',
                                backgroundColor: 'transparent',
                            }}


                        />
                    </div>
                </div>
            </form>

        </>
    );
}