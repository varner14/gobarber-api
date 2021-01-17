import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

// Rota POST
sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const autheticateUser = new AuthenticateUserService();

    const { user, token } = await autheticateUser.execute({
      email,
      password,
    });

    // @ts-expect-error ignorar problema do password como obrigatorio e tirar ele
    delete user.password;

    return response.json({ user, token });
  } catch (err) {
    return response.status(400).json({ Error: err.message });
  }
});

export default sessionsRouter;
