import {create} from 'zustand';
import axiosInstance from '../lib/axios';

const useFeedStore = create((set) => ({
    posts: [],
    loading: false,
    error: null,

    fetchPosts: async () => {
        set({ loading: true });
        try {
            const res = await axiosInstance.get('/posts');
            set({ posts: res.data, loading: false });
        } catch (error) {
            set({ error: error.response.data.msg, loading: false });
        }
    },

    addPost: async (formData) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post('/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            set((state) => ({ posts: [...state.posts, res.data], loading: false }));
        } catch (error) {
            set({ error: error.response.data.msg, loading: false });
        }
    },
}));

export default useFeedStore;
