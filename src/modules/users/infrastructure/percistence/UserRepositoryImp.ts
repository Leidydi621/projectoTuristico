import Guide from '@modules/users/domain/entities/Guide';
import User from '@modules/users/domain/entities/User';
import IUserRepository from '@modules/users/domain/port/out/IUserRespository';
import { models } from '@share/db/sequelize/setup.db';

export default class UserRepositoryImp implements IUserRepository {
  constructor() { }
  
  getGideUserById(id: string): Promise<Guide | null> {
    return models.Guide.findOne({ where: { userId: id } })
      .then(result => result ? Guide.fromPersistence(result.toJSON()) : null);
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
