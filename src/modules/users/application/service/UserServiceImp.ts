import AppError from "@error/AppError";
import User from "@modules/users/domain/entities/User";
import IUserService from "@modules/users/domain/port/in/IUserService";
import IUserRepository from "@modules/users/domain/port/out/IUserRespository";


export default class UserServiceImp implements IUserService{

  constructor(public readonly userRepository: IUserRepository) { }
  
  async createUser(userData: Omit<User, "id">): Promise<User> {
    if (await this.userRepository.findUserByEmail(userData.email)) 
      throw new AppError("User already exists in system", 409);
    const user = User.create(userData);
    return  await this.userRepository.createUser(user);
  }

}