import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const autheticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await autheticateUser.execute({
      email,
      password,
    });

    // @ts-expect-error ignorar problema do password como obrigatorio e tirar ele
    delete user.password;

    return response.json({ user, token });
  }
}