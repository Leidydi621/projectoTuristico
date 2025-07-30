import AppError from "@error/AppError";
import { Guide } from "@modules/users/domain/entities/Guide";
import { User } from "@modules/users/domain/entities/User";
import IUserService from "@modules/users/domain/port/in/IUserService";
import IUserRepository from "@modules/users/domain/port/out/IUserRespository";
import { hashPassword } from "utils/passwordHashing";


export default class UserServiceImp implements IUserService {

  constructor(private readonly userRepository: IUserRepository) { }

  searchGuides = async (page: number = 1, limit: number = 10, name?: string, minRating?: number, languages?: string[], verified?: boolean): Promise<{ guides: Guide[]; total: number; }> => {
    return await this.userRepository.searchGuides(page, limit, name, minRating, languages, verified)
  }

  createUser = async (userData: User): Promise<void> => {
    const userDb = await this.userRepository.findUserByEmail(userData.email);
    if (userDb) throw new AppError('User already exists', 409);
    await this.userRepository.createUser({ ...userData, password: await hashPassword(userData.password) });
  };

  createGuide = async (guideData: { user: User, gide: Guide }): Promise<void> => {
    const userDb = await this.userRepository.findUserByEmail(guideData.user.email);
    if (userDb) throw new AppError('User already exists', 409);
    await this.userRepository.createGuide(guideData);
  };

  updateUser = async (id: string, userData: Partial<User>): Promise<void> => {
    return await this.userRepository.updateUser(id, userData)
  };

  updateGuide = async (id: string, guideData: Partial<Guide>): Promise<void> => {
    return await this.userRepository.updateGuide(id, guideData)
  };


}
