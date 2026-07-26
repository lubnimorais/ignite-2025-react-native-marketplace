import { z as zod } from 'zod';

export const loginSchema = zod.object({
  email: zod.email('E-mail inválido.'),
  password: zod
    .string('Senha é obrigatória.')
    .min(6, 'A senha deve conter pelo menos 6 caracteres.'),
});

export type ILoginFormData = zod.infer<typeof loginSchema>;
