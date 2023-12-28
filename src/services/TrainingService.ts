import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/christopher-akins/bjj-journal-vue',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  fetchAllTrainings() {
    return axiosClient.get('/trainings');
  },

  fetchSingleTraining(id: string) {
    const endpoint = `/trainings/${id}`;
    return axiosClient.get(endpoint);
  },
}
