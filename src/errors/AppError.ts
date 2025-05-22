/**
 * Clase de error personalizada para manejar errores específicos de la aplicación.
 * Extiende la clase Error incorporada y agrega propiedades extra para contexto.
 */
class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly errorCode?: string;

  /**
   * @param message - Mensaje de error legible para humanos.
   * @param isOperational - Verdadero si el error es esperado (por defecto: true).
   * @param errorCode - Código de error personalizado opcional para seguimiento interno.
   */
  constructor(
    message: string,
    statusCode: number,
    isOperational = true,
    stackTrace?: string,
  ) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    if (stackTrace) {
      this.stack = stackTrace;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
