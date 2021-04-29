import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPromo() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="checkout-widget checkout-contact" style={{
            padding: '30px',
            marginBottom: '30px',
            background: '#032055',
        }}>
            <h1 className="title text-2xl mb-6 font-semibold pb-6" style={{ borderBottom: '1px dashed #11326f' }}>Promo Code</h1>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Please enter promo code"
                    {...register("Promo code", { required: false, maxLength: 10 })}
                />
            </form> */}
            <form className="space-y-4 text-gray-700">
                <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0 mb-4 ">
                    <div className="form-group w-full px-2 md:w-1/2 mt-4">
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
                            placeholder="Please enter Promo Code"
                        />
                    </div>
                    <div className="process w-full  px-2 md:w-1/2 flex items-end">
                        <div className="w-full  h-1 bg-green-500 rounded-full"></div>
                    </div>
                </div>

            </form>
        </div>
    );
}