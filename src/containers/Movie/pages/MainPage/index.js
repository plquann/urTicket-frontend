import React, { memo} from 'react';
import MovieCarousel from 'containers/Movie/components/MovieBannerCarousel/MovieBannerCarousel';
import MovieSearch from 'containers/Movie/components/MovieSearch/MovieSearch';
import Tabs from 'containers/Movie/components/Tabs/Tabs';
import NewsSection from 'containers/Movie/components/NewsSection/NewsSection';
import Schedule from 'containers/Movie/components/Schedule/Schedule';
import BoxOffice from 'components/BoxOffice/BoxOffice';
import Page from 'components/Page/Page';
import { useSelector } from 'react-redux';

const MainPage = (props) => {

    const {
        movieNowPlaying,
        groupTheater,
        currentShowtime,
        newsHottest
    } = useSelector(state => state.home);

    

    return (
        <Page title="Homepage | UR-TICKET">
            <MovieCarousel />
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
