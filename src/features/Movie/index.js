import React from 'react';
import MovieCarousel from './components/MovieBannerCarousel';
import MovieSearch from './components/MovieSearch';
import Tabs from './components/Tabs';

export default function Movie() {
    return (
        <>
            <MovieCarousel />
            <MovieSearch />
            <Tabs />
            <div className="view-all text-center">
                <a href="/home">
                    <button className="bg-btn-gradient text-xl px-10 py-3 rounded-xl -mt-16 uppercase focus:outline-none">
                        View All
                    </button>
                </a>
            </div>
        </>
    )
}
