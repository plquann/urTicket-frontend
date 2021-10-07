import axiosClient from './axiosClient';

const authAPI = {
    login: async (data) => {
        const res = await axiosClient.post('/auth/login', data);
        return res;
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
    forgotPassword: async (data) => {
        const url = 'users/forgot-password';
        return await axiosClient.post(url, data);
    },
    resetPassword: async (data) => {
        const url = 'users/reset-password';
        return await axiosClient.post(url, data);
    },

};
export default authAPI;