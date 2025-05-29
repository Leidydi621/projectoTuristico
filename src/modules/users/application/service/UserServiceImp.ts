import AppError from '@error/AppError';
import Guide from '@modules/users/domain/entities/Guide';
import User from '@modules/users/domain/entities/User';
import IUserService from '@modules/users/domain/port/in/IUserService';
import IUserRepository from '@modules/users/domain/port/out/IUserRespository';

export default class UserServiceImp implements IUserService {
  constructor(public readonly userRepository: IUserRepository) {}
  
  async getUserWhitGuide(id: string): Promise<User & { guide?: Guide }> {
    const user = await this.userRepository.findUserById(id);
    if (!(user && user.id)) throw new AppError('User not found', 404);
    const guide = await this.userRepository.getGideUserById(user.id);
    if (!guide) throw new AppError('Guide not found', 404);
    return { ...user, guide }; 
  }
  
  async createGuide(idUser: string,guideData: Omit<Guide, 'id'>): Promise<Guide> {
    if (!(await this.userRepository.findUserById(idUser)))
      throw new AppError('User not found', 404);
    const guide = Guide.create(guideData);
    return this.userRepository.createGuide(idUser, guide);
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    if (await this.userRepository.findUserByEmail(userData.email))
      throw new AppError('User already exists in system', 409);
    const user = User.create(userData);
    return await this.userRepository.createUser(user);
  }
}
