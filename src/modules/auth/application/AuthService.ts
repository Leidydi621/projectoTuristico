import AppError from "@error/AppError";
import IUserPublicService from "@modules/users/domain/port/in/IUserPublicService";
import { comparePassword } from "utils/passwordHashing";

export default class AuthService {

  constructor(private readonly UserService: IUserPublicService) { }

  login = async (email: string = "", password: string = "") => {
    const user = await this.UserService.findUserByEmail(email)
    if (!user) throw new AppError("email or password invalid", 400)
    await comparePassword(password, user.password)

    return { id: user.id, role: user.role, }
  }
} 