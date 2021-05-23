import React from 'react';
import MovieCarousel from 'features/Movie/components/MovieBannerCarousel';
import MovieSearch from 'features/Movie/components/MovieSearch';
import Tabs from 'features/Movie/components/Tabs';

export default function MainPage() {
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
