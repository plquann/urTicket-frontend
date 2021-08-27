import axiosClient from './axiosClient';

const reviewAPI = {
    getReviewsByMovieId: (movieId) => {
        const url = `/review/movie/${movieId}`;

        return axiosClient.get(url);
    },
    createReview: (data) => {
        const url = '/review';

        return axiosClient.post(url, data);
    },
    deleteReview: (reviewId) => {
        const url = `/review/${reviewId}`;

        return axiosClient.delete(url);
    }

}
export default reviewAPI;