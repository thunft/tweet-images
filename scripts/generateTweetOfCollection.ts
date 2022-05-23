import { writeFile } from "../lib/io";
import { getMintTweet, ICollectionData } from "../templates/Mint/tweet";
import { INFTCollection } from "../types/subgraph";

const dayTime = 1000 * 60 * 60 * 24;
const hourTime = 1000 * 60 * 60;
const minuteTime = 1000 * 60;

export const generateTweetOfCollection = async (collection: INFTCollection) => {
  const dataTweet: ICollectionData = {
    collectionId: collection.collectionId,
    name: collection.name,
    websiteURL: collection.websiteURL,
    mintDate: collection.mintDate,
    blockchain: collection.blockchain,
    price: collection.price,
    twitter: collection.twitter,
    totalSupply: collection.totalSupply
  }

  const tweet = getMintTweet(dataTweet)

  const duration = minuteTime * 2

  const newTask = {
    "pubDate": new Date(new Date().getTime() + duration),
    "data": [
      {
        "text": tweet,
        "media": `./data/Mint/images/${collection.collectionId}.png`
      }
    ],
    "isPublished": false
  }

  await writeFile(`./data/Mint/tweets/${collection.collectionId}.json`, JSON.stringify(newTask))
  return newTask
}