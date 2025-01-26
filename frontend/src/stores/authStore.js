import { create } from 'zustand';
import axiosInstance from '../lib/axios';

const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,

    register: async (name, email, password) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post('/users/register', { name, email, password }, { withCredentials: true });
            set({ user: res.data.user.name, loading: false });
            console.log("Register");
            localStorage.setItem('userInfo', JSON.stringify(res.data));
        } catch (error) {
            set({ error: error.response.data.msg, loading: false });
        }
    },

    login: async (email, password) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post('/users/login', { email, password }, { withCredentials: true });
            console.log("Login");
            set({ user: res?.data?.user?.name, loading: false });
            localStorage.setItem('userInfo', JSON.stringify(res?.data));
        } catch (error) {
            set({ error: error.response.data.msg, loading: false });
        }
    },

    forgotPassword: async (email) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post('/users/forgot-password', { email }, { withCredentials: true });
            set({ loading: false });
            alert(res.data.msg);
        } catch (error) {
            set({ error: error.response.data.msg, loading: false });
        }
    },

    fetchUser: async () => {
        set({ loading: true });
        try {
            const res = await axiosInstance.get('/users/current_user', { withCredentials: true });
            set({ user: res.data, loading: false });
            console.log("fetchUser", res);
        } catch (error) {
            set({ error: error.response.data.msg, loading: false });
        }
    },

    logout: async () => {
        // await axiosInstance.get('/auth/logout', { withCredentials: true });
        set({ user: null });
        localStorage.removeItem('userInfo');
    },
}));

export default useAuthStore;

