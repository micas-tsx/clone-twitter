import type { Response } from "express";
import type { ExtendedRequest } from "../types/extended-request";
import z from "zod";
import { feedSchema } from "../schemas/feed";
import { getUserFollowing } from "../services/user";
import { findTweetFeed } from "../services/tweet";

export const getFeed = async(req: ExtendedRequest, res: Response) => {
  const safeData = feedSchema.safeParse(req.query)
  
  if(!safeData.success) {
    return res.json({ error: z.treeifyError(safeData.error) })
  }

  let perPage = 2;
  let currentPage = safeData.data.page ?? 0

  const following = await getUserFollowing(req.userSlug as string)

  const tweets = await findTweetFeed(following, currentPage, perPage)

  res.json({ tweets, page: currentPage })
}