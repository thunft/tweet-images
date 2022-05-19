import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  subgraphApiUrl:
    "https://api.thegraph.com/subgraphs/name/albertocruzluis/nftcollections-v5",
  contractAddress: "0xF009262CB3F30a7fdBc3C4A18E277ca8F2557806",
  mumbaiUrl: process.env.MUMBAI_URL,
  appKey: process.env.TWITTER_API_KEY as string,
  appSecret: process.env.TWITTER_API_SECRET as string,
  accessToken: process.env.TWITTER_OAUTH_TOKEN_CLIENT as string,
  accessSecret: process.env.TWITTER_OAUTH_SECRET_CLIENT as string
};
