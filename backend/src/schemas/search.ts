import z from "zod";

export const serachSchema = z.object({
  q: z.string({ message: 'Preencha a busca' }).min(3, 'Mínimo de 3 caracteres'),
  page: z.coerce.number().min(0).optional()
})