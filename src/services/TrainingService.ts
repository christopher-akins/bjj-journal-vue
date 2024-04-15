import axiosClient from '@/services/CreateAxiosClient';
import { Training } from '@/types/Training';

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
