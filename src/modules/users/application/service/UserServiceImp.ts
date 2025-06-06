import AppError from '@error/AppError';
import Guide from '@modules/users/domain/entities/Guide';
import User from '@modules/users/domain/entities/User';
import IUserService from '@modules/users/domain/port/in/IUserService';
import IUserRepository from '@modules/users/domain/port/out/IUserRespository';

export default class UserServiceImp implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getUser(id: string): Promise<User & { guide?: Guide }> {
    const user = await this.userRepository.findUserById(id);
    if (!user?.id) throw new AppError('User not found', 404);

    const guide = await this.userRepository.getGideUserById(user.id);
    return { ...user, guide: guide ?? undefined };
  }

  async createGuide(idUser: string,guideData: Omit<Guide, 'id'>,): Promise<Guide> {
    const user = await this.userRepository.findUserById(idUser);
    if (!user) throw new AppError('User not found', 404);

    const existingGuide = await this.userRepository.getGideUserById(idUser);
    if (existingGuide) throw new AppError('User already has a guide', 409);

    await this.userRepository.updateUser(idUser, { ...user, role: 'guide' });
    const guide = Guide.create(guideData);

    return this.userRepository.createGuide(idUser, guide);
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const existingUser = await this.userRepository.findUserByEmail(
      userData.email,
    );
    if (existingUser) throw new AppError('User already exists in system', 409);

    const user = User.create(userData);
    return this.userRepository.createUser(user);
  }
}
