import React, { memo, useEffect } from 'react';
import MovieSearch from 'containers/Movie/components/MovieSearch/MovieSearch';
import Tabs from 'containers/Movie/components/Tabs/Tabs';
import NewsSection from 'containers/Movie/components/NewsSection/NewsSection';
import Schedule from 'containers/Movie/components/Schedule/Schedule';
import BoxOffice from 'components/BoxOffice/BoxOffice';
import Page from 'components/Page/Page';
import { useDispatch, useSelector } from 'react-redux';
import MovieHighlight from 'containers/Movie/components/MovieHighlight/MovieHighlight';
import { fetchMoviesHighlight, fetchMoviesNowPlaying, fetchMoviesUpcoming } from 'containers/Movie/slices/homeSlice';

const MainPage = (props) => {
    console.log('🚀 ~ file: index.js ~ line 48 ~ MainPage');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesHighlight());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchMoviesNowPlaying());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchMoviesUpcoming());
    }, [dispatch]);

    return (
        <Page title="Homepage | UR-TICKET">
            <MovieHighlight />
            <MovieSearch />
            <Tabs />
            <Schedule/>
            <NewsSection />
            <BoxOffice />
        </Page>
    )
}


export default memo(MainPage);
