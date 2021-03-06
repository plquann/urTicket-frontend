import axiosClient from './axiosClient';

const showtimeAPI = {
    getShowtimesByMovieId: (movieId) => {
        const url = `/showtime/movie/${movieId}`;

        return axiosClient.get(url);
    },
    getShowtimesByMovieIdAndDate: (movieId, params) => {
        const url = `/showtime/movie/${movieId}`;

        return axiosClient.get(url, { params });
    },
    getShowtimesByTheaterId: (theaterId) => {
        const url = `/showtime/theater/${theaterId}`;

        return axiosClient.get(url);
    },
    getDetailsByShowtimeId: (showtimeId) => {
        const url = `/showtime/${showtimeId}`;

        return axiosClient.get(url);
    }

}
export default showtimeAPI;