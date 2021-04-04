/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable spaced-comment */

import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createuser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createuser.execute({
      name: 'John Doe',
      email: 'varner@skeel.com.br',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'varner@skeel.com.br',
      password: '123456',
    });
    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });
});
