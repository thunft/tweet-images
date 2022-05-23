import dayjs from "dayjs";
import { getMintTweet } from "../templates/DailyMint/tweet";
import { writeFile } from "../lib/io";

export const generateTweetOfDailyMint = async (drops: any) => {
  const tweet = getMintTweet(drops)

  await writeFile(`./data/DailyMint/tweets/${dayjs().format("DD-MM-YYYY")}.md`, tweet)
}