import AppError from '@error/AppError';
import { z } from 'zod';

enum VerifiedStatus {
  verified = 'verified',
  pending = 'pending',
}

const guideSchema = z.object({
  contactPhone: z.string({
    required_error:"El número de contacto es obligatorio",
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
  verifiedStatus: z.nativeEnum(VerifiedStatus).optional(),
  averageRating: z.number().optional(),
  totalReviews: z.number().optional(),
  isAvailable: z.boolean().optional(),
  id: z.string().optional(),
});

export type GuideDTO = z.infer<typeof guideSchema>;

export function parseGuideDTO(data: unknown): GuideDTO {
  const result = guideSchema.safeParse(data);
  if (!result.success) {
    const errorMessages = result.error.errors.map(err => err.message).join(', ');
    throw new AppError(`Validation failed: ${errorMessages}`, 400);
  }
  return result.data;
}
