import axiosClient from './axiosClient';

const userAPI = {
    getMe: async () => {
        const res = await axiosClient.get('/users/me');
        return res;
    },
    changePassword: async (data) => {
        return await axiosClient.post('/users/me/change-password', data);
    },
};
export default userAPI;