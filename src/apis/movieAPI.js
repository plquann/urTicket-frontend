import axiosClient from './axiosClient';

const movieAPI = {
    getMovies: (params) => {
        const url = '/movie';
        return axiosClient.get(url, { params });
    },
    getNowPlaying: () => {
        const url = `/movie/now-playing`;

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
    },
    searchMovie: (params) => {
        const url = '/movie/search';
        return axiosClient.get(url, { params });
    }

}
export default movieAPI;