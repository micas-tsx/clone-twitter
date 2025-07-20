import type { Response } from "express";
import type { ExtendedRequest } from "../types/extended-request";
import { findUserBySlug, getUserFollowersCount, getUserFollowingCount, getUserTweetCount } from "../services/user";

export const getUser = async(req: ExtendedRequest, res: Response) => {
  const { slug } = req.params

  const user = await findUserBySlug(slug)
  if(!user) return res.json({ error: 'Usuário inexistente' })

  const followingCount = await getUserFollowingCount(user.slug)
  const followersCount = await getUserFollowersCount(user.slug)
  const tweetCount = await getUserTweetCount(user.slug)
  
  res.json({ user, followersCount, followingCount, tweetCount })
}

