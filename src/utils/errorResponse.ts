import { Response } from "express";

/**
 * @param res Reponse de express
 * @param code Número que representa el código de error HTTP
 * @param message Mensaje descriptivo de error
 * @param details Objeto con información adicional 
 */
export default function errorResponse(res: Response, code: number, message: string, details: any = null) {
  res.status(code).json({
    error: true,
    message,
    details
  })
}
