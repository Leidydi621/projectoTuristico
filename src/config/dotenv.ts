import AppError from '@error/AppError';
import { AppErrorMsg } from '@error/AppErrorMsg';
import dotenv from 'dotenv';
dotenv.config();

/**
 * @description Carga las variables de entorno desde el archivo .env y verifica su existencia.
 * @throws {AppError} Si alguna variable de entorno requerida no está definida.
 */

const dbUser = process.env['DB_USER']!;
const dbPassword = process.env['DB_PASSWORD']!;
const dbHost = process.env['DB_HOST']!;
const dbPort = process.env['DB_PORT']!;
const dbName = process.env['DB_NAME']!;
const dbDialect = process.env['DB_DIALECT']!;
const portServer = process.env['SERVER_PORT']!;
const secretToken = process.env["JWT_SECRET"]!;
const nodeEnv = process.env["NODE_ENV"]!;

if (
  !dbUser ||
  !dbPassword ||
  !dbHost ||
  !dbPort ||
  !dbName ||
  !dbDialect ||
  !portServer ||
  !secretToken ||
  !nodeEnv
) {
  throw new AppError(AppErrorMsg.CONFIG_ENV_NOT_FOUND_MSG, 500, true);
}

export { dbUser, dbPassword, dbHost, dbPort, dbName, dbDialect, portServer, secretToken, nodeEnv };
