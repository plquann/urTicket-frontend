import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieAPI from 'apis/movieAPI';
import reviewAPI from 'apis/reviewAPI';

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
    createReview:{
        review: null,
        error: null,
        loading: false
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
            console.log('🚀 ~ file: movieSlide.js ~ line 73 ~ action', action.payload);
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
            console.log('🚀 ~ file: movieSlide.js ~ line 87 ~ action', action.payload);
            state.createReview.loading = false;
            state.createReview.error = '';
        });

    }
})

const { reducer: movieReducer } = movieSlice;

export default movieReducer;