import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': `${process.env.REACT_APP_URL}`,
        'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});


axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    console.log('🚀 ~ file: axiosClient.js ~ line 27 ~ axiosClient.interceptors.response.use ~ error', error);
    // Handle errors
    throw error;
});

export default axiosClient;