import router from '@/router';
import { AxiosResponse } from 'axios';
import AuthenticationService from '@/services/AuthenticationService';
import { useAuthStore } from '@/stores/AuthStore';

interface LoginPayload {
  email: string;
  password: string;
}

const authStore = useAuthStore();

export const useAuth = () => {
  async function loginUser(values: LoginPayload) {
    const response: AxiosResponse = await AuthenticationService.loginUser(values);

    if (response.status === 200) {
      authStore.setAuthUser();
      router.push({ name: 'Profile' });
    }
  }

  return {
    loginUser,
  };
};
