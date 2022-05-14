import { publishTweet } from "../lib/publishTweet"
import { initializeTwitterClient } from "../lib/twitter-client"
import { Publication } from "../types/task"
import { readFile, writeFile } from "../lib/io"
import { getNFTCollections } from "../subgraphApi"
import fs from "fs"

const main = async () => {
  const collections = await getNFTCollections({ status: "1", paymentPlan: ["basic", "premium", "featured"] }, { collectionId: { asc: false } })

  let isPublishedTweet = false
  for (const collection of collections) {
    let tweet: Publication
    const fileExists = fs.existsSync(`./data/tweets/${collection.collectionId}.json`)
    if (fileExists) {
      const tweetInfo = await readFile(`./data/tweets/${collection.collectionId}.json`)
      tweet = JSON.parse(tweetInfo.toString())

      if (tweet.isPublished) {
        continue
      }
      
      const { data } = tweet
      
      if (isPublishedTweet) return
      
      // Publish Tweet
      const twitterClient = await initializeTwitterClient()
      publishTweet(twitterClient, data[0])
      
      const newTweet = { ...tweet, isPublished: true }
      await writeFile(`./data/tweets/${collection.collectionId}.json`, JSON.stringify(newTweet))
      isPublishedTweet = true
    }
  }
}

main()