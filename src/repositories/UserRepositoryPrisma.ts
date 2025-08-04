import { User, UserRepository } from '../core';
import { UserConverter } from './converters';
import { prisma } from '../externals/db/prisma';

export class UserRepositoryPrisma implements UserRepository {
  async create(user: User): Promise<User> {
    const result = await prisma.user.create({ data: UserConverter.toDb(user) });
    return UserConverter.fromDb(result);
  }

  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }

  findByEmail(email: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }

  update(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
