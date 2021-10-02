import axiosClient from './axiosClient';

const groupTheaterAPI = {
    getGroupTheater: () => {
        const url = `/group-theater`;

        return axiosClient.get(url);
    },
    getTheater: (id) => {
        const url = `/theaters/${id}`;

        return axiosClient.get(url);
    },

}
export default groupTheaterAPI;