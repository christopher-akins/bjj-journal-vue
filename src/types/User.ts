import { BeltRank } from './BeltRank';

export interface User {
  id: number,
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  beltRank: BeltRank,
  stripeCount: number,
}

// export interface UserWithToken {
//   user: User,
//   token: string,
// }
