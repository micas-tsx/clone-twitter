import type { Response } from "express";
import type { ExtendedRequest } from "../types/extended-request";
import { getUserSuggestions } from "../services/user";

export const getSuggestions = async(req: ExtendedRequest, res: Response) => {
  const suggestions = await getUserSuggestions(req.userSlug as string)

  res.json({ user: suggestions })
}