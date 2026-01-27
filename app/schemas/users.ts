import * as z from 'zod'

const emptyToUndefined = z.string().transform(v => v.trim()).transform(v => (v === '' ? undefined: v))

export const UserSchema = z.object({
  firstName: z
    .string('Ingresa un nombre')
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .refine(name => /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(name),
      'El apellido solo debe contener letras y espacios')
    .trim(),
  lastName: z
    .string('Ingresa un apellido')
    .min(3, 'El apellido debe tener al menos 3 caracteres')
    .refine(name => /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(name),
      'El apellido solo debe contener letras y espacios')
    .trim(),
  birthDate: z.string(),
  createdBy: z
    .string('Falta el ID del usuario registrado')
    .trim(),
  email: emptyToUndefined.pipe(
    z.email('Debes ingresar un correo eletrónico válido')
    .trim()
    .optional()),
  photoUrl: emptyToUndefined.pipe(
    z.string()
    .trim()
    .optional()),
  address: emptyToUndefined.pipe(
    z.string('Ingresa una dirección válida')
    .trim()
    .optional()),
  phoneNumber: emptyToUndefined.pipe(
    z.string('Ingresa un número de telefono válido')
    .trim()
    .refine((name) => /^\d{10,11}$/.test(name), 'El número telefónico debe contener entre 10 y 11 digitos')
    .optional()
    .or(z.literal(''))),
})

export async function validateUserSchema(input: object) {
  return UserSchema.parse(input)
}