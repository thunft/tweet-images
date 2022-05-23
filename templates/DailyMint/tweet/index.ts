const formatMintDate = (date: string) => {
  const dateTime = date.split(" ")
  const time = dateTime[0]
  const timeSplit = time.split(":")
  const hour = timeSplit[0]
  const minute = timeSplit[1]
  const timeFormat = `${hour}${minute != "00" ? `:${minute}` : ""}`
  const timeFormatWithUTC = `${timeFormat}UTC`
  return timeFormatWithUTC
}

export const getMintTweet = (drops: any) => {
  return `Daily Mints in #SolanaNFT 🚀

⏰ Mint May 23

${drops.map(({ twitterHandle, mintDate }: any) => `${formatMintDate(mintDate)} @${twitterHandle}`).join('\n')}

🔗 thunft.com/daily-mint/solana

#NFTCollections`
}
