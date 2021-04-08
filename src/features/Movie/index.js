import Footer from 'components/Footer';
import Header from 'components/Header';
import MovieCard from 'features/Movie/components/MovieCard';

import React from 'react';
import MovieSearch from './components/MovieSearch';

export default function Movie() {
    return (
        <div className="w-full h-full">
            <Header />
            <MovieSearch />
            <div className="max-w-screen-lg mx-auto grid grid-flow-col grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item, index) => {
                    return (
                        <MovieCard key={index} item={item} />
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}
