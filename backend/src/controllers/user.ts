import type { Response } from "express";
import type { ExtendedRequest } from "../types/extended-request";
import { checkIfFollows, findUserBySlug, follow, getUserFollowersCount, getUserFollowingCount, getUserTweetCount, unfollow } from "../services/user";
import { userTweetsSchema } from "../schemas/user-tweets";
import z from "zod";
import { findTweetsByUser } from "../services/tweet";

export const getUser = async(req: ExtendedRequest, res: Response) => {
  const { slug } = req.params

  const user = await findUserBySlug(slug)
  if(!user) return res.json({ error: 'Usuário inexistente' })

  const followingCount = await getUserFollowingCount(user.slug)
  const followersCount = await getUserFollowersCount(user.slug)
  const tweetCount = await getUserTweetCount(user.slug)
  
  res.json({ user, followersCount, followingCount, tweetCount })
}

export const getUserTweets = async (req: ExtendedRequest, res: Response) => {
  const { slug } = req.params

  const safeData = userTweetsSchema.safeParse(req.query)

  if(!safeData.success) {
    return res.json({ error: z.treeifyError(safeData.error) })
  }

  let perPage = 2;
  let currentPage = safeData.data.page ?? 0;

  const tweets = await findTweetsByUser(
    slug,
    currentPage,
    perPage
  )

  res.json({ tweets, page: currentPage })
}

export const followToggle = async (req: ExtendedRequest, res: Response) => {
  const { slug } = req.params

  const me = req.userSlug as string;
 
  const hasUserToBeFollowed = await findUserBySlug(slug);
  if(!hasUserToBeFollowed) return res.json({ error: 'Usuário inexistente' })

  const follows = await checkIfFollows(me, slug)
  if(!follows) {
    await follow(me, slug) 
    res.json({ following: true })
  } else {
    await unfollow(me, slug)
    res.json({ following: false })
  }
}