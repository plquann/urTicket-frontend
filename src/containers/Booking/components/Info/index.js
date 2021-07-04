import React from 'react'
import FormInfo from '../FormInfo'

export default function Info() {
    return (
        <div className="border rounded-xl"
            style={{
                padding: '30px',
                marginBottom: '30px',
                backgroundColor: 'rgba(15, 21, 26, 0.8)',
                borderColor: '#11326f'
            }}
        >
            <h5
                className="title text-2xl mb-6 font-semibold pb-6"
                style={{ borderBottom: '1px dashed #11326f' }}
            >
                Share your Contact  Details
            </h5>
            <FormInfo />
        </div>
    )
}
