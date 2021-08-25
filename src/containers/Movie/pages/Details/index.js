import React, { useEffect, useLayoutEffect, useRef } from 'react';
import MovieBackDrop from 'containers/Movie/components/MovieBackDrop/MovieBackDrop';
import WrapperInfo from 'containers/Movie/components/WrapperInfo/WrapperInfo';
import Page from 'components/Page/Page';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from 'containers/Movie/Slice/movieSlide';
import Loading from 'components/Loading/Loading';

const scrollToRef = (ref) => {
    console.log('🚀 ~ file: index.js ~ line 14 ~ scrollToRef');
    window.scrollTo(0, ref.current.offsetTop)  
}

export default function Details() {
    const scheduleRef = useRef(null);
    const ref = useRef(null);
    const { movieId } = useParams();
    const { movieDetails, loading } = useSelector(state => state.movie);

    const dispatch = useDispatch();
    console.log('🚀 ~ file: index.js ~ line 19 ~ movieDetails', movieDetails);

    useEffect(() => {
        console.log('fetching movie details');
        dispatch(fetchMovieDetails(movieId));
    }, [dispatch, movieId]);

    useEffect(() => {
        if(ref.current) {
            scrollToRef(ref);
        }
    });

    const executeScroll = () => scheduleRef.current.scrollIntoView();

    return (
        <Page title="Movie | UR-TICKET" >
            {loading || movieDetails === null
                ? <Loading />
                :
                <div ref={ref}>
                    <MovieBackDrop backdropUrl={movieDetails?.backdropUrl} />
                    <WrapperInfo
                        refProp={scheduleRef}
                        handleScroll={executeScroll}
                    />
                </div>
            }
        </Page>
    )
}
