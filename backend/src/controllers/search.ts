import type { Response } from "express";
import type { ExtendedRequest } from "../types/extended-request";
import { serachSchema } from "../schemas/search";
import z from "zod";
import { findTweetByBody } from "../services/tweet";

export const searchTweets = async (req: ExtendedRequest, res: Response) => {
 const safeData = serachSchema.safeParse(req.query)
  
  if(!safeData.success) {
    return res.json({ error: z.treeifyError(safeData.error) })
  }

  let perPage = 2;
  let currentPage = safeData.data.page ?? 0

  const tweets = await findTweetByBody(
    safeData.data.q,
    currentPage,
    perPage
  )

  res.json({ tweets, page: currentPage })
}