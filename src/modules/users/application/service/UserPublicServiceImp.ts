import { User } from "@modules/users/domain/entities/User";
import IUserPublicService from "@modules/users/domain/port/in/IUserPublicService";
import IUserRepository from "@modules/users/domain/port/out/IUserRespository";


export default class UserPublicServiceImp implements IUserPublicService {

  constructor(private readonly userRepository: IUserRepository) { }

  findUserByEmail = async (email: string): Promise<User | null> => {
    return await this.userRepository.findUserByEmail(email)
  }

}