import { createSlice } from '@reduxjs/toolkit';

const initialMovies = [];

const movie = createSlice({ 
    name:'movie',
    initialState: initialMovies,
    reducers: {
        getNowPlaying:(state, action) =>{
            
        },

        getMovieExplore: (state, action) =>{

        },


    },
})

const {reducer, actions} = movie;
export const {getNowPlaying, getMovieExplore} = actions;
export default reducer;