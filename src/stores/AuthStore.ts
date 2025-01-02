import { defineStore } from 'pinia';

interface AuthState {
  isLoggedIn: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isLoggedIn: false,
  }),
  actions: {
    setAuthUser() {
      this.isLoggedIn = true;
    },
    clearAuthUser() {
      this.isLoggedIn = false;
    },
  },
});
