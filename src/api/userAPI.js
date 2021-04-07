import axiosClient from './axiosClient';

const userAPI = {
    get: () => {
        const url = `http://localhost:5000`;
        
        return axiosClient.get(url);
    }
}
export default userAPI;