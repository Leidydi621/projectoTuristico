import { User } from "../../entities/User";
import { Guide } from "../../entities/Guide";


export default interface IUserService {
  createUser(userData: User): Promise<User>;
  createGuide(guideData: { user: User, gide: Guide }): Promise<Guide>;

  updateUser(id: string, userData: Partial<User>): Promise<void>;
  updateGuide(id: string, guideData: Partial<Guide>): Promise<void>;

  searchGuides(page: number, limit: number, name?: string, minRating?: number, languages?: string[], verified?: boolean): Promise<{ guides: Guide[]; total: number }>;
}

