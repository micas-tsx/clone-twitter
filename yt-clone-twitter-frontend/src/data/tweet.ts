// biome-ignore lint/style/useImportType: <explanation>
import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Outro dia magico',
    image: 'https://www.google.com/imgres?q=image%20tweet&imgurl=https%3A%2F%2Fphotos5.appleinsider.com%2Fgallery%2F50177-98486-tweet-xl.jpg&imgrefurl=https%3A%2F%2Fappleinsider.com%2Farticles%2F22%2F09%2F01%2Ftwitter-is-testing-an-edit-tweet-feature&docid=SeFwfcNDnQ9m0M&tbnid=4YxlaYYlHvUdNM&vet=12ahUKEwi40JTKqt-KAxVbALkGHXfTI10QM3oFCIMBEAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwi40JTKqt-KAxVbALkGHXfTI10QM3oFCIMBEAA',
    likeCount: 320,
    commentCount: 20,
    retweetCount: 15,
    liked: true,
    retweeted: false,
    dataPost: new Date (2025, 0, 1, 10 ,0, 0)
}