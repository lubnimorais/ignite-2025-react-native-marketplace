import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios';
import { useUserStore } from '../store/user-store';

export const baseURL = 'http://192.168.100.8:3333';

export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefresh = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });

    this.setupInterceptors();
  }

  getInstance() {
    return this.instance;
  }

  private setupInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        const userData = await AsyncStorage.getItem('@marketplace:auth');

        if (userData) {
          const {
            state: { token },
          } = JSON.parse(userData);

          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response?.status === 401 &&
          error.response?.data?.message === 'Token inspirado' &&
          !this.isRefresh
        ) {
          this.isRefresh = true;

          try {
            const userData = await AsyncStorage.getItem('@marketplace:auth');

            if (!userData) {
              throw new Error('Usuário não autenticado');
            }

            const {
              state: { refreshToken },
            } = JSON.parse(userData);

            if (!refreshToken) {
              throw new Error('Refresh token não encontrado');
            }

            const response = await this.instance.post('/auth/refresh', {
              refreshToken,
            });

            const tokenUpdated = response.data.token;
            const refreshTokenUpdated = response.data.refreshToken;

            const currentUserData = JSON.parse(userData);

            currentUserData.state.token = tokenUpdated;
            currentUserData.state.refreshToken = refreshTokenUpdated;

            await AsyncStorage.setItem(
              '@marketplace:auth',
              JSON.stringify(currentUserData)
            );

            originalRequest.headers.Authorization = `Bearer ${tokenUpdated}`;

            return this.instance(originalRequest);
          } catch {
            this.unauthorized();

            return Promise.reject(
              new Error('Sessão expirada, faça o login novamente.')
            );
          } finally {
            this.isRefresh = false;
          }
        }

        if (error.response && error.response.data) {
          return Promise.reject(new Error(error.response.data.message));
        } else {
          return Promise.reject(new Error('Falha na requisição.'));
        }
      }
    );
  }

  private async unauthorized() {
    const { logout } = useUserStore.getState();

    delete this.instance.defaults.headers.common.Authorization;

    logout();
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
