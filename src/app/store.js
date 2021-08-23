import { configureStore } from '@reduxjs/toolkit';
import homeReducer from 'containers/Movie/Slice/homeSlice';
import authReducer from './authSlice';

const rootReducer = {
    auth : authReducer,
    home: homeReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;