import AppError from '@error/AppError';
import { AppErrorMsg } from '@error/AppErrorMsg';
import { Request, Response, NextFunction } from 'express';

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      name: err.name,
      message: err.message,
      isOperational: err.isOperational,
      errorCode: err.errorCode,
    });
  } else {
    return res.status(500).json({
      message: AppErrorMsg.INTERNAL_SERVER_ERROR_MSG,
      isOperational: false,
    });
  }
}
