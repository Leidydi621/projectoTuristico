import AppError from "@error/AppError";
import { NextFunction, Request, Response } from "express";
import { verifyToken } from "utils/jwt.utils";

declare module 'express-serve-static-core' {
  interface Request {
    [key: string]: any;
  }
}

interface params {
  verifyToken: Function,
  cookieName: string,
  attach: string,
  statusError: number,
}

function authWithCookie({ attach, cookieName, statusError, verifyToken }: params) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const token = req.cookies?.[cookieName];
    if (!token) throw new AppError("Access Unauthorized", statusError)
    req[attach] = verifyToken(token)
    next()
  }
}

export default {
  access: authWithCookie({
    attach: "user",
    cookieName: "accessToken",
    statusError: 401,
    verifyToken: verifyToken
  }),
  refresh: authWithCookie({
    attach: "user",
    cookieName: "refreshToken",
    statusError: 403,
    verifyToken: verifyToken
  }),
}