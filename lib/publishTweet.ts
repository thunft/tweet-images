import { TwitterApi } from 'twitter-api-v2'
import { PublicationData } from '../types/task'

export const publishTweet = async (
  twitterClient: TwitterApi,
  publication: PublicationData
) => {
  try {
    twitterClient.readWrite
    await twitterClient.v2.tweet({
      text: publication.text
    })

    console.log(`Tweet published on ${new Date().toLocaleString('es-ES')}`)
  } catch (error) {
    console.error('Error at publishing tweet', error)
  }
}