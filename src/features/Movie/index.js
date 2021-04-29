import FilterDate from 'features/Movie/components/FilterDate';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Pagination from 'components/Pagination';
import MovieItem from 'features/Movie/components/MovieItem';
import React from 'react';
import FilterCinema from './components/FilterCinema';
import MovieCarousel from './components/MovieBannerCarousel';
import MovieExplore from './components/MovieExplore';
import MovieSearch from './components/MovieSearch';
import Tabs from './components/Tabs';

export default function Movie() {
    return (
        <div className="w-full">
            <Header />
            <MovieCarousel />
            <MovieSearch />
            <Tabs />
            <div className="view-all text-center">
                <a href="/home">
                    <button className="bg-btn-gradient text-xl px-12 py-4 rounded-full -mt-16 uppercase focus:outline-none">
                        View All
                    </button>
                </a>
            </div>
            <Footer />
        </div>
    )
}
