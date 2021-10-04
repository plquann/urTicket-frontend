import axiosClient from './axiosClient';

const adminAPI = {
    getAllUsers: () => {
        const url = `/users`;
        return axiosClient.get(url);
    },
    deleteUsers: (id) => {
        const url = `/users/${id}`;
        return axiosClient.delete(url);
    },
    getAllMovies: (params) => {
        const url = '/movie';
        return axiosClient.get(url, { params });
    },
    getAllNews: (params) => {
        const url = '/news';
        return axiosClient.get(url, { params });
    },
    getAllShowtimes: (params) => {
        const url = '/showtime';
        return axiosClient.get(url, { params });
    },
    createShowtime: (showtime) => {
        const url = '/showtime';
        return axiosClient.post(url, showtime);
    },
    getAllReservations: (params) => {
        const url = '/reservations';
        return axiosClient.get(url, { params });
    }
    
}
export default adminAPI;