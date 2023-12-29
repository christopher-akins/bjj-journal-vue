import { defineStore } from 'pinia';
import TrainingService from '../services/TrainingService';

export const useTrainingStore = defineStore('TrainingStore', {
  state: () => ({
    trainingList: [],
    training: {},
  }),

  actions: {
    addTraining(entry) {
      this.trainingList.push(entry);
    },

    deleteTraining(id) {
      this.trainingList = this.trainingList.filter((entry) => {
        return entry.id !== id;
      });
    },

    fetchAllTrainings() {
      TrainingService.fetchAllTrainings()
        .then((response) => {
          // this is where the state is mutated
          this.trainingList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
});
