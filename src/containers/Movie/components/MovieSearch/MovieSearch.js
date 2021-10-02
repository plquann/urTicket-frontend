import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showtimeAPI } from 'apis';
import dateFormat from 'dateformat';
import './MovieSearch.scss';
import SingleSelect from 'components/SingleSelect/SingleSelect';
import {
    changeCurrentShowtimeQuickBooking
} from "containers/Movie/slices/homeSlice";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


export default function MovieSearch() {
    const { movieNowPlaying, currentShowtimeQuickBooking } = useSelector(state => state.home);

    const [showtime, setShowtime] = useState([]);
    const [cinema, setCinema] = useState([]);
    const [cineplex, setCineplex] = useState([]);
    const [schedule, setSchedule] = useState([]);

    const [movieSelect, setMovieSelect] = useState('');
    const [cineplexSelect, setCineplexSelect] = useState('');
    const dispatch = useDispatch();

    const handleChangeMovie = (data) => {
        // console.log('🚀 ~ file: MovieSearch.js ~ line 30 ~ data', data);
        setMovieSelect(data.value);
    }

    const handleChangeCineplex = (data) => {
        setCineplexSelect(data.value);
        setCinema(showtime.find(item => item.id === data.value)
            .theaters.map(item => ({ value: item.id, label: item.name })));
    }
    const handleClickWithNoShowtime = () => {
        console.log('toast');
        toast.error('Please select showtime first !', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleChangeCinema = (data) => {
        setSchedule(showtime.find(item => item.id === cineplexSelect)
            .theaters.find(item => item.id === data.value).showtimes.map(item =>
                ({ value: item.id, label: `${dateFormat(item.startTime, 'HH:MM')}- Rom ${item.room}` }))
        );
    }

    const handleChangeSchedule = (data) => {
        // console.log('🚀 ~ file: MovieSearch.js ~ line 54 ~ data', data);
        dispatch(changeCurrentShowtimeQuickBooking(data.value));

    }

    useEffect(() => {
        const fetchShowtimeByMovie = async () => {
            try {
                if (movieSelect) {
                    const res = await showtimeAPI.getShowtimesByMovieId(movieSelect);
                    // console.log('🚀 ~ file: MovieSearch.js ~ line 43 ~ res', res);
                    setShowtime(res);
                    setCineplex(res.map(item => ({ value: item.id, label: item.name })));
                }
            } catch (err) {
                console.log('🚀 ~ file: MovieSearch.js ~ line 40 ~ err', err);
            }
        };
        fetchShowtimeByMovie();
    }, [movieSelect]);

    return (
        <section className="search-ticket-section pt-20 mb-20 relative z-10">
            <div className="max-w-screen-lg mx-auto ">
                <div className="search-tab bg-img py-7 px-8 relative " >
                    <div className="grid grid-cols-2 mb-10">
                        <div className="search-ticket-header relative">
                            <h6 className="category text-lg mb-3 font-semibold uppercase" style={{ color: '#31d7a9' }}>
                                welcome to UR TICKET
                            </h6>
                            <h3 className="title text-2xl font-bold uppercase text-white">what are you looking for</h3>
                        </div>
                        <div className="button-booking justify-self-end relative">
                            {currentShowtimeQuickBooking ?
                                <button className="btn-large">
                                    <Link to={`/booking/${currentShowtimeQuickBooking}/seatplan`}>Booking Now
                                    </Link>
                                </button>
                                : <>
                                    <button className="btn-large" onClick={handleClickWithNoShowtime}>
                                        Booking Now
                                    </button>
                                    <ToastContainer limit={3}/>
                                </>}
                        </div>
                    </div>
                    <div className="tab-area p-8 relative border-t border-solid border-black mt-12 ">
                        <div className="tab-item">
                            <div className="ticket-search-form  grid grid-cols-5 gap-4">
                                <div className="ticket-search-form__movie col-span-2">
                                    <SingleSelect
                                        handleChange={handleChangeMovie}
                                        options={movieNowPlaying.map(item => ({ value: item.id, label: item.title }))}
                                        placeholder={"Select Movie"}
                                    />
                                </div>
                                <div className="ticket-search-form__cinema">
                                    <SingleSelect
                                        onChange={handleChangeCineplex}
                                        options={cineplex}
                                        placeholder={"Cineplex"}
                                    />
                                </div>
                                <div className="ticket-search-form__date">
                                    <SingleSelect
                                        onChange={handleChangeCinema}
                                        options={cinema}
                                        placeholder={"Theaters"}
                                    />
                                </div>
                                <div className="ticket-search-form__showtime">
                                    <SingleSelect
                                        onChange={handleChangeSchedule}
                                        options={schedule}
                                        placeholder={"Schedule"}
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
