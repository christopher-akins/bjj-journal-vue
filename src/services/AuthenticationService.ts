import axiosClient from '@/services/CreateAxiosClient';

type ApiRegisterUser = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,
};

type ApiLoginUser = {
  email: string,
  password: string,
};

export default {
  async getCsrfToken() {
    const response = await axiosClient.get('/sanctum/csrf-cookie');

    return response;
  },

  async registerUser(payload: ApiRegisterUser) {
    const response = await axiosClient.post('/register', payload);

    return response;
  },

  async loginUser(payload: ApiLoginUser) {
    try {
      const response = await axiosClient.post('/login', payload);

      return response;
    }
    catch (error) {
      console.log('🚀 ~ file: AuthenticationService.ts:43 ~ loginUser ~ error:', error);

      return error;
    }
  },

  async logoutUser() {
    const response = await axiosClient.post('/logout');

    return response;
  },
};
