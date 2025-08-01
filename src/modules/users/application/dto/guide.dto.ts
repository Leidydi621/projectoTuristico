import AppError from '@error/AppError';
import formatDetailsErrors from 'utils/formatDetailsErrors';
import { z } from 'zod';

enum VerifiedStatus {
  verified = 'verified',
  pending = 'pending',
}

enum GuideCreateErrorMessages {
  ERROR_LENGTH_MIN = 'Must be at least 2 characters',
  ERROR_LENGTH_MAX = 'Must not exceed 50 characters',
  CONTACT_PHONE_REGEX = 'Contact phone can only contain numbers',
  DESCRIPTION_MAX_LENGTH = 'Description must not exceed 250 characters',
  DESCRIPTION_MIN_LENGTH = 'Description must be at least 10 characters',
  SPOKEN_LANGUAGES_REQUIRED = 'Spoken languages are required',
  VERIFIED_STATUS_INVALID = 'Verified status must be one of the predefined values',
  CONTACT_PHONE_LENGTH = 'Contact phone must be exactly 10 digits',
}

const guideSchema = z.object({
  contactPhone: z.string({
    required_error: GuideCreateErrorMessages.CONTACT_PHONE_REGEX,
  }).max(10, GuideCreateErrorMessages.CONTACT_PHONE_LENGTH)
    .min(10, GuideCreateErrorMessages.CONTACT_PHONE_LENGTH)
    .regex(/^\d+$/, GuideCreateErrorMessages.CONTACT_PHONE_REGEX),
  description: z
    .string().min(10, GuideCreateErrorMessages.DESCRIPTION_MIN_LENGTH)
    .max(250, GuideCreateErrorMessages.DESCRIPTION_MAX_LENGTH)
    .regex(
      /^[a-zA-Z0-9\s.,;:¡!¿?'"()\-áéíóúÁÉÍÓÚñÑüÜ]*$/,
      'Caracteres especiales no permitidos',
    ),
  spokenLanguages: z.array(z.string({
    required_error: GuideCreateErrorMessages.SPOKEN_LANGUAGES_REQUIRED,
  })),
  verifiedStatus: z.nativeEnum(VerifiedStatus).optional().default(VerifiedStatus.pending),
  averageRating: z.number().optional().default(5),
  totalReviews: z.number().optional().default(0),
  isAvailable: z.boolean().optional().default(true),
  id: z.string().optional(),
});

export type GuideDto = z.infer<typeof guideSchema>;

export function guideDto(input: any): GuideDto {
  const { success, data, error } = guideSchema.safeParse(input)
  if (!success) throw new AppError("Guide data is invalid", 400, formatDetailsErrors(error.errors))
  return data
}

export function guidePartialDto(input: any): Partial<GuideDto> {
  const { success, data, error } = guideSchema.partial().safeParse(input)
  if (!success) throw new AppError("Guide data is invalid", 400, formatDetailsErrors(error.errors))
  return data
}
