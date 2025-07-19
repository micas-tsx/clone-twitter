import type { RequestHandler } from "express";
import { signupSchema } from "../schemas/signup";
import { findUserByEmail, findUserBySlug, createUser } from "../services/user";
import { z } from 'zod'
import slug from "slug";
import { hash } from "bcrypt-ts";

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
  const hashPassword = await hash(safeData.data.password, 10)

  // criar o user
  const newUser = await createUser({
    slug: userSlug,
    name: safeData.data.name,
    email: safeData.data.email,
    password: hashPassword
  })

  // criar o token
  const token = ''

  // retornar o resultado ( tokem, user )
  res.status(201).json({
    token,
    user: {
      name: newUser.name,
      slug: newUser.slug,
      avatar: newUser.avatar,
    }
  })
}