import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();
// Rota POST
sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const autheticateUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await autheticateUser.execute({
    email,
    password,
  });

  // @ts-expect-error ignorar problema do password como obrigatorio e tirar ele
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
