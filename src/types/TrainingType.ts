export const TRAINING_TYPES = [
  'No-Gi',
  'Gi',
  'Open Mat',
  'Sparring',
  'Wrestling',
  'Judo',
  'Drilling',
  'Conditioning',
] as const;

export type TrainingType = typeof TRAINING_TYPES[number];
