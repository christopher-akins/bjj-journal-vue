import { TrainingType } from './types/TrainingType';
import { BeltRank } from './types/BeltRank';

interface Trainings {
  id: number,
  partnerName: string,
  technique: string,
  trainingDate: Date,
  rollingPartners: string[],
  trainingType: TrainingType,
  partnerBeltRank: BeltRank,
  notes: string,
  preTrainingGoals: string,
  postTrainingGoals: string,
}
