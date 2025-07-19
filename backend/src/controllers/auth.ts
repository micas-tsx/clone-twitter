import type { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";
import { findUserByEmail, findUserBySlug } from "../services/user";
import { z } from 'zod'
import slug from "slug";

export const signup: RequestHandler = async (req,res) => {
  // validar os dados recebidos
  const safeData = signupSchema.safeParse(req.body)

  if(!safeData.success) {
    return res.json({ error: z.treeifyError(safeData.error) })
  }
  // varificar email
  const hasEmail = await findUserByEmail(safeData.data.email) 
    if(hasEmail) {
      return res.json({ error: "Email ja esxistente" })
    }

  // verificar slug
    let genSlug = true
    let userSlug = slug(safeData.data.name)
    while(genSlug) {
      const hasSlug = await findUserBySlug(userSlug)
      if(hasSlug) {
        let slugSuffix = Math.floor(Math.random() * 999999).toString()
        userSlug = slug(safeData.data.name + slugSuffix) 
      } else {
        genSlug = false
      }
    }

  // gerar hash de senha
  // criar o user
  // criar o token
  // retornar o resultado ( tokem, user )
  
  res.json({})
}