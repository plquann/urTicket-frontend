import React from 'react';
import { ICONS } from 'constants/image'

export default function MovieScore({ handleScroll, voteAverage, ...props }) {
    return (
        <div>
            <div className="review-and-booking flex flex-wrap justify-between items-center py-12 -ml-4" style={{ color: '#dbe2fb' }}>
                <div className="review flex flex-wrap ">
                    <div className="item my-2.5 mx-4 text-center">
                        <div className="item-header flex flex-wrap items-center justify-center mb-4">
                            <div className="thumb w-8 flex items-center mr-2.5">
                                <img src={ICONS.TOMATO_LG} alt="movie" />
                            </div>
                            <div className="counter-area">
                                <span className="counter-item tracking-wide text-lg font-semibold">{voteAverage * 10}%</span>
                            </div>
                        </div>
                        <p>Rotten tomatoes</p>
                    </div>
                    <div className="item my-2.5 mx-4 text-center">
                        <div className="item-header flex flex-wrap items-center justify-center mb-4">
                            <div className="thumb w-8 flex items-center mr-2.5">
                                <img src={ICONS.CAKE_LG} alt="movie" />
                            </div>
                            <div className="counter-area">
                                <span className="counter-item tracking-wide text-lg font-semibold">{voteAverage / 2}</span>
                            </div>
                        </div>
                        <p>Audience Score</p>
                    </div>
                </div>
                <div className="booking">
                    <button
                        className="px-5 py-2.5 bg-red-300 rounded-md font-medium bg-btn-gradient focus:outline-none"
                        onClick={() => handleScroll()}
                    >
                        BOOK TICKETS
                    </button>
                </div>
            </div>
        </div>
    )
}
