import AppError from '@error/AppError';
import formatDetailsErrors from 'utils/formatDetailsErrors';
import { z } from 'zod';

export enum UserRole {
  TURISTA = 'turista',
  ADMIND = 'admin',
  GUIDE = 'guide',
  ADMIN_COP = 'admin-cop',
}

export enum UserCreateErrorMessages {
  ERROR_LENGTH_MIN = 'Must be at least 2 characters',
  ERROR_LENGTH_MAX = 'Must not exceed 50 characters',

  FIRST_NAME_REGEX = 'First name can only contain letters and spaces',
  LAST_NAME_REGEX = 'Last name can only contain letters and spaces',
  SECOND_LAST_NAME_REGEX = 'Second last name can only contain letters and spaces',

  FOTO_URL_PERFIL_URL = 'Must be a valid URL',
  FOTO_URL_PERFIL_IMAGE = 'URL must be a valid image',
  FOTO_URL_PERFIL_REGEX = 'URL must not contain spaces or special characters',

  EMAIL = 'Must be a valid email address',
  SECOND_NAME_REGEX = 'Second name can only contain letters and spaces',

  FRIS_NAME_REQUIRED = 'First name is required',
  LAST_NAME_REQUIRED = 'Last name is required',
  SECOND_LAST_NAME_REQUIRED = 'Second last name is required',
  FOTO_URL_PERFIL_REQUIRED = 'Profile photo is required',
  EMAIL_REQUIRED = 'Email is required',
  ROLE_REQUIRED = 'Role is required',

  ROLE_INVALID = 'Role must be one of the predefined values',
}

const userDtoEschema = z.object({
  firstName: z
    .string({
      required_error: UserCreateErrorMessages.FRIS_NAME_REQUIRED,
    })
    .min(2, UserCreateErrorMessages.ERROR_LENGTH_MIN)
    .max(50, UserCreateErrorMessages.ERROR_LENGTH_MAX)
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/,
      UserCreateErrorMessages.FIRST_NAME_REGEX,
    ),
  lastName: z
    .string({
      required_error: UserCreateErrorMessages.LAST_NAME_REQUIRED,
    })
    .min(2, UserCreateErrorMessages.ERROR_LENGTH_MIN)
    .max(50, UserCreateErrorMessages.ERROR_LENGTH_MAX)
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/,
      UserCreateErrorMessages.LAST_NAME_REGEX,
    ),
  secondLastName: z
    .string({
      required_error: UserCreateErrorMessages.SECOND_LAST_NAME_REQUIRED,
    })
    .min(2, UserCreateErrorMessages.ERROR_LENGTH_MIN)
    .max(50, UserCreateErrorMessages.ERROR_LENGTH_MAX)
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/,
      UserCreateErrorMessages.SECOND_LAST_NAME_REGEX,
    ),
  fotoUrlPerfil: z
    .string({
      required_error: UserCreateErrorMessages.FOTO_URL_PERFIL_REQUIRED,
    })
    .url(UserCreateErrorMessages.FOTO_URL_PERFIL_URL)
    .regex(
      /\.(jpg|jpeg|png|gif|bmp|webp)$/i,
      UserCreateErrorMessages.FOTO_URL_PERFIL_IMAGE,
    ),
  email: z
    .string({
      required_error: UserCreateErrorMessages.EMAIL_REQUIRED,
    })
    .email(UserCreateErrorMessages.EMAIL),
  status: z.boolean().default(true),
  role: z
    .nativeEnum(UserRole, {
      invalid_type_error: UserCreateErrorMessages.ROLE_INVALID,
    })
    .default(UserRole.TURISTA),
  secondName: z
    .string()
    .min(2, UserCreateErrorMessages.ERROR_LENGTH_MIN)
    .max(50, UserCreateErrorMessages.ERROR_LENGTH_MAX)
    .regex(
      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]+$/,
      UserCreateErrorMessages.SECOND_NAME_REGEX,
    )
    .optional(),
  id: z.string().optional(),
});

export type UserDto = z.infer<typeof userDtoEschema>;


export function userDto(input: any): UserDto {
  const { success, data, error } = userDtoEschema.safeParse(input)
  if (!success) throw new AppError("User Data is Invalid", 400, formatDetailsErrors(error.errors))
  return data
}

export function userPartialDto(input: any): Partial<UserDto> {
  const { success, data, error } = userDtoEschema.partial().safeParse(input)
  if (!success) throw new AppError("User Data is Invalid", 400, formatDetailsErrors(error.errors))
  return data
}
