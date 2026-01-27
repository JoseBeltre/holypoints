import * as z from 'zod'

export const UserSchema = z.object({
  firstName: z.string()
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .refine(name => /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(name),
      'El apellido solo debe contener letras y espacios'),
  lastName: z.string()
    .min(3, 'El apellido debe tener al menos 3 caracteres')
    .refine(name => /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(name),
      'El apellido solo debe contener letras y espacios'),
  email: z.email('Debes ingresar un correo eletrónico válido').optional(),
  photoUrl: z.string().optional(),
  createdBy: z.string(),
  address: z.string('Ingresa una dirección válida').optional(),
  phoneNumber: z.string('Ingresa un número de telefono válido')
    .refine((name) => /^\d{10,11}$/.test(name), 'El número telefónico debe contener entre 10 y 11 digitos').optional(),
  birthDate: z.string().optional()
})

export function validateUserSchema(input: object) {
  return UserSchema.parse(input)
}