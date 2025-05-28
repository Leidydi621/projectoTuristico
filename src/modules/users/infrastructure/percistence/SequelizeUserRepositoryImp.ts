import User from '@modules/users/domain/entities/User';
import IUserRepository from '@modules/users/domain/port/out/IUserRespository';
import { models } from '@share/db/sequelize/setup.db';

export default class SequelizeUserRepositoryImp implements IUserRepository {
  constructor() {}
  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const result = await models.User.create(userData);
    return User.fromPersistence(result.toJSON());
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const result = await models.User.findOne({ where: { email } });
    return result ? User.fromPersistence(result.toJSON()) : null;
  }
}
