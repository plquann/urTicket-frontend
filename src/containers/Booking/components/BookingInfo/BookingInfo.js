import React from 'react';

export default function BookingInfo() {
    return (
        <div className="py-4 bg-gray-900" >
            <div className="flex justify-between max-w-screen-lg mx-auto items-center">
                <div className="item md-order-1">
                    <a href="movie-ticket-plan.html" className="text-2xl font-semibold">
                        BACK
                    </a>
                </div>
                <div className="item date-item flex space-x-2 ">
                    {/* <div className="img rounded-md overflow-hidden shadow-2xl">
                        <img className="" src={MOVIE_IMG[8]} alt="movie" style={{ width: '200px', height: '100px' }} />
                    </div> */}
                    <div className="info text-center">
                        <div className="details-banner-content ">
                            <h3 className="title text-2xl font-bold">Captain America: The First Avenger</h3>
                            <p className="text-lg font-semibold mt-2">CGV Landmark 81 - Room 3</p>
                        </div>
                        <div className=" inline-flex space-x-6">
                            <span className="date">Monday, May 28 2021</span>
                            <span>13:00</span>
                        </div>
                    </div>
                </div>
                <div className="item text-center">
                    <h5 className="title text-2xl mb-1 font-bold">05:00</h5>
                    <p>Mins Left</p>
                </div>
            </div>
        </div>
    )
}
