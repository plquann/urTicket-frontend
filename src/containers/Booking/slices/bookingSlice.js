import { showtimeAPI, ticketAPI } from "apis";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchShowtimeInfo = createAsyncThunk(
    "booking/FETCH_SHOWTIME_INFO",
    async (showtimeId) => {
        const showtime = await showtimeAPI.getDetailsByShowtimeId(showtimeId);

        return showtime;
    }
);

export const fetchTicketsByShowtime = createAsyncThunk(
    "booking/FETCH_TICKETS_SHOWTIME",
    async (showtimeId) => {
        const tickets = await ticketAPI.getTicketsByShowtime(showtimeId);
        return tickets;
    }
);

const bookingSlice = createSlice({
    name: 'booking',
    initialState: {
        showtimeInfo: {},
        pickedSeats: [],
        loading: false,
        nextStep: '',
        status: '',
        error: null,
    },
    reducers: {
        handlePickedSeats: (state, action) => {
            const ticket = action.payload;
            const index = state.pickedSeats.findIndex(item => item.id === ticket.id);
            if (index === -1) {
                state.pickedSeats.push(ticket);
            } else {
                state.pickedSeats.splice(index, 1);
            }
        },
        checkPickedSeatsShowtime: (state, action) => {
            const showtimeId = action.payload;
            state.pickedSeats = state.pickedSeats.filter(item => item.showtimeId === showtimeId);
        },
        setStepBooking: (state, action) => {
            state.nextStep = action.payload;
        }

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
        builder.addCase(fetchTicketsByShowtime.pending, (state, action) => {
            state.loading = true;
        }
        );
        builder.addCase(fetchTicketsByShowtime.fulfilled, (state, action) => {
            state.loading = false;
            state.ticket = action.payload;
        });
        builder.addCase(fetchTicketsByShowtime.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

// export const { } = bookingSlice.actions;

// export default bookingSlice.reducer;

const { reducer: bookingReducer, actions } = bookingSlice;
export const { handlePickedSeats, checkPickedSeatsShowtime,setStepBooking} = actions;
export default bookingReducer;