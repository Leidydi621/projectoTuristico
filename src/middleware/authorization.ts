import AppError from "@error/AppError";
import { AppErrorMsg } from "@error/AppErrorMsg";
import { NextFunction, Request, Response } from "express"

export default function authorization(roles: string[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { user: { role } } = req;
    if (!roles.includes(role)) throw new AppError(AppErrorMsg.UNAUTHORIZED_MSG, 403);
    next()
  }
}