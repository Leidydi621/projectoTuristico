import { secretToken } from "@config/dotenv";
import jwt from "jsonwebtoken";

const generateToken = (op: Object) => {
  return (payload: any) => jwt.sign(payload, secretToken, op)
}

const verifyToken = (token: string) => {
  return jwt.verify(token, secretToken)
}

export {
  generateToken,
  verifyToken
}