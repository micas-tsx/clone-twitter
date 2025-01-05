// biome-ignore lint/style/useImportType: <explanation>
import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Outro dia magico',
    image: 'https://www.instagram.com/micas.tsx/p/DDs5Dmat7uVRbTdXC9Ew8h0yEBR_yW1l8oqGAg0/',
    likeCount: 320,
    commentCount: 20,
    retweetCount: 15,
    liked: true,
    retweeted: false,
    dataPost: new Date (2025, 0, 1, 10 ,0, 0)
}