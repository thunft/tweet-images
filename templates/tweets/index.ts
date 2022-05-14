import dayjs from "dayjs";
import slugify from "slugify"

export interface ICollectionData {
  collectionId: string,
  name: string;
  totalSupply: string;
  mintDate: string;
  price: string;
  blockchain: string;
  websiteURL: string;
  twitter: string;
}

interface IBlockchainSymbolCoin {
  [key: string]: string
}

const blockchainSymbolCoin: IBlockchainSymbolCoin = {
  ethereum: 'ETH',
  polygon: 'MATIC',
  solana: 'SOL',
  bsc: 'BNB'
}

const getTwitterHandle = (twitter: string) => {
  const twitterRegex = /twitter\.com\/([^\/]*)/
  const match = twitter.match(twitterRegex)
  if (match) {
    return match[1]
  }
  return ''
}

const getSlug = (name: string, id: string) => {
  const slug = slugify(name, { lower: true })
  return `${slug}-${id}`
}

const getMintDate = (mintDate: string) => {
  return dayjs(mintDate).format('MMM DD')
}

export const getMintTweet = (data: ICollectionData) => {
  return `🚀 ${data.name}

💎 Supply: ${parseInt(data.totalSupply)} ITEMS
⚡️ Mint Price: ${data.price} ${blockchainSymbolCoin[data.blockchain.toLocaleLowerCase()]}
🗓️  Date: ${getMintDate(data.mintDate)}
  
🔵 Twitter:   @${getTwitterHandle(data.twitter)}
🌐 Mint Link: ${data.websiteURL}

🔗 https://www.thunft.com/nft-collection/${getSlug(data.name, data.collectionId)}
  
#NFTMint #NFTCollection #NFTdrop`
}

