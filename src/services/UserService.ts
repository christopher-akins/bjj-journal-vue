import axiosClient from '@/services/CreateAxiosClient';

export default {
  async getLoggedInUser() {
    const response = await axiosClient.get('/api/user');

    return response;
  },
};
