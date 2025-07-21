import z from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(2, 'Precisa ter 2 ou mais caracteres').optional(),
  bio: z.string().optional(),
  link: z.url('Precisa ser uma url válida').optional()
})