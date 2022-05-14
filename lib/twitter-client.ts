import { config } from '../config'
import { TwitterApi } from 'twitter-api-v2'

export const initializeTwitterClient = async () => {
  // Create a new Twitter API client with three-legged OAuth 1.0a authentication.
  const twitterClient = new TwitterApi({
    appKey: config.appKey,
    appSecret: config.appSecret,
    accessToken: config.accessToken,
    accessSecret: config.accessSecret
  })

  // Check if Twitter API client connected succesfully
  try {
    await twitterClient.currentUserV2()
  } catch (error: any) {
    if (error.data?.errors?.length) { console.error(error.data?.errors[0].message) } else {
      console.error(
        'An error has occurred, check that the token is valid and the Twitch API is online'
      )
    }

    process.exit(-1)
  }

  return twitterClient
}
