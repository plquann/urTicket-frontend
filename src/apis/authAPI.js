import axiosClient from './axiosClient';

const authAPI = {
    login: async (data) => {
        return await axiosClient.post('/auth/login', data);
    },
    register: async (data) => {
        return await axiosClient.post('/auth/register', data);
    },

    logout: async () => {
        return await axiosClient.post('/auth/logout');
    },

    refreshToken: async () => {
        return await axiosClient.get('/auth/refresh');
    },

};
export default authAPI;