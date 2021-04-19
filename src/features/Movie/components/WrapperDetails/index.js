import React from 'react';
import { MOVIE_IMG, ICONS } from 'constants/Image'

export default function WrapperDetails() {
    return (
        <div className="movie-details max-w-screen-lg mx-auto">
            <div className="grid grid-cols-4 gap-4">
                <div className="details-banner-thumb">
                    <img className="w-full h-auto" src={MOVIE_IMG[2]} alt="movie" />
                </div>
                <div className="details-banner-content col-span-3">
                    <h3 className="title text-4xl mb-2 font-bold ">VENUS</h3>
                    <div className="tags text-lg mb-4">
                        <span style={{ color: '#9aace5', fontSize:'14px'}}>C18 - NO CHILDREN UNDER 18 YEARS OLD</span>
                    </div>

                    <div className="genres mb-3.5">
                        <a href="#0" className="inline-block border border-solid text-xs uppercase px-3.5 py-2 rounded-3xl transition-all duration-300 ease-in-out mr-4" style={{ color: '#9aace5', borderColor: 'rgba(168,177,198,0.2)' }}>horror</a>
                        <a href="#0" className="inline-block border border-solid text-xs uppercase px-3.5 py-2 rounded-3xl transition-all duration-300 ease-in-out mr-4" style={{ color: '#9aace5', borderColor: 'rgba(168,177,198,0.2)' }}>horror</a>
                        <a href="#0" className="inline-block border border-solid text-xs uppercase px-3.5 py-2 rounded-3xl transition-all duration-300 ease-in-out mr-4" style={{ color: '#9aace5', borderColor: 'rgba(168,177,198,0.2)' }}>horror</a>
                        <a href="#0" className="inline-block border border-solid text-xs uppercase px-3.5 py-2 rounded-3xl transition-all duration-300 ease-in-out mr-4" style={{ color: '#9aace5', borderColor: 'rgba(168,177,198,0.2)' }}>horror</a>
                    </div>

                    <div className="social-and-duration flex flex-wrap">
                        <div className="duration-area flex flex-wrap space-x-2">
                            <div className="item mr-2 " style={{ color: '#9aace5' }}>
                                <i className="fas fa-calendar-alt mr-1.5" /><span>06 Dec, 2020</span>
                            </div>
                            <div className="item" style={{ color: '#9aace5' }}>
                                <i className="far fa-clock mr-1.5" /><span>2 hrs 50 mins</span>
                            </div>
                        </div>
                        <ul className="social-share flex flex-wrap ml-auto">
                            <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-facebook-f" /></a></li>
                            <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-twitter" /></a></li>
                            <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-pinterest-p" /></a></li>
                            <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-linkedin-in" /></a></li>
                            <li className="my-1 mx-2"><a href="#0" className="px-1 inline-block text-sm" style={{ color: '#cfcfcf', transition: 'all ease 0.3s' }}><i className="fab fa-google-plus-g" /></a></li>
                        </ul>
                    </div>
                    <div className="review-and-booking flex flex-wrap justify-between items-center py-12 ">
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

            </div>
        </div>
    )
}
