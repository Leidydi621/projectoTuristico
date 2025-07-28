class AppError extends Error {
  public readonly code: number;
  public readonly details: any;
  /**
   * @param message - Mensaje de error legible para humanos.
   * @param details : objeto con información extra del error op
   * @param errorCode - Código de error personalizado opcional para seguimiento interno.
   */
  constructor(
    message: string,
    code: number,
    details?: any,

  ) {
    super(message);
    this.code = code;
    this.details = details
  }
}

export default AppError;
