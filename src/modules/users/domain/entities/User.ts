export type RoleUser = 'turista' | 'admin' | 'guide' | 'admin-cop';

export interface IUser {
  firstName: string;
  lastName: string;
  secondLastName: string;
  fotoUrlPerfil: string;
  email: string;
  role?: RoleUser;
  status?: boolean;
  secondName?: string;
  id?: string;
}

/**
 * User class represents a user entity.
 * ...
 * @property {RoleUser} [role] - The role of the user, which can be "turista", "admin", "guide", or "admin-cop".
 * @property {boolean} [status] - The status of the user, indicating whether the user is active or not. Defaults to true.
 * @property {string} [secondName] - The second name of the user, if applicable.
 * @property {string} [id] - The unique identifier of the user, if available.
 * ...
 */
export default class User implements IUser {
  protected constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly secondLastName: string,
    public readonly fotoUrlPerfil: string,
    public readonly email: string,
    public readonly role: RoleUser = 'turista',
    public readonly status: boolean = true,
    public readonly secondName?: string,
    public readonly id?: string,
  ) {}

  static create(userData: Omit<IUser, 'id'>): User {
    return new User(
      userData.firstName,
      userData.lastName,
      userData.secondLastName,
      userData.fotoUrlPerfil,
      userData.email,
      userData.role ?? 'turista',
      userData.status ?? true,
      userData.secondName,
    );
  }

  static fromPersistence(data: IUser): User {
    return new User(
      data.firstName,
      data.lastName,
      data.secondLastName,
      data.fotoUrlPerfil,
      data.email,
      data.role ?? 'turista',
      data.status ?? true,
      data.secondName,
      data.id,
    );
  }
}
