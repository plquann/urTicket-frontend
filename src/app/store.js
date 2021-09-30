import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'containers/Movie/slices/homeSlice';
import movieReducer from 'containers/Movie/slices/movieSlide';
import authReducer from './authSlice';
import { loadUserData } from 'utils/localStorage'
import bookingReducer from 'containers/Booking/slices/bookingSlice';

const userData = loadUserData();

const initialState = {
    auth: {
        user: userData,
        isLoggedIn: Boolean(userData),
        isAdmin: Boolean(userData) ? userData.roles === 'ADMIN' : false,
        loading: false,
        error: '',
    }
};

const rootReducer = {
    auth: authReducer,
    home: homeReducer,
    movie: movieReducer,
    booking: bookingReducer,
};

const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState: initialState,
});

export default store;