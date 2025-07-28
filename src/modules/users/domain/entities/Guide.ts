
export type VerifiedStatus = 'verified' | 'pending';

export interface Guide {
  description: string;
  spokenLanguages: string[];
  contactPhone: string;
  verifiedStatus?: VerifiedStatus;
  averageRating?: number;
  totalReviews?: number;
  isAvailable?: boolean;
  id?: string;
}

