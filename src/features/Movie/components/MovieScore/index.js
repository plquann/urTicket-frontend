import React from 'react';
import { ICONS } from 'constants/image'

export default function MovieScore() {
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
                                <span className="counter-item tracking-wide text-lg font-semibold">88%</span>
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
                                <span className="counter-item tracking-wide text-lg font-semibold">88%</span>
                            </div>
                        </div>
                        <p>Audience Score</p>
                    </div>
                    <div className="item my-2.5 mx-4 text-center">
                        <div className="item-header flex flex-wrap mb-4">
                            <h5 className="title text-2xl font-medium mr-2.5">4.5</h5>
                            <div className="rated flex items-center text-xs text-red-600">
                                <i className="fas fa-heart mr-1" />
                                <i className="fas fa-heart mr-1" />
                                <i className="fas fa-heart mr-1" />
                                <i className="fas fa-heart mr-1" />
                                <i className="fas fa-heart mr-1" />
                            </div>
                        </div>
                        <p>Users Rating</p>
                    </div>
                    <div className="item my-2.5 mx-4 text-center">
                        <div className="item-header flex flex-wrap mb-4">
                            <div className="flex items-center text-xs mr-2.">
                                <i className="fas fa-heart mr-1" />
                                <i className="fas fa-heart mr-1" />
                                <i className="fas fa-heart mr-1" />
                                <i className="fas fa-heart mr-1" />
                                <i className="fas fa-heart mr-1" />
                            </div>
                            <h5 className="title text-2xl font-medium">0.0</h5>
                        </div>
                        <p>Rate It</p>
                    </div>
                </div>
                <div className="booking">
                    <button className="px-5 py-2.5 bg-red-300 rounded-3xl bg-btn-gradient">BOOK TICKETS</button>
                </div>
            </div>
        </div>
    )
}
