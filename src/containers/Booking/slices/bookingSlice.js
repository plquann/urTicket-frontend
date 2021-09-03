import { showtimeAPI } from "apis";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchShowtimeInfo = createAsyncThunk(
    "booking/fetchShowtimeInfo",
    async (showtimeId) => {
        const showtime = await showtimeAPI.getDetailsByShowtimeId(showtimeId);

        return showtime;
    }
);

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        showtimeInfo: {},
        ticket: [],
        pickedSeats: [],
        loading: false,
        status: '',
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShowtimeInfo.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchShowtimeInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.showtimeInfo = action.payload;
        });
        builder.addCase(fetchShowtimeInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

// export const { } = bookingSlice.actions;

// export default bookingSlice.reducer;

const { reducer: bookingReducer } = bookingSlice;
export default bookingReducer;