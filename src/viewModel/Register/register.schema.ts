import { z as zod } from 'zod';

export const registerSchema = zod
  .object({
    name: zod.string().min(1, 'Nome é obrigatório.'),
    email: zod.email('E-mail inválido.'),
    password: zod
      .string('Senha é obrigatória.')
      .min(6, 'A senha deve conter pelo menos 6 caracteres.'),
    confirmPassword: zod
      .string('Confirmar senha é obrigatória.')
      .min(6, 'A senha deve conter pelo menos 6 caracteres.'),
    avatarUrl: zod.string().optional(),
    phone: zod
      .string()
      .min(1, 'Telefone é obrigatório.')
      .regex(/^\d{11}$/, 'Telefone inválido (DDD + número).'),
  })
  .refine(
    (data) => {
      if (data.password !== data.confirmPassword) {
        return false;
      }
    },
    {
      message: 'As senhas devem ser iguais.',
      path: ['confirmPassword'],
    }
  );

export type IRegisterFormData = zod.infer<typeof registerSchema>;
