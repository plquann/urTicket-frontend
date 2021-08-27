import React, { useEffect } from 'react';
import { fetchMovieReviews } from 'containers/Movie/slices/movieSlide';
import { useDispatch, useSelector } from 'react-redux';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const MovieReviews = () => {

    const { movieDetails, movieReviews } = useSelector(state => state.movie);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieReviews(movieDetails.data.id));
    }, [dispatch, movieDetails.data.id])

    return (
        <div className="movie__reviews">
            {/* {movieReviews.loading 
                ? <div>Loading...</div>
                : movieReviews.reviews.map(review => (
                    <ReviewDetails key={review?.id} review={review} />
                ))} */}

                {
                    movieReviews.reviews.map(review => (
                    <ReviewDetails key={review?.id} review={review} />
                ))
                }
        </div>
    )
}

export default MovieReviews
