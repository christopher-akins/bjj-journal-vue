import router from '@/router';
import { AxiosResponse } from 'axios';
import AuthenticationService from '@/services/AuthenticationService';

interface LoginPayload {
  email: string;
  password: string;
}

export const useAuth = () => {
  async function loginUser(values: LoginPayload) {
    const response: AxiosResponse = await AuthenticationService.loginUser(values);

    if (response.status === 200) {
      router.push({ name: 'Profile' });
    }
  }

  return {
    loginUser,
  };
};
