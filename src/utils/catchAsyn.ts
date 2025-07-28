import { NextFunction, Request, Response } from "express"

export default function catchAsync(fun: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    fun(req, res).catch((err: Error) => next(err))
  }
}
