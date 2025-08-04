import { User } from '../../core';
import { Prisma, User as UserDb } from '../../../generated/prisma';

export class UserConverter {
  static fromDb(user: UserDb): User {
    return {
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  static toDb(user: User): Prisma.UserCreateInput {
    const { name, email, password } = user;
    return { name, email, password };
  }
}
