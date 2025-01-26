import {create} from 'zustand';
import axiosInstance from '../lib/axios';

const useTaskStore = create((set, get) => ({
  tasks: [],
  loading: false,
  error: null,

  fetchTasks: async () => {
    set({ loading: true });
    try {
      const res = await axiosInstance.get('/tasks', { withCredentials: true });
      set({ tasks: res.data, loading: false });
    } catch (error) {
      set({ error: error.response.data.msg, loading: false });
    }
  },

  addTask: async (title, description) => {
    try {
      const res = await axiosInstance.post(
        '/tasks',
        { title, description },
        { withCredentials: true }
      );
      set({ tasks: [...get().tasks, res.data] });
    } catch (error) {
      set({ error: error.response.data.msg });
    }
  },

  updateTaskStatus: async (id, status) => {
    try {
      const res = await axiosInstance.put(
        `/tasks/${id}`,
        { status },
        { withCredentials: true }
      );
      const updatedTasks = get().tasks.map((task) =>
        task._id === id ? res.data : task
      );
      set({ tasks: updatedTasks });
    } catch (error) {
      set({ error: error.response.data.msg });
    }
  },

  deleteTask: async (id) => {
    try {
      await axiosInstance.delete(`/tasks/${id}`, { withCredentials: true });
      const filteredTasks = get().tasks.filter((task) => task._id !== id);
      set({ tasks: filteredTasks });
    } catch (error) {
      set({ error: error.response.data.msg });
    }
  },
}));

export default useTaskStore;