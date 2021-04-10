import Footer from 'components/Footer';
import Header from 'components/Header';
import Pagination from 'components/Pagination';


import React from 'react';
import MovieCarousel from './components/MovieBannerCarousel';
import MovieSearch from './components/MovieSearch';
import Tabs from './components/Tabs';

export default function Movie() {
    return (
        <div className="w-full h-full">
            <Header />
            <MovieCarousel />
            <MovieSearch />
            <Tabs />
            <Pagination/>
            <Footer />
        </div>
    )
}
