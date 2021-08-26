import axiosClient from './axiosClient';

const groupTheaterAPI = {
    getGroupTheater: () => {
        const url = `/group-theater`;

        return axiosClient.get(url);
    },

}
export default groupTheaterAPI;