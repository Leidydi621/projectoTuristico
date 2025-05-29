import { parseGuideDTO } from '@modules/users/application/dto/guide.dto';
import { parseUserDto } from '@modules/users/application/dto/user.dto';
import IUserService from '@modules/users/domain/port/in/IUserService';
import { NextFunction, Request, Response } from 'express';

export default class UserController {
  constructor(private readonly userServices: IUserService) {}

  createUser = async ({ body }: Request, res: Response, next: NextFunction) => {
    try {
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

  createGuide = async (
    { body, params }: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { idUser } = params;
      const guideDto = parseGuideDTO(body);
      const guide = await this.userServices.createGuide(idUser, guideDto);
      res
        .status(201)
        .json({ data: guide, message: 'Guide created successfully' });
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  getUserWithGuide = async (
    { params }: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = params;
    try {
      const userWithGuide = await this.userServices.getUserWhitGuide(id);
      res.status(200).json({
        message: 'User with guide retrieved successfully',
        data: userWithGuide,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
    throw new Error('Method not implemented.');
  };
}
