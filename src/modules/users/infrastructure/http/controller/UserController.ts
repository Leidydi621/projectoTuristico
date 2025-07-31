import { guideDto } from '@modules/users/application/dto/guide.dto';
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

  createGuide = async ({ body }: Request, res: Response) => {
    const userdata = userDto(body.user);
    const guidedata = guideDto(body.guide);
    const guide = await this.userServices.createGuide({ user: userdata, guide: guidedata });
    response(res, 200, guide);
  };

}
