import axiosClient from './axiosClient';

const adminAPI = {
    get: () => {
        const url = `http://localhost:5000`;
        
        return axiosClient.get(url);
    }
}
export default adminAPI;