import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  subgraphApiUrl:
    "https://api.thegraph.com/subgraphs/name/albertocruzluis/nftcollections-v3",
  contractAddress: "0xA5dc4b08bd5203dAF4E4dd35e82a1A788B1B98B5",
  mumbaiUrl: process.env.MUMBAI_URL,
  appKey: process.env.TWITTER_API_KEY as string,
  appSecret: process.env.TWITTER_API_SECRET as string,
  accessToken: process.env.TWITTER_OAUTH_TOKEN_CLIENT as string,
  accessSecret: process.env.TWITTER_OAUTH_SECRET_CLIENT as string
};
