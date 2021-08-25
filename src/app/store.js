import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'containers/Movie/Slice/homeSlice';
import movieReducer from 'containers/Movie/Slice/movieSlide';
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