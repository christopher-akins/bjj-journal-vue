import { BeltRank } from './BeltRank';
import { ClassLevel } from './ClassLevel';
import { TrainingType } from './TrainingType';

interface Training {
  id: number,
  partnerName: string,
  instructorName: string,
  classLevel: ClassLevel,
  classDuration: number,
  technique: string,
  trainingDate: Date,
  rollingPartners: string[],
  trainingType: TrainingType,
  partnerBeltRank: BeltRank,
  notes: string,
  preTrainingGoals: string,
  postTrainingGoals: string,
}
