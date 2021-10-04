import React, { useEffect, useState } from 'react';
// import TextField from '@material-ui/core/TextField';
import MuiDialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm, Controller } from "react-hook-form";
import { makeStyles, withStyles } from '@material-ui/styles';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateFormat from 'dateformat';
import { movieAPI, groupTheaterAPI } from 'apis';

const Dialog = withStyles({
    root: {
        padding: '1rem',
        backgroundColor: 'black',
        opacity: '1',

    },
    paper: {
        backgroundColor: '#191C24',
        boxShadow: 'none',
        width: '996px',
    }
})(MuiDialog);

const Select = withStyles({
    root: {
        backgroundColor: '#191C24',
        "& ul": {
            backgroundColor: "black",
        },
    },
})(MuiSelect);

const useStyles = makeStyles({
    select: {
        "& ul": {
            backgroundColor: "#08090a",
            maxHeight: "300px",
            overflow: "auto",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        },
        "& li": {
        },
    },
});



export default function CreateShowtime({ open, handleDialogOpen }) {
    const { handleSubmit, control } = useForm();
    const [movies, setMovies] = useState([]);
    const [cineplex, setCineplex] = useState([]);
    const [theaters, setTheaters] = useState([]);
    const [room, setRoom] = useState([]);
    const [selectedCineplex, setSelectedCineplex] = useState('');
    const [selectedTheater, setSelectedTheater] = useState('');
    const classes = useStyles();

    const onSubmit = (values) => console.log('🚀 ~ file: CreateShowtime.js ~ line 28 ~ values', values);

    useEffect(() => {
        const fetchInitialValues = async () => {
            try {
                const resMovies = await movieAPI.getNowPlaying();
                const resCineplex = await groupTheaterAPI.getGroupTheater();
                console.log('🚀 ~ file: CreateShowtime.js ~ line 72 ~ resCineplex', resCineplex);
                setMovies(resMovies.map(movie => ({ value: movie.id, label: movie.title })));
                setCineplex(resCineplex);
            } catch (err) {
                console.log('🚀 ~ file: CreateShowtime.js ~ line 38 ~ err', err);
            }
        };
        fetchInitialValues();
    }, []);

    useEffect(() => {
        if (cineplex.length)
            setTheaters(cineplex.find(cineplex => cineplex.id === selectedCineplex)?.theaters
                .map(theater => ({ value: theater.id, label: theater.name })));
    }, [cineplex, selectedCineplex]);

    useEffect(() => {
        if (cineplex.length)
            setRoom(cineplex.find(cineplex => cineplex.id === selectedCineplex)
                ?.theaters.find(theater => theater.id === selectedTheater)
                ?.rooms.map(room => ({ value: room, label: room })));

    }, [cineplex, selectedCineplex, selectedTheater]);

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    return (
        <>

            <Dialog open={open} onClose={handleDialogOpen}  >
                <DialogTitle style={{ textAlign: 'center' }}>ADD SHOWTIME</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        {/* <section>
                            <Controller
                                control={control}
                                name="textField"
                                render={({ field }) => (
                                    <TextField {...field} />
                                )}
                            />
                        </section> */}
                        <section className="mb-4">
                            <label htmlFor="movie" className="block mb-2 pl-1">Select Movie</label>
                            <Controller
                                render={({ field }) => (
                                    <Select {...field}
                                        style={{ width: '100%' }}
                                        MenuProps={{ classes: { paper: classes.select } }}
                                    >
                                        {movies?.map(movie => (
                                            <MenuItem key={movie.value} value={movie.value}>{movie.label}</MenuItem>
                                        ))}
                                    </Select>
                                )}
                                name="movieId"
                                control={control}
                                id="movie"
                                defaultValue={''}
                            />
                        </section>
                        <section className="mb-4  grid grid-cols-3 gap-4">
                            <div className="">
                                <label htmlFor="cineplex" className="block mb-2 pl-1">Group Theater</label>
                                <Controller
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            style={{ width: '100%' }}
                                            MenuProps={{ classes: { paper: classes.select } }}
                                            onChange={(e) => {
                                                field.onChange(e.target.value);
                                                setSelectedCineplex(e.target.value);
                                            }}
                                        >
                                            {cineplex?.map(cineplex => ({ value: cineplex.id, label: cineplex.name })).map(item => (
                                                <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                    name="cineplex"
                                    control={control}
                                    id="cineplex"
                                    defaultValue={''}
                                />
                            </div>
                            <div className="">
                                <label htmlFor="theaters" className="block mb-2 pl-1">Theater</label>
                                <Controller
                                    render={({ field }) => (
                                        <Select {...field}
                                            style={{ width: '100%' }}
                                            MenuProps={{ classes: { paper: classes.select } }}
                                            onChange={(e) => {
                                                field.onChange(e.target.value);
                                                setSelectedTheater(e.target.value);
                                            }}
                                        >
                                            {theaters?.map(item => (
                                                <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                    name="theaterId"
                                    control={control}
                                    id="theaters"
                                    defaultValue={''}
                                />
                            </div>
                            <div className="">
                                <label htmlFor="room" className="block mb-2 pl-1">Room</label>
                                <Controller
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            style={{ width: '100%' }}
                                            MenuProps={{ classes: { paper: classes.select } }}
                                        >
                                            {room?.map(item => (
                                                <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                    name="room"
                                    control={control}
                                    id="room"
                                    defaultValue={''}
                                />
                            </div>

                        </section>

                        <section className="w-full">
                            <label htmlFor="date" className="block mb-2 pl-1">Start Time</label>
                            <Controller
                                id="date"
                                control={control}
                                name="startTime"
                                render={({ field }) => (
                                    <DatePicker
                                        onChange={(e) => field.onChange(e)}
                                        selected={field.value}
                                        minDate={new Date()}
                                        showTimeSelect
                                        filterTime={filterPassedTime}
                                        className=" bg-transparent border solid text-center cursor-pointer border-gray-600 px-1 py-3 rounded-md focus:outline-none focus:ring-1 focus:border-green-600 "
                                        dateFormat="yyyy/mm/dd HH:MM"
                                        placeholderText="Click to select a date"
                                    />
                                )}
                            />
                        </section>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" onClick={handleDialogOpen}>Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">Add Showtime</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}