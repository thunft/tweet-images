import { INFTCollection } from "../types/subgraph"
import { generateImage } from "./generateImage"
import dayjs from 'dayjs'
import isIPFS from "is-ipfs"
import * as fs from 'fs'

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

export const getImage = async (collection: INFTCollection) => {
  const mintTemplateHtml = fs.readFileSync('templates/html/mint.html', 'utf8')
  const data = await getFormatData(collection)
  if (!data) return

  const bufferImage = await generateImage(mintTemplateHtml, data)
  return bufferImage
}