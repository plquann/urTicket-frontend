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

}
export default adminAPI;