import { userDto } from '@modules/users/application/dto/user.dto';
import IUserService from '@modules/users/domain/port/in/IUserService';
import { Request, Response } from 'express';
import response from 'utils/response';

export default class UserController {

  constructor(private readonly userServices: IUserService) { }

  createUser = async ({ body }: Request, res: Response) => {
    const input = userDto(body)
    const user = await this.userServices.createUser(input);
    response(res, 200, user)
  };


}
