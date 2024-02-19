import axios from 'axios';
import { Training } from '@/types/Training';

const axiosClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/christopher-akins/bjj-journal-vue',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  fetchAllTrainings(): Promise<Training[]> {
    return axiosClient.get('/trainings');
  },

  fetchSingleTraining(id: string): Promise<Training> {
    const endpoint = `/trainings/${id}`;
    return axiosClient.get(endpoint);
  },
}
