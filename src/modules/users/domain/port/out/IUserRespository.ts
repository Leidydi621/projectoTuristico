import Guide from '../../entities/Guide';
import User from '../../entities/User';

export default interface IUserRepository {
  createUser(userData: Omit<User, 'id'>): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
  findUserById(id: string): Promise<User | null>;
  createGuide(idUser: string, guideData: Omit<Guide, 'id'>): Promise<Guide>;
  getGideUserById(id: string): Promise<Guide | null>;
}
