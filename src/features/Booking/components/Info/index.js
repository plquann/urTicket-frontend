import React from 'react'
import FormInfo from '../FormInfo'

export default function Info() {
    return (
        <div className="checkout-widget checkout-contact" style={{
            padding: '30px',
            marginBottom: '30px',
            background: '#032055',
        }}>
            <h5 className="title text-2xl mb-6 font-semibold pb-6" style={{ borderBottom: '1px dashed #11326f' }}>Share your Contact  Details </h5>
            <FormInfo />
        </div>
    )
}
