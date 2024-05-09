import axiosClient from '@/services/CreateAxiosClient';

export default {
  async getLoggedInUser() {
    const response = await axiosClient.get('/user');
    console.log('🚀 ~ file: UserService.ts:6 ~ getLoggedInUser ~ response:', response);

    return response;
  },
};
