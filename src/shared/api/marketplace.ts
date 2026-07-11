import axios, { AxiosInstance } from 'axios';

export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefresh = false;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://192.168.100.8:3333',
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
