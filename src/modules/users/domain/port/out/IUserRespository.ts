import { User } from "../../entities/User";

export default interface IUserRepository {
  createUser(userData: User): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
}