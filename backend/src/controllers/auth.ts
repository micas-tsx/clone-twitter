import type { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";
import z from "zod";

export const signup: RequestHandler = async (req,res) => {
  // validar os dados recebidos
  const safeData = signupSchema.safeParse(req.body)

  if(!safeData.success) {
    return res.json({error: z.treeifyError(safeData.error) })
  }
  // varificar email
  // verificar slug
  // gerar hash de senha
  // criar o user
  // criar o token
  // retornar o resultado ( tokem, user )
  
  res.json({})
}