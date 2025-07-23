import { User } from "../../entities/User";


export default interface IUserService {
  createUser(userData: User): Promise<User>;
}
