import React, { useEffect } from 'react';
import { fetchMovieReviews } from 'containers/Movie/slices/movieSlide';
import { useDispatch, useSelector } from 'react-redux';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const MovieReviews = (props) => {

    const { movieDetails, movieReviews } = useSelector(state => state.movie);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieReviews(movieDetails.data.id));
    }, [dispatch, movieDetails.data.id])

    return (
        <div className="movie__reviews">
            {movieReviews.loading
                ? <div></div>
                : movieReviews.reviews && movieReviews.reviews.length
                    ? movieReviews.reviews.map(review => (
                        <ReviewDetails key={review?.id} review={review} />
                    ))
                    : <div className="text-xl font-medium italic mb-4 text-green-400">No reviews found</div>
            }
        </div>
    )
}

export default MovieReviews
