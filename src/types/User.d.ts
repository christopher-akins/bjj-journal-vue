import { BeltRank } from './BeltRank';

interface User {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  beltRank: BeltRank,
  stripeCount: number,
}
