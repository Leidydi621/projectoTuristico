
import { Guide } from '@modules/users/domain/entities/Guide';
import { User } from '@modules/users/domain/entities/User';
import IUserRepository from '@modules/users/domain/port/out/IUserRespository';
import { models } from '@share/db/sequelize/setup.db';

export default class UserRepositoryImp implements IUserRepository {

  constructor() { }

  async findUserByEmail(email: string): Promise<User | null> {
    return (await models.User.findOne({ where: { email } }))?.dataValues
  }

  async createUser(userData: User): Promise<void> {
    await models.User.create({ ...userData })
  }

  // TODO: IMPLEMENTAR ESTA FUNCION CREATE GUIDE
  createGuide = async (guideData: { user: User; gide: Guide; }): Promise<void> => {
    throw new Error('Method not implemented.');
  }

  findUserByEmailUserByEmail = async (email: string): Promise<User | null> => {
    return (await models.User.findOne({ where: { email } }))?.dataValues
  }

  updateUser = async (id: string, userData: Partial<User>): Promise<void> => {
    (await models.User.update({ ...userData }, { where: { id } }))
  }

  updateGuide = async (id: string, guideData: Partial<Guide>): Promise<void> => {
    (await models.User.update({ ...guideData }, { where: { id } }))
  }

  // TODO: IMPLEMENTAR ESTA FUNCION SEARCH
  searchGuides = async (page: number, limit: number, name?: string, minRating?: number, languages?: string[], verified?: boolean): Promise<{ guides: Guide[]; total: number; }> => {
    throw new Error('Method not implemented.');
  }

}
