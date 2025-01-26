import axios from 'axios';

const prod = import.meta.env.VITE_PRODUCTION;

const axiosInstance = axios.create({
    baseURL: `${prod.length == 0 ? "http://localhost:5000" : prod}/api`,
    withCredentials: true, // get the access of cookies and etc. from frontend
});

// Intercept requests and add token to headers
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : null;
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;