import axios from 'axios';

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

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL as string,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withXSRFToken: true,
  withCredentials: true,

});

export default {
  async getCsrfToken() {
    const response = await axiosClient.get('/sanctum/csrf-cookie');
    console.log('🚀 ~ file: AuthenticationService.ts:31 ~ getCsrfToken ~ response:', response);

    return response;
  },

  async registerUser(payload: ApiRegisterUser) {
    const response = await axiosClient.post('/register', payload);

    return response;
  },

  async loginUser(payload: ApiLoginUser) {
    const response = await axiosClient.post('/login', payload);

    return response;
  },

  async logoutUser() {
    const response = await axiosClient.post('/logout');

    return response;
  },
};
