import AppError from "@error/AppError"
import bcrypt from "bcrypt"

const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10)
}

const comparePassword = async (password: string, passwordHash: string) => {
  if (!password || !(await bcrypt.compare(password, passwordHash)))
    throw new AppError("email or password invalid", 400)
}

export {
  hashPassword,
  comparePassword
}