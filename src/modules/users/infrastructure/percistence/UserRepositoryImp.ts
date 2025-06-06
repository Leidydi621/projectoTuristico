import AppError from '@error/AppError';
import Guide from '@modules/users/domain/entities/Guide';
import User from '@modules/users/domain/entities/User';
import IUserRepository from '@modules/users/domain/port/out/IUserRespository';
import { models } from '@share/db/sequelize/setup.db';

export default class UserRepositoryImp implements IUserRepository {
  constructor() { }
  async updateUser(id: string, userData: Partial<Omit<User, 'id'>>): Promise<User> {
    const result = await models.User.update(userData, { where: { id }, returning: true });
    if (!result[0] || !result[1][0]) 
      throw new AppError('User not found', 404);
    return User.fromPersistence(result[1][0].toJSON());
  }
  
  async getGideUserById(id: string): Promise<Guide | null> {
    const result =  await models.Guide.findOne({ where: { userId: id } })
    return result ? Guide.fromPersistence(result.toJSON()) : null;
  }

  async findUserById(id: string): Promise<User | null> {
    const result = await models.User.findOne({ where: { id } });
    return result ? User.fromPersistence(result.toJSON()) : null;
  }

  async createGuide(idUser: string, guideData: Omit<Guide, 'id'>): Promise<Guide> {
    const result = await models.Guide.create({ ...guideData, userId: idUser })
    return Guide.fromPersistence(result.toJSON()) ;
  }

  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const result = await models.User.create(userData);
    return User.fromPersistence(result.toJSON());
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const result = await models.User.findOne({ where: { email } });
    return result ? User.fromPersistence(result.toJSON()) : null;
  }
}
