import { User } from '../../core';
import { Prisma, User as UserDb } from '../../../generated/prisma';

export class UserConverter {
  static fromDb(user: UserDb): User {
    return new User({
      id: user.id.toString(),
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      deletedAt: user.deleted_at,
    });
  }

  static toDb(user: User): Prisma.UserCreateInput {
    const { name, email, password, createdAt, updatedAt, deletedAt } = user;
    return {
      name,
      email,
      password,
      created_at: createdAt,
      updated_at: updatedAt,
      deleted_at: deletedAt,
    };
  }
}
