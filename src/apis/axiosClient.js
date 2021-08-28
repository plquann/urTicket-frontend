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
    if (response) {
        return response.data;
    }
    return response;
}, (error) => {
    // console.log('🚀 ~ axiosClient.interceptors.response.use ~ error', error.response);
    // const { statusCode, message } = error.response.data;
    // console.log('🚀 ~ file: axiosClient.js ~ line 34 ~ axiosClient.interceptors.response.use ~ message', message);
    // console.log('🚀 ~ file: axiosClient.js ~ line 34 ~ axiosClient.interceptors.response.use ~ statusCode', statusCode);
    throw error.response.data;

});

export default axiosClient;