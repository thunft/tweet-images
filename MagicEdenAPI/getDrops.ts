import dayjs from "dayjs"
import { MAGIC_EDEN_API_URL } from "./constants"
import fetch from 'node-fetch'

const getDropsFromMagicEden = async () => {
  try {
    const drops = await fetch(`${MAGIC_EDEN_API_URL}/drops?limit=250&offset=0`)
    return await drops.json()
  } catch (error) {
    console.error(error)
  }
}

export const getDrops = async () => {
  const drops = await getDropsFromMagicEden()
  const filteredDrops = filterByTodayLaunch(drops)
  const filteredDropsAfterTwelveHoursFromZeroHour = filterByAfterTwelveHoursFromZeroHour(filteredDrops)
  const filterEigthBestDrops = filterByEigthBestDrops(filteredDropsAfterTwelveHoursFromZeroHour)
  const sortedMintDate = sortByMintDate(filterEigthBestDrops)
  const formattedDrops = formatDrops(sortedMintDate)
  return formattedDrops
}

const formatDrops = (drops: any) => {
  return drops.map((drop: any) => {
    return {
      image: drop.assets.profileImage,
      twitterHandle: removeCharactersNotAllowedInTwitterHandle(drop.links.twitter.split("/").pop().substr(0, 15)),
      mintDate: dayjs(drop.launchDate).format("HH:mm UTC")
    }
  })
}

const removeCharactersNotAllowedInTwitterHandle = (twitterHandle: string) => {
  return twitterHandle.replace(/[^a-zA-Z0-9_]/g, "")
}

const filterByTodayLaunch = (drops: any) => {
  return drops.filter((drop: any) => {
    return dayjs(drop.launchDate).isSame(dayjs(), "day")
  })
}

const filterByAfterTwelveHoursFromZeroHour = (drops: any) => {
  return drops.filter((drop: any) => {
    return dayjs(drop.launchDate).isAfter(dayjs().startOf("day").add(12, "hour"))
  })
}

const filterByEigthBestDrops = (drops: any) => {
  return drops.sort((a: any, b: any) => {
    return b.upvote - a.upvote
  }).slice(0, 8)
}

const sortByMintDate = (drops: any) => {
  return drops.sort((a: any, b: any) => {
    return dayjs(a.launchDate).isAfter(b.launchDate) ? 1 : -1
  })
}
