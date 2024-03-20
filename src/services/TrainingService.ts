import axios from 'axios';
import { Training } from '@/types/Training';

const axiosClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/christopher-akins/bjj-journal-vue',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async fetchAllTrainings(): Promise<Training[]> {
    const response = await axiosClient.get<Training[]>('/trainings');
    const { data } = response;

    return data;
  },

  async fetchSingleTraining(id: string): Promise<Training> {
    const endpoint = `/trainings/${id}`;

    const response = await axiosClient.get<Training>(endpoint);
    const { data } = response;

    return data;
  },
};
