import User from "../../entities/User";

export default interface IUserRepository { 
  createUser(userData: Omit<User, "id">): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
}