import axiosClient from '@/services/CreateAxiosClient';
import { AxiosResponse } from 'axios';

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

  async loginUser(payload: ApiLoginUser): Promise<AxiosResponse> {
    const response = await axiosClient.post('/login', payload);

    return response;
  },

  async logoutUser() {
    const response = await axiosClient.post('/logout');

    return response;
  },
};
