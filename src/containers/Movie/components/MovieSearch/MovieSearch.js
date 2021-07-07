import React from 'react';
import './MovieSearch.scss';
import SingleSelect from 'components/SingleSelect/SingleSelect';

const movie = [
    { value: 'Caption America', label: 'Caption America' },
    { value: 'One Piece', label: 'One Piece' },
    { value: 'Money Heist', label: 'Money Heist' }
];

const cinema = [
    { value: 'cgv', label: 'cgv Tran Quang Khai' },
    { value: 'lotte', label: 'lotte' },
    { value: 'bhd', label: 'bhd' }
];
const date = [
    { value: '08/04/2021', label: '08/04/2021' },
    { value: '08/04/2021', label: '08/04/2021' },
    { value: '08/04/2021', label: '08/04/2021' }
];

const showtimes = [
    { value: '18:10', label: '18:10' },
    { value: '18:10', label: '18:10' },
    { value: '18:10', label: '18:10' }
];

const handleChange = () => {
    console.log("Hii change ")
}

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
                            <div className="ticket-search-form  grid grid-cols-5 gap-4">
                                <div className="ticket-search-form__movie col-span-2">
                                    <SingleSelect
                                        handleChange={handleChange}
                                        options={movie}
                                        placeholder={"Select Movie"}
                                    />
                                </div>
                                <div className="ticket-search-form__cinema">
                                    <SingleSelect
                                        onChange={handleChange}
                                        options={cinema}
                                        placeholder={"Cinema"}
                                    />
                                </div>
                                <div className="ticket-search-form__date">
                                    <SingleSelect
                                        onChange={handleChange}
                                        options={date}
                                        placeholder={"Date"}
                                    />
                                </div>
                                <div className="ticket-search-form__showtime">
                                    <SingleSelect
                                        onChange={handleChange}
                                        options={showtimes}
                                        placeholder={"Time"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
