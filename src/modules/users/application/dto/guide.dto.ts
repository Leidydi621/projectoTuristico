import AppError from '@error/AppError';
import formatDetailsErrors from 'utils/formatDetailsErrors';
import { z } from 'zod';

enum VerifiedStatus {
  verified = 'verified',
  pending = 'pending',
}

const guideSchema = z.object({
  contactPhone: z.string({
    required_error: "El número de contacto es obligatorio",
  }).regex(/^\d+$/, 'Solo números permitidos'),
  description: z
    .string()
    .max(250, 'Máximo 250 caracteres')
    .regex(
      /^[a-zA-Z0-9\s.,;:¡!¿?'"()\-áéíóúÁÉÍÓÚñÑüÜ]*$/,
      'Caracteres especiales no permitidos',
    ),
  spokenLanguages: z.array(z.string({
    required_error: "El campo de idiomas hablados es obligatorio",
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
  if (!success) throw new AppError("User Data is Invalid", 400, formatDetailsErrors(error.errors))
  return data
}

export function guidePartialDto(input: any): Partial<GuideDto> {
  const { success, data, error } = guideSchema.partial().safeParse(input)
  if (!success) throw new AppError("User Data is Invalid", 400, formatDetailsErrors(error.errors))
  return data
}
