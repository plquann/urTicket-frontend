import { IconSearch } from 'components/Icons';
import React, { useEffect, useRef, useState } from 'react';
import { movieAPI } from 'apis';
import dateFormat from 'dateformat';
import './SearchDiscover.scss';
import MovieClassify from '../MovieClassify/MovieClassify';

import { Link } from 'react-router-dom';
import useComponentVisible from 'hooks/useComponentVisible';

export default function SearchDiscover(props) {
    const [result, setResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState({});
    const [formValue, setFormValue] = useState('');
    const typingTimeout = useRef(null);

    const { ref, isVisible, setIsVisible } = useComponentVisible(false);

    useEffect(() => {
        const fetchMovieSearch = async () => {
            try {
                if (searchTerm.searchTerm) {
                    const res = await movieAPI.searchMovie(searchTerm);
                    setResult(res.movies);
                    setIsVisible(true);
                }
            } catch (err) {
                console.log('🚀 ~ file: SearchDiscover.js ~ line 25 ~ err', err);
            }
        }
        fetchMovieSearch();
    }, [searchTerm]);

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setFormValue(value);

        if (typingTimeout.current) {
            clearTimeout(typingTimeout.current)
        };

        typingTimeout.current = setTimeout(() => {
            setSearchTerm({
                searchTerm: value,
            });
        }, 300);
    };


    return (
        <section className="search-discover-section pt-20 mb-20 relative z-10">
            <div className="max-w-screen-lg mx-auto">
                <div className="search-discover-tab bg-img py-4 px-8 relative " >
                    <div className="search-discover-header relative">
                        <h6 className="text-lg mb-3 font-semibold uppercase text-center" style={{ color: '#31d7a9' }}>
                            Search Movie
                        </h6>
                    </div>
                    <form className="relative w-3/4 mx-auto mb-2" ref={ref}>
                        <input
                            type="text"
                            value={formValue}
                            onChange={handleSearchTermChange}
                            className="w-full  border border-gray-500 rounded p-2 text-white"
                            style={{ background: '#131516' }}
                            placeholder="Search for a movie"
                        />
                        <button type="submit" className="h-full w-10 focus:outline-none absolute top-0 right-4 text-xl">
                            <IconSearch width={24} height={24} fillColor={'white'} />
                        </button>

                        { isVisible ?
                            <div className="search-result absolute left-0 top-full w-full max-h-96 overflow-auto divide-y divide-light-blue-400 rounded-md" style={{ background: "#1A222A" }} >
                                {result?.map((item, index) => {
                                    return (
                                        <div key={item.id} className="search-result-item px-2 py-4 hover:bg-gray-900 transition duration-300">
                                            <Link to={`/movie/${item?.id}`}>
                                                <div className="flex flex-wrap">
                                                    <div className="w-1/12">
                                                        <img src={item?.posterUrl} className="w-full h-full" alt="poster" />
                                                    </div>
                                                    <div className="w-5/6 pl-4">
                                                        <h6 className=" font-semibold uppercase"><MovieClassify classify={item?.classify} styles={'mr-2'} />{item?.title}</h6>
                                                        <p className="mt-1">
                                                            {item?.duration} minutes
                                                        </p>
                                                        <p className="-mt-1 " style={{ color: '#31d7a9' }}>{dateFormat(item?.releaseDate, 'fullDate')}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                            : ''
                        }
                    </form>

                </div>
            </div>
        </section>
    )
}
