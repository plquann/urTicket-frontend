import axiosClient from './axiosClient';

const movieAPI = {
    get: () => {
        const url = `http://localhost:5000`;
        
        return axiosClient.get(url);
    }
}
export default movieAPI;