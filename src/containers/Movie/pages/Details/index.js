import React, { memo, useEffect, useRef } from 'react';
import MovieBackDrop from 'containers/Movie/components/MovieBackDrop/MovieBackDrop';
import WrapperInfo from 'containers/Movie/components/WrapperInfo/WrapperInfo';
import Page from 'components/Page/Page';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from 'containers/Movie/slices/movieSlide';
import Loading from 'components/Loading/Loading';

const scrollToRef = (ref) => {
    console.log('🚀 ~ file: index.js ~ line 14 ~ scrollToRef');
    window.scrollTo(0, ref.current.offsetTop)
}

const Details = () => {
    const scheduleRef = useRef(null);
    const ref = useRef(null);
    const { movieId } = useParams();
    const movieDetails = useSelector(state => state.movie.movieDetails);

    const dispatch = useDispatch();
    console.log('🚀 ~ file: index.js ~ line 19 ~ movieDetails render');

    useEffect(() => {
        console.log('fetching movie details');
        dispatch(fetchMovieDetails(movieId));
    }, [dispatch, movieId]);

    useEffect(() => {
        if (ref.current) {
            scrollToRef(ref);
        }
    }, [ref]);

    const executeScroll = () => scheduleRef.current.scrollIntoView();

    return (
        <Page title="Movie | UR-TICKET" >
            {movieDetails.loading || movieDetails.data.length === 0
                ? <Loading />
                :
                <div ref={ref}>
                    <MovieBackDrop backdropUrl={movieDetails.data?.backdropUrl} />
                    <WrapperInfo
                        refProp={scheduleRef}
                        handleScroll={executeScroll}
                    />
                </div>
            }
        </Page>
    )
}

export default memo(Details);
