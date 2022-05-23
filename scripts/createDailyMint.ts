import { getDrops } from "../MagicEdenAPI/getDrops"
import { generateImageOfDailyMint } from "./generateImageOfDailyMint"
import { generateTweetOfDailyMint } from "./generateTweetOfDailyMint";

const main = async () => {
  const drops = await getDrops()

  console.log("generate image & tweet of daily mint");
  await generateImageOfDailyMint(drops)
  await generateTweetOfDailyMint(drops)
}

main()