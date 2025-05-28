import User from "../../entities/User";

export default interface IUserService { 
  createUser(userData: Omit<User, "id" | "status" | "role">): Promise<User>;
}
