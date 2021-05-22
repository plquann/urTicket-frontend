import React from 'react';
import Select from 'react-select';
import { THUMS, SEARCH_BG } from 'constants/image';
import './MovieSearch.scss';

const cinema = [
    { value: 'cgv', label: 'cgv' },
    { value: 'lotte', label: 'lotte' },
    { value: 'bhd', label: 'bhd' }
];
const date = [
    { value: '08/04/2021', label: '08/04/2021' },
    { value: '08/04/2021', label: '08/04/2021' },
    { value: '08/04/2021', label: '08/04/2021' }
]

const Showtimes = [
    { value: '18:10', label: '18:10' },
    { value: '18:10', label: '18:10' },
    { value: '18:10', label: '18:10' }
]


export default function MovieSearch() {
    return (
        <section className="search-ticket-section pt-20 mb-20 relative z-10">
            <div className="max-w-screen-lg mx-auto ">
                <div className="search-tab bg-img py-7 px-8 relative" >
                    <div className="grid grid-cols-2 mb-10">
                        <div className="search-ticket-header relative">
                            <h6 className="category text-lg mb-3 font-semibold uppercase" style={{ color: '#31d7a9' }}>
                                welcome to UR TICKET
                                </h6>
                            <h3 className="title text-2xl font-bold uppercase text-white">what are you looking for</h3>
                        </div>
                        <div className="button-booking justify-self-end relative">
                            <button className="btn-large">Booking Now</button>
                        </div>
                    </div>
                    <div className="tab-area p-8 relative border-t border-solid border-black mt-12 ">
                        <div className="tab-item">
                            <form className="ticket-search-form  grid grid-cols-4 relative">
                                <div className="relative mr-3">
                                    <input className="search__movie w-full relative " type="text" placeholder="Search fo Movies" />
                                    <button className="absolute top-0 right-0 w-10 h-10"><i className="fas fa-search" /></button>
                                </div>
                                <div className="flex items-center justify-self-center">
                                    <div className="thumb mr-3">
                                        <img className="w-full" src={THUMS} alt="ticket" />
                                    </div>
                                    <span className="font-medium" style={{ color: '#31d7a9' }}>Cinema</span>
                                    <select className="w-25 text-white text-lg py-2 px-3 border-none bg-transparent focus:outline-none" name="animals">
                                        {cinema.map((item, index) => {
                                            return <option value={item.value} key={index}>{item.value}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="flex items-center justify-self-center">
                                    <div className="thumb mr-3">
                                        <img className="w-full" src={THUMS} alt="ticket" />
                                    </div>
                                    <span className="font-medium" style={{ color: '#31d7a9' }}>Date</span>
                                    <select className="w-25 text-white text-lg py-2 px-3 border-none bg-transparent focus:outline-none" name="animals">
                                        {date.map((item, index) => {
                                            return <option value={item.value} key={index}>{item.value}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="flex items-center justify-self-center">
                                    <div className="thumb mr-3">
                                        <img className="w-full" src={THUMS} alt="ticket" />
                                    </div>
                                    <span className="font-medium" style={{ color: '#31d7a9' }}>Showtime</span>
                                    <select className="w-25 text-white text-lg py-2 px-3 border-none bg-transparent focus:outline-none" name="animals">
                                        {Showtimes.map((item, index) => {
                                            return <option value={item.value} key={index}>{item.value}</option>
                                        })}
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
