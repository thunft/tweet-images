import { getNFTCollections } from "../subgraphApi"
import { generateImageOfCollection } from "./generateImageOfCollection"
import { generateTweetOfCollection } from "./generateTweetOfCollection"
import fs from "fs"

const main = async () => {
  const collections = await getNFTCollections({ status: "1", paymentPlan: ["basic", "premium", "featured"] }, { collectionId: { asc: false } })

  let countCollections = 0
  for (const collection of collections) {
    if (countCollections > 3) return 

    const fileExists = fs.existsSync(`./data/tweets/${collection.collectionId}.json`)
    if (fileExists) {
      console.log("exist file");
      continue
    }

    console.log("generate image & tweet");
    await generateImageOfCollection(collection)
    await generateTweetOfCollection(collection)

    countCollections++
    await new Promise(resolve => setTimeout(resolve, 5000))
  }
}

main()