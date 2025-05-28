import { parseUserDto } from '@modules/users/application/dto/user.dto';
import IUserService from '@modules/users/domain/port/in/IUserService';
import { NextFunction, Request, Response } from 'express';

export default class UserController {
  constructor(private readonly userServices: IUserService) {}

  createUser = async ({ body }: Request, res: Response, next: NextFunction) => {
    try {
      console.log('Creating user with body:', body);
      const userDto = parseUserDto(body);
      const user = await this.userServices.createUser(userDto);
      res.status(201).json({
        message: 'User created successfully',
        data: user,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
