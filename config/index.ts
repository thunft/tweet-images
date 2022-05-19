import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  subgraphApiUrl:
    "https://api.thegraph.com/subgraphs/name/thunft/nft-collections",
  contractAddress: "0xB1B45077e814af0986E1b541Ffc4bCD7E8360Fa7",
  mumbaiUrl: process.env.MUMBAI_URL,
  appKey: process.env.TWITTER_API_KEY as string,
  appSecret: process.env.TWITTER_API_SECRET as string,
  accessToken: process.env.TWITTER_OAUTH_TOKEN_CLIENT as string,
  accessSecret: process.env.TWITTER_OAUTH_SECRET_CLIENT as string
};
