import Guide, { IGuide } from '../../entities/Guide';
import User from '../../entities/User';

export default interface IUserService {
  createUser(userData: Omit<User, 'id' | 'status' | 'role'>): Promise<User>;
  createGuide(idUse: string, guideData: IGuide): Promise<Guide>;
  getUser(id: string):Promise<User & { guide?: Guide }>;

}
