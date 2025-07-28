import AppError from '@error/AppError';
import { AppErrorMsg } from '@error/AppErrorMsg';
import { NextFunction, Request, Response } from 'express';
import errorResponse from 'utils/errorResponse';

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    errorResponse(res, err.code, err.message, err.details)
  }
  else {
    console.error(err)
    errorResponse(res, 500, AppErrorMsg.INTERNAL_SERVER_ERROR_MSG)
  }
}

