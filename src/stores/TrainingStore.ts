import { defineStore } from 'pinia';
import { Training } from '../types/Training';
import TrainingService from '../services/TrainingService';

export const useTrainingStore = defineStore('TrainingStore', {
  state: (): {
    trainingList: Training[],
    training: Training | null,
  } => ({
    trainingList: [],
    training: null,
  }),

  actions: {
    addTraining(entry: Training) {
      this.trainingList.push(entry);
    },

    deleteTraining(id: number) {
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
