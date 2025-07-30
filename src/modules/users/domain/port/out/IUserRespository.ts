import { Guide } from "../../entities/Guide";
import { User } from "../../entities/User";

export default interface IUserRepository {
  createUser(userData: User): Promise<void>;
  createGuide(guideData: { user: User, gide: Guide }): Promise<void>;

  findUserByEmail(email: string): Promise<User | null>;

  updateUser(id: string, userData: Partial<User>): Promise<void>;
  updateGuide(id: string, guideData: Partial<Guide>): Promise<void>;

  searchGuides(page: number, limit: number, name?: string, minRating?: number, languages?: string[], verified?: boolean): Promise<{ guides: Guide[]; total: number }>;
}
