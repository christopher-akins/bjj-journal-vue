import { BeltRank } from './BeltRank';
import { ClassLevel } from './ClassLevel';
import { TrainingType } from './TrainingType';

export interface Training {
  readonly id: number,
  notes: string,
  preTrainingGoals?: string,
  postTrainingGoals?: string,
  trainingDate: Date,
  trainingDuration: number,
  trainingType: TrainingType,
}

export interface OpenMatTraining extends Training {
  rollingPartners: string[],
  // The next 2 will eventually be a string of submission names
  submissions: string[],
  submissionsByOpponent: string[],
}

export interface ClassTraining extends Training {
  classLevel: ClassLevel,
  instructorName: string,
  partnerName?: string,
  partnerBeltRank?: BeltRank,
  technique: string,
}
