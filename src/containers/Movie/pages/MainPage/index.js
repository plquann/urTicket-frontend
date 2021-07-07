import React from 'react';
import MovieCarousel from 'containers/Movie/components/MovieBannerCarousel';
import MovieSearch from 'containers/Movie/components/MovieSearch';
import Tabs from 'containers/Movie/components/Tabs';
import NewsSection from 'containers/Movie/components/NewsSection/NewsSection';

export default function MainPage(props) {
    console.log('🚀 ~ file: index.js ~ line 7 ~ MainPage ~ props', props);
    return (
        <>
            <MovieCarousel />
            <MovieSearch />
            <Tabs />
            <NewsSection />
        </>
    )
}
