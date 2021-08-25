import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieAPI from 'apis/movieAPI';


export const fetchMoviesNowPlaying = createAsyncThunk(
    'home/MOVIE_NOW_PLAYING',
    async () => {
        const movieNowPlaying = await movieAPI.getNowPlaying();
        return movieNowPlaying;
    }
);

export const fetchMoviesUpcoming = createAsyncThunk(
    'home/MOVIE_UPCOMING',
    async () => {
        const movieNowPlaying = await movieAPI.getUpcoming();
        return movieNowPlaying;
    }
);

export const fetchMoviesHighlight = createAsyncThunk(
    'home/MOVIE_HIGHLIGHT',
    async () => {
        const movieNowPlaying = await movieAPI.getHighlight();
        return movieNowPlaying;
    }
);

const initialHomePage = {
    movieNowPlaying: [],
    movieUpcoming: [],
    movieHighlight: [],
    groupTheater: [],
    currentShowtime: [],
    loading: false,
    error: '',
    newsHottest: {
        data: [],
        loading: false,
        error: '',
    },
};

const homeSlice = createSlice({
    name: 'home',
    initialState: initialHomePage,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMoviesNowPlaying.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchMoviesNowPlaying.fulfilled, (state, action) => {
            state.movieNowPlaying = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchMoviesNowPlaying.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });

        builder.addCase(fetchMoviesUpcoming.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchMoviesUpcoming.fulfilled, (state, action) => {
            state.movieUpcoming = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchMoviesUpcoming.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        builder.addCase(fetchMoviesHighlight.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchMoviesHighlight.fulfilled, (state, action) => {
            state.movieHighlight = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchMoviesHighlight.rejected, (state, action) => {
            if (action.payload)
                state.error = action.payload.message;
            else
                state.error = action.error.message;

            state.loading = false;
        }); 
    }
})

const { reducer: homeReducer } = homeSlice;
export default homeReducer;