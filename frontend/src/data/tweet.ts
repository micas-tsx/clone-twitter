// biome-ignore lint/style/useImportType: <explanation>
import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Outro dia magico',
    image: 'https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/10/twitter-cover-photo-9.jpg',
    likeCount: 320,
    commentCount: 20,
    retweetCount: 15,
    liked: true,
    retweeted: false,
    dataPost: new Date (2025, 0, 1, 10 ,0, 0)
}