export type VerifiedStatus = 'verified' | 'pending';

export interface IGuide {
  contactPhone: string;
  description: string;
  spokenLanguages: string[];
  verifiedStatus?: VerifiedStatus;
  averageRating?: number;
  totalReviews?: number;
  isAvailable?: boolean;
  id?: string;
}
/**
 * Guide class represents a guide entity.
 * @property {string} contactPhone - The contact phone number of the guide.
 * @property {string} description - A brief description of the guide.
 * @property {string[]} spokenLanguages - An array of languages spoken by the guide.
 * @property {VerifiedStatus} [verifiedStatus] - The verification status of the guide, which can be "verified" or "pending".
 * @property {number} [averageRating] - The average rating of the guide based on reviews.
 * @property {number} [totalReviews] - The total number of reviews received by the guide.
 * @property {boolean} [isAvailable] - Indicates whether the guide is currently available for bookings.
 * @property {string} [id] - The unique identifier of the guide, if available.
 */

export default class Guide implements IGuide {
  protected constructor(
    public readonly contactPhone: string,
    public readonly description: string,
    public readonly spokenLanguages: string[],
    public readonly verifiedStatus: VerifiedStatus = 'pending',
    public readonly averageRating: number = 0,
    public readonly totalReviews: number = 0,
    public readonly isAvailable: boolean = true,
    public readonly id?: string,
  ) {}

  static create(guideData: Omit<IGuide, 'id'>): Guide {
    return new Guide(
      guideData.contactPhone,
      guideData.description,
      guideData.spokenLanguages,
      guideData.verifiedStatus,
      guideData.averageRating,
      guideData.totalReviews,
      guideData.isAvailable,
    );
  }

  static fromPersistence(data: IGuide): Guide {
    return new Guide(
      data.contactPhone,
      data.description,
      data.spokenLanguages,
      data.verifiedStatus,
      data.averageRating,
      data.totalReviews,
      data.isAvailable,
      data.id,
    );
  }
}
