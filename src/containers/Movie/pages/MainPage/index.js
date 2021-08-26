import React, { memo, useEffect } from 'react';
import MovieSearch from 'containers/Movie/components/MovieSearch/MovieSearch';
import Tabs from 'containers/Movie/components/Tabs/Tabs';
import NewsSection from 'containers/Movie/components/NewsSection/NewsSection';
import Schedule from 'containers/Movie/components/Schedule/Schedule';
import BoxOffice from 'components/BoxOffice/BoxOffice';
import Page from 'components/Page/Page';
import { useDispatch, useSelector } from 'react-redux';
import MovieHighlight from 'containers/Movie/components/MovieHighlight/MovieHighlight';
import { fetchMoviesHighlight, fetchMoviesNowPlaying, fetchMoviesUpcoming } from 'containers/Movie/slice/homeSlice';

const MainPage = (props) => {
    console.log('🚀 ~ file: index.js ~ line 48 ~ MainPage');

    const {
        movieNowPlaying,
        newsHottest
    } = useSelector(state => state.home);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesHighlight());
    }, [dispatch]);

    useEffect(() => {
        // console.log('userEffect now playing');
        dispatch(fetchMoviesNowPlaying());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchMoviesUpcoming());
    }, [dispatch]);

    return (
        <Page title="Homepage | UR-TICKET">
            <MovieHighlight />
            <MovieSearch movies={movieNowPlaying} />
            <Tabs />
            <Schedule/>
            <NewsSection news={newsHottest?.data} />
            <BoxOffice />
        </Page>
    )
}


export default memo(MainPage);
