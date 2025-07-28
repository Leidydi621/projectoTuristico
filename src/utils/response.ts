import { Response } from "express";

/**
 * @param res Reponse de express
 * @param code Numero que representa el código de http correspondiente
 * @param data Información que se enviara al usuario
 */

export default function response(res: Response, code: number = 200, data: any = null) {
  res.status(code).json({
    error: false,
    data
  })
}

