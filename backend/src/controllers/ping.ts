// biome-ignore lint/style/useImportType: <explanation>
import { Request, Response } from "express";

export const ping = (req:Request, res:Response) => {
    res.json({ pong: true })
}