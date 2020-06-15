import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUserRepository';

import UsersRepository from '@modules/users/infra/typeorm/repositories/usersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);