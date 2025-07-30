import { nodeEnv } from "@config/dotenv";
import AuhtService from "@modules/auth/application/AuthService";
import { Request, Response } from "express";
import { generateToken } from "utils/jwt.utils";
import { responseWithClearCookie, responseWithCookie } from "utils/response";

export default class AuthController {
  private createAccessToken: (payload: any) => string;
  private createRefreshToken: (payload: any) => string;

  constructor(private readonly authService: AuhtService) {
    this.createAccessToken = generateToken({ expiresIn: 60 * 60 * 1000 })
    this.createRefreshToken = generateToken({ expiresIn: 60 * 60 * 1000 * 24 })
  }

  login = async ({ body }: Request, res: Response) => {
    const { email, password } = body
    const payload = await this.authService.login(email, password)
    const cookies = [
      {
        value: this.createAccessToken(payload),
        name: "accessToken",
        options: {
          httpOnly: true,
          maxAge: 60 * 60 * 1000,
          secure: nodeEnv === "production"
        }
      },
      {
        value: this.createRefreshToken(payload),
        name: "refreshToken",
        options: {
          httpOnly: true,
          maxAge: 60 * 60 * 1000 * 24,
          secure: nodeEnv === "production"
        }
      }
    ]
    responseWithCookie(res, { cookies })
  }

  logout = async (_req: Request, res: Response) => {
    const cookiesName = ['accessToken', 'refreshToken']
    responseWithClearCookie(res, cookiesName);
  }

  refreshToken = async (req: Request, res: Response) => {
    const { user: { id, role } } = req
    const cookies = [{
      name: "accessToken",
      value: this.createAccessToken({ id, role }),
      options: {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        secure: nodeEnv === "production"
      }
    }]
    responseWithCookie(res, { cookies })
  }
}
