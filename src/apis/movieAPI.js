import axiosClient from './axiosClient';

const movieAPI = {
    getNowPlaying: () => {
        const url = `/movie/now_playing`;

        return axiosClient.get(url);
    },
    getUpcoming: () => {
        const url = '/movie/upcoming';

        return axiosClient.get(url);
    },
    getHighlight: () => {
        const url = '/movie/highlight';

        return axiosClient.get(url);
    },
    getMovieDetail: (movieId) => {
        const url = `/movie/${movieId}`;

        return axiosClient.get(url);
    }

}
export default movieAPI;