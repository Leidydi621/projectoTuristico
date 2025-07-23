export type RoleUser = 'turista' | 'admin' | 'guide' | 'admin-cop';

export interface User {
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
