import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authAPI from 'apis/authAPI';

//action 
export const login = createAsyncThunk(
    'auth/LOGIN',
    async (user, thunkAPI) => {
        const { email, password } = user;
        //console.log('🚀 ~ file: authSlice.js ~ line 7 ~ login ~ user', user);

        const userLogin = await authAPI.login({ email, password });
        console.log('🚀 ~ file: authSlice.js ~ line 12 ~ userLogin', userLogin);

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
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.loading = false;
            state.error = '';
            state.isAdmin = action.payload.roles === 'ADMIN';
        });
        builder.addCase(login.rejected, (state, action) => {
            console.log('🚀 ~ file: authSlice.js ~ line 38 ~ builder.addCase ~ action', action);

            if (action.payload)
                state.error = action.payload.message;
            else
                state.error = action.error.message;

            state.loading = false;
        });
    },
});

const { reducer: authReducer } = authSlice;
export default authReducer;