import React from 'react';
import MovieCarousel from 'containers/Movie/components/MovieBannerCarousel';
import MovieSearch from 'containers/Movie/components/MovieSearch';
import Tabs from 'containers/Movie/components/Tabs';

export default function MainPage(props) {
    console.log('🚀 ~ file: index.js ~ line 7 ~ MainPage ~ props', props);
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
