import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { movieAPI, reviewAPI, showtimeAPI } from 'apis';


export const fetchMovieDetails = createAsyncThunk(
    'movie/MOVIE_DETAILS',
    async (movieId) => {
        const movie = await movieAPI.getMovieDetail(movieId);
        // console.log('🚀 ~ file: movieSlide.js ~ line 8 ~ movie', movie);
        return movie;
    }
);

export const fetchMovieReviews = createAsyncThunk(
    'movie/MOVIE_REVIEWS',
    async (movieId) => {
        const reviews = await reviewAPI.getReviewsByMovieId(movieId);
        // console.log('🚀 ~ file: movieSlide.js ~ line 18 ~ reviews', reviews);
        return reviews;
    }
);

export const createReviewMovie = createAsyncThunk(
    'movie/POST_REVIEW',
    async (review, thunkAPI) => {
        const reviewResponse = await reviewAPI.createReview(review);
        await thunkAPI.dispatch(fetchMovieReviews(review.movieId));

        return reviewResponse;
    }
);

export const deleteReviewMovie = createAsyncThunk(
    'movie/DELETE_REVIEW',
    async (reviewId, thunkAPI) => {
        const res = await reviewAPI.deleteReview(reviewId);
        await thunkAPI.dispatch(fetchMovieReviews(res));
        
        return res;
    }
);

export const fetchMovieShowtimes = createAsyncThunk(
    'movie/MOVIE_SHOWTIMES',
    async (movieId) => {
        const showtimes = await showtimeAPI.getShowtimesByMovieId(movieId);
        // console.log('🚀 ~ file: movieSlide.js ~ line 33 ~ showtimes', showtimes);
        return showtimes;
    }
);


const initialMovie = {
    movieDetails: {
        data: [],
        error: '',
        loading: false,
    },
    movieReviews: {
        reviews: [],
        error: null,
        loading: false
    },
    movieShowtimes: {
        data: [],
        error: null,
        loading: false
    },
    createReview: {
        review: null,
        error: null,
        loading: false
    },
    deleteReview: {
        loading: false,
        error: null
    }
}

const movieSlice = createSlice({
    name: 'movie',
    initialState: initialMovie,
    reducers: {
        clearData(state) {
            return initialMovie;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovieDetails.pending, (state, action) => {
            state.movieDetails.loading = true;
        });

        builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.movieDetails.data = action.payload;
            state.movieDetails.loading = false;
            state.movieDetails.error = '';
        });

        builder.addCase(fetchMovieDetails.rejected, (state, action) => {
            console.log('🚀 ~ file: movieSlide.js ~ line 52 ~ action', action.payload);

            state.movieDetails.loading = false;
            state.movieDetails.error = '';
        });

        builder.addCase(fetchMovieReviews.pending, (state, action) => {
            state.movieReviews.loading = true;
        });

        builder.addCase(fetchMovieReviews.fulfilled, (state, action) => {
            state.movieReviews.reviews = action.payload;
            state.movieReviews.loading = false;
            state.movieReviews.error = '';
        });

        builder.addCase(fetchMovieReviews.rejected, (state, action) => {
            console.log('🚀 ~ file: movieSlide.js ~ line 73 ~ fetchMovieReviews.rejected', action.error);
            state.movieReviews.loading = false;
            state.movieReviews.error = '';
        });

        builder.addCase(createReviewMovie.pending, (state, action) => {
            state.createReview.loading = true;
        });

        builder.addCase(createReviewMovie.fulfilled, (state, action) => {
            state.createReview.review = action.payload;
            state.createReview.loading = false;
            state.createReview.error = '';
        });
        builder.addCase(createReviewMovie.rejected, (state, action) => {
            console.log('🚀 ~ file: movieSlide.js ~ line 87 ~ createReviewMovie.rejected', action.error);
            state.createReview.loading = false;
            state.createReview.error = '';
        });

        builder.addCase(deleteReviewMovie.pending, (state, action) => {
            state.deleteReview.loading = true;
        });
        builder.addCase(deleteReviewMovie.fulfilled, (state, action) => {
            state.deleteReview.loading = false;
            state.deleteReview.error = '';
        });
        builder.addCase(deleteReviewMovie.rejected, (state, action) => {
            console.log('🚀 ~ file: movieSlide.js ~ line 100 ~ deleteReviewMovie.rejected', action.error);
            state.deleteReview.loading = false;
            state.deleteReview.error = '';
        });
        builder.addCase(fetchMovieShowtimes.pending, (state, action) => {
            state.movieShowtimes.loading = true;
        });
        builder.addCase(fetchMovieShowtimes.fulfilled, (state, action) => {
            state.movieShowtimes.data = action.payload;
            state.movieShowtimes.loading = false;
            state.movieShowtimes.error = '';
        });
        builder.addCase(fetchMovieShowtimes.rejected, (state, action) => {
            console.log('🚀 ~ file: movieSlide.js ~ line 115 ~ fetchMovieShowtimes.rejected', action.error);
            state.movieShowtimes.loading = false;
            state.movieShowtimes.error = '';
        });

    }
})

const { reducer: movieReducer } = movieSlice;

export default movieReducer;