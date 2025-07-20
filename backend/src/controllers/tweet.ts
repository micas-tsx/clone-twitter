import type { Response } from "express";
import type { ExtendedRequest } from "../types/extended-request";
import { addTweetSchema } from "../schemas/add-tweet";
import { z } from "zod";
import { createTweet, findTweet } from "../services/tweet";

export const addTweet = async (req:ExtendedRequest,res: Response) => {
  // validar os dados enviado
  const safeData = addTweetSchema.safeParse(req.body)
  
  if(!safeData.success) {
    return res.json({ error: z.treeifyError(safeData.error) })
  }
  
  // verificar se é uma resposta
  if(safeData.data.answer) {
    const hasAnswerTweet = await findTweet(parseInt(safeData.data.answer))
    if(!hasAnswerTweet) {
      return res.json({ error: 'Tweett original inexistente' })
    }
  }

  // criar o tweet
  const newTweet = await createTweet(
    req.userSlug as string,
    safeData.data.body,
    safeData.data.answer ? parseInt(safeData.data.answer) :  0
  )

  // adicionar o hastag ao trend


  // retorna o tweet criado
  res.status(201).json({newTweet})
}