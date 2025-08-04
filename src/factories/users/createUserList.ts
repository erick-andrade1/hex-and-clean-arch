import { User, UserListDTO } from '../../core';

export function createUserList(user: User): UserListDTO {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
}
