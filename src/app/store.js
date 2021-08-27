import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'containers/Movie/slices/homeSlice';
import movieReducer from 'containers/Movie/slices/movieSlide';
import authReducer from './authSlice';

const rootReducer = {
    auth : authReducer,
    home: homeReducer,
    movie: movieReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;