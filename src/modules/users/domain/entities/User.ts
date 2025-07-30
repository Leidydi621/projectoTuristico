export type RoleUser = 'turista' | 'admin' | 'guide' | 'admin-cop';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  secondLastName?: string;
  fotoUrlPerfil?: string;
  role?: RoleUser;
  status?: boolean;
  secondName?: string;
  id?: string;
}
