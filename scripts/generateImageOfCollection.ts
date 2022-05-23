import { writeFile } from "../lib/io"
import { INFTCollection } from "../types/subgraph"
import { getImage } from "../utils/getImage"
import dayjs from 'dayjs'
import isIPFS from "is-ipfs"
import { getBody } from "../templates/Mint/html"
import { getStyles } from "../templates/Mint/css"

export interface IData {
  name: string;
  imageURI: string;
  websiteURL: string;
  mintDate: string;
  blockchain: string;
}

const iconUrl = 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/icon/'

export const blockchainIcons: { [key: string]: string } = {
  ethereum: `${iconUrl}eth.svg`,
  polygon: `${iconUrl}matic.svg`,
  solana: `${iconUrl}sol.svg`,
  bsc: `${iconUrl}bnb.svg`,
}

const isCID = (image: string) => {
  return isIPFS.cid(image)
}

const getFormatData = async (collection: INFTCollection) => {
  const { name, imageURI, websiteURL, mintDate, blockchain } = collection
  const data = {
    name,
    imageURI: isCID(imageURI) ? `https://ipfs.io/ipfs/${imageURI}` : imageURI,
    websiteURL: websiteURL.replace('https://', ''),
    mintDate: dayjs(mintDate).format('DD MMM'),
    blockchain: blockchainIcons[blockchain.toLowerCase()]
  }
  return data
}

export const generateImageOfCollection = async (collection: INFTCollection) => {
  const data = await getFormatData(collection)
  if (!data) return


  const bufferImage = await getImage({
    body: getBody(data),
    styles: await getStyles()
  })

  if (!bufferImage) return undefined

  // Save image to disk
  const image = Buffer.from(bufferImage as any)
  await writeFile(`./data/Mint/images/${collection.collectionId}.png`, image)
}