import { createSlice } from '@reduxjs/toolkit';

const initialHomePage = {
    movieNowPlaying: [],
    movieUpcoming: [],
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
    name:'home',
    initialState: initialHomePage,
    reducers: {
        getNowPlaying:(state, action) =>{
            
        },

        getMovieExplore: (state, action) =>{

        },


    },
})

const {reducer, actions} = homeSlice;
export const {getNowPlaying, getMovieExplore} = actions;
export default reducer;