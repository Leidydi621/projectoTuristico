import { User } from "../../entities/User"

export default interface IUserPublicService {
  findUserByEmail(email: string): Promise<User | null>
}