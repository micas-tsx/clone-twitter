import z from "zod";

export const signupSchema = z.object({
  name: z.string({ message: 'Nome é obrigatório' }).min(2, 'Precisa ter 2 ou mais caracteres'),
  email: z.email({ message: 'Email é obrigatório' }),
  password: z.string({ message: 'Senha é obrigatório' }).min(4, 'Precisa ter 4 ou mais caracteres')
})