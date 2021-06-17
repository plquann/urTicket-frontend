import axiosClient from './axiosClient';

const movieAPI = {
    getNowPlaying: () => {
        const url = `/movie/now_playing`;
        
        return axiosClient.get(url);
    }
}
export default movieAPI;