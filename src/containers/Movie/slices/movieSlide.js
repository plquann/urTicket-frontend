import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieAPI from 'apis/movieAPI';
import reviewAPI from 'apis/reviewAPI';

export const fetchMovieDetails = createAsyncThunk(
    'movie/MOVIE_DETAILS',
    async (movieId) => {
        const movie = await movieAPI.getMovieDetail(movieId);
        console.log('🚀 ~ file: movieSlide.js ~ line 8 ~ movie', movie);
        return movie;
    }
);

export const fetchMovieReviews = createAsyncThunk(
    'movie/MOVIE_REVIEWS',
    async (movieId) => {
        const reviews = await reviewAPI.getReviewsByMovieId(movieId);
        console.log('🚀 ~ file: movieSlide.js ~ line 18 ~ reviews', reviews);
        return reviews;
    }
);

const initialMovie = {
    movieDetails: null,
    movieReviews: {
        reviews: [],
        error: null,
        loading: false
    },
    error: '',
    loading: false,
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
            state.loading = true;
        });

        builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.movieDetails = action.payload;
            state.loading = false;
            state.error = '';
        });

        builder.addCase(fetchMovieDetails.rejected, (state, action) => {
            console.log('🚀 ~ file: movieSlide.js ~ line 52 ~ action', action.payload);

            state.loading = false;
            state.error = '';
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
            console.log('🚀 ~ file: movieSlide.js ~ line 73 ~ action', action.payload);
            state.movieReviews.loading = false;
            state.movieReviews.error = '';
        });

    }
})

const { reducer: movieReducer } = movieSlice;

export default movieReducer;