import type { Response } from "express";
import type { ExtendedRequest } from "../types/extended-request";
import { addTweetSchema } from "../schemas/add-tweet";
import { z } from "zod";
import { checkIfTweetIsLikedByUser, createTweet, findAnswersFromTweet, findTweet, likeTweet, unlikeTweet } from "../services/tweet";
import { addHashtag } from "../services/trend";

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
  const hashtags = safeData.data.body.match(/#[a-zA-Z0-9_]+/g)  
  if(hashtags) {
    for(let hashtag of hashtags) {
      if(hashtag.length >= 2) {
        await addHashtag(hashtag)
      }
    }
  }
  // retorna o tweet criado
  res.status(201).json({
    message: 'tweet criado com sucesso', 
    tweet: newTweet 
  })
}

export const getTweet = async (req: ExtendedRequest, res: Response) => {
  const { id } = req.params

  const tweet = await findTweet(parseInt(id))
  if(!tweet) return res.json({ error: 'Tweet inexistente' })

  res.json({ tweet })
}

export const getAnswers = async (req: ExtendedRequest, res: Response) => {
  const { id } = req.params

  const answers = await findAnswersFromTweet(parseInt(id))

  res.json({ answers })
} 

export const likeToggle = async (req: ExtendedRequest, res: Response) => {
  const { id } = req.params

  const liked = await checkIfTweetIsLikedByUser(
    req.userSlug as string,
    parseInt(id)
  )

  if(liked) {
    //unliked
    unlikeTweet(
      req.userSlug as string,
      parseInt(id)
    )
  } else {
    // like
    likeTweet(
      req.userSlug as string,
      parseInt(id)
    )
  }

  res.json({})
}