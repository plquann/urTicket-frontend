import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'containers/Movie/slices/homeSlice';
import movieReducer from 'containers/Movie/slices/movieSlide';
import authReducer from './authSlice';
import { loadUserData } from 'utils/localStorage'

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
};

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export default store;