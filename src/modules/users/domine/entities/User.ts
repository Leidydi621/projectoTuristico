export type roleUser = "turista" | "admin" | "guide" | "admin-cop";
export type statusUser = "activo" | "inactivo";
interface IUser {
  firstName: string;
  lastName: string;
  secondLastName: string;
  fotoUrlPerfil: string;
  email: string;
  status: statusUser;
  role: roleUser;
  secondName?: string;
  id?: string;
}

/**
 * User class represents a user entity.
 * It provides methods to create a new user or to create a user from persisted data.
 * The class implements the IUser interface.
 * @property {string} firstName - The first name of the user.
 * @property {string} lastName - The last name of the user.
 * @property {string} secondLastName - The second last name of the user.
 * @property {string} fotoUrlPerfil - The profile picture URL of the user.
 * @property {string} email - The email address of the user.
 * @property {statusUser} status - The status of the user ("activo" | "inactivo").
 * @property {roleUser} role - The role of the user ("turista" | "admin" | "guide" | "admin-cop").
 * @property {string} [secondName] - The second name of the user (optional).
 * @property {string} [id] - The unique identifier of the user (optional).
 */

export default class User implements IUser {
  protected constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly secondLastName: string,
    public readonly fotoUrlPerfil: string,
    public readonly email: string,
    public readonly status: statusUser,
    public readonly role: roleUser,
    public readonly secondName?: string,
    public readonly id?: string
  ) {}

  static create(userData: Omit<IUser, "id">): User {
    return new User(
      userData.firstName,
      userData.lastName,
      userData.secondLastName,
      userData.fotoUrlPerfil,
      userData.email,
      userData.status,
      userData.role,
      userData.secondName
    );
  }

  static fromPersistence(data: IUser): User {
    return new User(
      data.firstName,
      data.lastName,
      data.secondLastName,
      data.fotoUrlPerfil,
      data.email,
      data.status,
      data.role,
      data.secondName,
      data.id
    );
  }
}
