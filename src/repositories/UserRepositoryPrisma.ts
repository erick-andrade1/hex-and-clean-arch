import { User, UserRepository } from '../core';
import { UserConverter } from './converters';
import { prisma } from '../externals';

export class UserRepositoryPrisma implements UserRepository {
  async create(user: User): Promise<User> {
    const result = await prisma.user.create({ data: UserConverter.toDb(user) });
    return UserConverter.fromDb(result);
  }

  async findById(id: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: { id },
    });
    return result ? UserConverter.fromDb(result) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await prisma.user.findUnique({
      where: { email },
    });
    return result ? UserConverter.fromDb(result) : null;
  }

  async update(user: User): Promise<User> {
    const result = await prisma.user.update({
      where: { id: user.id },
      data: UserConverter.toDb(user),
    });
    return UserConverter.fromDb(result);
  }

  async delete(id: string): Promise<void> {
    await prisma.user.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });
  }

  async findAll(): Promise<User[]> {
    const result = await prisma.user.findMany();
    return result.map(UserConverter.fromDb);
  }
}
