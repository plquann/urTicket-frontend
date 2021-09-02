import React from 'react';

export default function BookingInfo() {
    return (
        <div className="p-4  my-5 w-10/12 mx-auto border rounded-md" style={{ background: '#0D151B', borderColor: ' #11326f' }} >
            <div className="flex justify-between  items-center">
                <div className="item md-order-1">
                    <a href="movie-ticket-plan.html" className="text-2xl font-semibold">
                        BACK
                    </a>
                </div>
                <div className="flex text-center">
                    <div className="ticket-booking mr-10">
                        <p className="text-base font-medium">TICKETS</p>
                        <p className="text-xl font-semibold" style={{ color: '#31d7a9' }}>D8  D9  D10</p>
                    </div>
                    <div className="ticket-price ml-10">
                        <p className="text-base font-medium ">PRICE</p>
                        <p className="text-xl font-semibold" style={{ color: '#31d7a9' }}>$ 150</p>
                    </div>
                </div>
                <div className="item md-order-1">
                    <a href="movie-ticket-plan.html" className="text-2xl font-semibold">
                        NEXT
                    </a>
                </div>
            </div>
        </div>
    )
}
