import React, { memo} from 'react';
import MovieSearch from 'containers/Movie/components/MovieSearch/MovieSearch';
import Tabs from 'containers/Movie/components/Tabs/Tabs';
import NewsSection from 'containers/Movie/components/NewsSection/NewsSection';
import Schedule from 'containers/Movie/components/Schedule/Schedule';
import BoxOffice from 'components/BoxOffice/BoxOffice';
import Page from 'components/Page/Page';
import { useSelector } from 'react-redux';
import MovieHighlight from 'containers/Movie/components/MovieHighlight/MovieHighlight';

const MainPage = (props) => {

    const {
        movieNowPlaying,
        groupTheater,
        currentShowtime,
        newsHottest
    } = useSelector(state => state.home);

    

    return (
        <Page title="Homepage | UR-TICKET">
            <MovieHighlight />
            <MovieSearch movies={movieNowPlaying} />
            <Tabs />
            <Schedule
                groupTheater={groupTheater}
                showtime={currentShowtime}

            />
            <NewsSection news={newsHottest?.data} />
            <BoxOffice />
        </Page>
    )
}

export default memo(MainPage);
