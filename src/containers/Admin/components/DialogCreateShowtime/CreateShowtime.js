import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import MuiDialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm, Controller } from "react-hook-form";
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { movieAPI } from 'apis';

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


export default function CreateShowtime({ open, handleDialogOpen }) {
    const { handleSubmit, control } = useForm();
    const [movies, setMovies] = React.useState([]);

    const onSubmit = (values) => console.log('🚀 ~ file: CreateShowtime.js ~ line 28 ~ values', values);

    useEffect(() => {
        const fetchMovieNowShowing = async () => {
            try {
                const res = await movieAPI.getNowPlaying();
                setMovies(res.map(movie => ({ value: movie.id, label: movie.title })));
            } catch (err) {
                console.log('🚀 ~ file: CreateShowtime.js ~ line 38 ~ err', err);
            }
        };
        fetchMovieNowShowing();
    }, []);

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
                                    <Select {...field} style={{ width: '100%' }} >
                                        {movies.map(movie => (
                                            <MenuItem key={movie.value} value={movie.value}>{movie.label}</MenuItem>
                                        ))}
                                    </Select>
                                )}
                                name="movie"
                                control={control}
                                id="movie"
                            />
                        </section>
                        <section className="mb-4  grid grid-cols-3 gap-4">
                            <div className="">
                                <label htmlFor="cineplex" className="block mb-2 pl-1">Group Theater</label>
                                <Controller
                                    render={({ field }) => (
                                        <Select {...field} style={{ width: '100%' }}>
                                            {movies.map(movie => (
                                                <MenuItem key={movie.value} value={movie.value}>{movie.label}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                    name="cineplex"
                                    control={control}
                                    id="cineplex"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="theaters" className="block mb-2 pl-1">Theater</label>
                                <Controller
                                    render={({ field }) => (
                                        <Select {...field} style={{ width: '100%' }} >
                                            {movies.map(movie => (
                                                <MenuItem key={movie.value} value={movie.value}>{movie.label}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                    name="theaters"
                                    control={control}
                                    id="theaters"
                                />
                            </div>
                            <div className="">
                                <label htmlFor="room" className="block mb-2 pl-1">Room</label>
                                <Controller
                                    render={({ field }) => (
                                        <Select {...field} style={{ width: '100%' }} >
                                            {movies.map(movie => (
                                                <MenuItem key={movie.value} value={movie.value}>{movie.label}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                    name="room"
                                    control={control}
                                    id="room"
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
                                        onChange={(e) => field.onChange(e.toDateString())}
                                        selected={field.value}
                                        minDate={new Date()}
                                        showTimeSelect
                                        filterTime={filterPassedTime}
                                        className=" bg-transparent border solid border-gray-600 px-1 py-4 rounded-md text-center focus:outline-none"
                                        dateFormat="yyyy/mm/dd hh:mm aa"
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