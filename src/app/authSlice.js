import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from 'apis/authAPI';

//action 
export const login = createAsyncThunk('auth/LOGIN', async (user, thunkAPI) => {
    const userLogin = await authAPI.login(user);
    return userLogin;
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false,
        isAdmin: false,
        loading: false,
        error: '',
    },

    reducers: {},
    extraReducers: {},
});

const { reducer: authReducer } = authSlice;
export default authReducer;