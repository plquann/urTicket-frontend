import axiosClient from './axiosClient';

const newsAPI = {
    getAllNews: (params) => {
        const url = '/news';
        return axiosClient.get(url, { params });
    },
    getPopularNews: () => {
        const url = `/news/popular`;

        return axiosClient.get(url);
    },
    getNewsDetails: (newsId) => {
        const url = `/news/${newsId}`;

        return axiosClient.get(url);
    },
    
}
export default newsAPI;