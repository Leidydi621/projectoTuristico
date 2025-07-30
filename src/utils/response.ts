import { Response } from "express";

interface cookie {
  name: string,
  value: any,
  options: any
}

interface details {
  data?: any,
  status?: number,
  cookies: cookie[]
}

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

function setCookies(res: Response, cookies: cookie[]) {
  cookies.forEach(({ name, value, options }) => res.cookie(name, value, options))
}

export function clearCookies(res: Response, cookiesName: string[] = []) {
  cookiesName.forEach(name => res.clearCookie(name))
}

export function responseWithCookie(res: Response, { data = null, status = 200, cookies = [] }: details) {
  setCookies(res, cookies)
  response(res, status, data)
}

export function responseWithClearCookie(res: Response, cookiesName: string[] = []) {
  clearCookies(res, cookiesName)
  response(res)
}

