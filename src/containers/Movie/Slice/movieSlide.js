import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieAPI from 'apis/movieAPI';
import { nullFormat } from 'numeral';

export const fetchMovieDetails = createAsyncThunk(
    'movie/MOVIE_DETAILS',
    async (movieId) => {
        const movie = await movieAPI.getMovieDetail(movieId);
        console.log('🚀 ~ file: movieSlide.js ~ line 8 ~ movie', movie);
        return movie;
    }
);



const initialMovie = {
    movieDetails: null,
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
        })
        builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.movieDetails = action.payload;
            state.loading = false;
            state.error = '';
        })
    }
})

const { reducer: movieReducer } = movieSlice;

export default movieReducer;